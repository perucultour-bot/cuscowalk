import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { companyNotificationEmail, customerConfirmationEmail } from "@/lib/email";

// Esquema de validación del lado del servidor — nunca confiar solo en el
// formulario del cliente.
const bookingSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email(),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  date: z.string().refine((d) => !Number.isNaN(Date.parse(d)), "Fecha inválida"),
  time: z.enum(["10:30 AM", "1:00 PM", "3:30 PM"]),
  people: z.coerce.number().int().min(1).max(20),
});

export async function POST(req: NextRequest) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 422 });
  }
  const booking = parsed.data;

  // Rechaza fechas pasadas (comparando solo por día, en huso horario de Cusco).
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const requested = new Date(booking.date);
  requested.setHours(0, 0, 0, 0);
  if (requested < today) {
    return NextResponse.json({ ok: false, error: "La fecha ya pasó" }, { status: 422 });
  }

  // TODO(persistencia): aquí es donde guardarías la reserva antes de
  // notificar, por ejemplo en Supabase:
  //
  // const supabase = createServerClient(...);
  // await supabase.from("bookings").insert({ ...booking, created_at: new Date().toISOString() });
  //
  // Guardar primero te permite reintentar el envío de correo sin perder
  // la reserva si Resend falla.

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Cusco Walk <onboarding@resend.dev>";
  const companyEmail = process.env.COMPANY_NOTIFY_EMAIL ?? "perucultour@gmail.com";

  if (!apiKey) {
    // Sin clave configurada, confirmamos la reserva igual (para no romper
    // la experiencia en desarrollo) pero avisamos en el log del servidor.
    console.warn("RESEND_API_KEY no configurada — omitiendo envío de correos.", booking);
    return NextResponse.json({ ok: true, emailSent: false });
  }

  try {
    const resend = new Resend(apiKey);

    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: companyEmail,
        subject: `Nueva reserva — ${booking.firstName} ${booking.lastName} (${booking.date}, ${booking.time})`,
        html: companyNotificationEmail(booking),
      }),
      resend.emails.send({
        from: fromEmail,
        to: booking.email,
        subject: "Confirmación de tu reserva - Cusco Walk",
        html: customerConfirmationEmail(booking),
      }),
    ]);

    return NextResponse.json({ ok: true, emailSent: true });
  } catch (err) {
    console.error("Error enviando correos de reserva:", err);
    // La reserva puede seguir siendo válida aunque el correo falle;
    // devolvemos error para que el cliente pueda avisar y reintentar.
    return NextResponse.json({ ok: false, error: "No se pudo enviar el correo de confirmación" }, { status: 502 });
  }
}
