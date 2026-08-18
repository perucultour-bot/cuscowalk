type BookingData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  date: string;
  time: string;
  people: number;
};

const wrapper = (title: string, body: string) => `
<!DOCTYPE html>
<html>
  <body style="margin:0;background:#FAF6EC;font-family:Georgia,serif;padding:32px 0;">
    <table width="100%" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:4px;overflow:hidden;">
      <tr>
        <td style="background:#0B0B0C;padding:28px 32px;">
          <table><tr>
            <td style="width:26px;height:26px;border-radius:50%;background:#FFD400;"></td>
            <td style="padding-left:10px;color:#FAF6EC;font-size:20px;font-weight:bold;">Cusco Walk</td>
          </tr></table>
        </td>
      </tr>
      <tr>
        <td style="padding:32px;font-family:Arial,sans-serif;color:#151513;font-size:15px;line-height:1.6;">
          <h2 style="font-family:Georgia,serif;margin-top:0;">${title}</h2>
          ${body}
        </td>
      </tr>
      <tr>
        <td style="padding:20px 32px;background:#F1EADA;color:#7C7669;font-size:12px;font-family:Arial,sans-serif;">
          Cusco Walk · Free Walking Tours · perucultour@gmail.com
        </td>
      </tr>
    </table>
  </body>
</html>`;

export function customerConfirmationEmail(b: BookingData) {
  const body = `
    <p>Hola ${b.firstName},</p>
    <p>¡Gracias por reservar tu Free Walking Tour con Cusco Walk! Tu reserva ha sido confirmada.</p>
    <table style="width:100%;border-collapse:collapse;margin:20px 0;">
      <tr><td style="padding:8px 0;color:#7C7669;">Fecha</td><td style="padding:8px 0;text-align:right;font-weight:bold;">${b.date}</td></tr>
      <tr><td style="padding:8px 0;color:#7C7669;border-top:1px dashed #D8D2C4;">Hora</td><td style="padding:8px 0;text-align:right;font-weight:bold;border-top:1px dashed #D8D2C4;">${b.time}</td></tr>
      <tr><td style="padding:8px 0;color:#7C7669;border-top:1px dashed #D8D2C4;">Participantes</td><td style="padding:8px 0;text-align:right;font-weight:bold;border-top:1px dashed #D8D2C4;">${b.people}</td></tr>
    </table>
    <p><strong>Punto de encuentro:</strong> Plaza de Armas de Cusco, junto a la Fuente Inca.</p>
    <p>Para reconocer a nuestro guía, recuerda que siempre llevará un <strong>paraguas negro</strong>. Te recomendamos llegar entre 5 y 10 minutos antes.</p>
    <p><strong>Duración:</strong> aproximadamente 2 horas. Al finalizar, disfrutaremos de una degustación de una bebida tradicional local.</p>
    <p>Si necesitas modificar o cancelar tu reserva, puedes responder a este correo.</p>
    <p>¡Estamos deseando mostrarte la magia de Cusco!<br>Equipo de Cusco Walk</p>
  `;
  return wrapper("Tu reserva ha sido confirmada", body);
}

export function companyNotificationEmail(b: BookingData) {
  const body = `
    <p>Nueva reserva recibida a través del sitio web:</p>
    <table style="width:100%;border-collapse:collapse;margin:20px 0;">
      <tr><td style="padding:8px 0;color:#7C7669;">Nombre</td><td style="padding:8px 0;text-align:right;font-weight:bold;">${b.firstName} ${b.lastName}</td></tr>
      <tr><td style="padding:8px 0;color:#7C7669;border-top:1px dashed #D8D2C4;">Correo</td><td style="padding:8px 0;text-align:right;font-weight:bold;border-top:1px dashed #D8D2C4;">${b.email}</td></tr>
      <tr><td style="padding:8px 0;color:#7C7669;border-top:1px dashed #D8D2C4;">WhatsApp</td><td style="padding:8px 0;text-align:right;font-weight:bold;border-top:1px dashed #D8D2C4;">${b.phone || "—"}</td></tr>
      <tr><td style="padding:8px 0;color:#7C7669;border-top:1px dashed #D8D2C4;">Fecha</td><td style="padding:8px 0;text-align:right;font-weight:bold;border-top:1px dashed #D8D2C4;">${b.date}</td></tr>
      <tr><td style="padding:8px 0;color:#7C7669;border-top:1px dashed #D8D2C4;">Hora</td><td style="padding:8px 0;text-align:right;font-weight:bold;border-top:1px dashed #D8D2C4;">${b.time}</td></tr>
      <tr><td style="padding:8px 0;color:#7C7669;border-top:1px dashed #D8D2C4;">Participantes</td><td style="padding:8px 0;text-align:right;font-weight:bold;border-top:1px dashed #D8D2C4;">${b.people}</td></tr>
      <tr><td style="padding:8px 0;color:#7C7669;border-top:1px dashed #D8D2C4;">Recibido</td><td style="padding:8px 0;text-align:right;font-weight:bold;border-top:1px dashed #D8D2C4;">${new Date().toLocaleString("es-PE", { timeZone: "America/Lima" })}</td></tr>
    </table>
  `;
  return wrapper("Nueva reserva — Cusco Walk", body);
}
