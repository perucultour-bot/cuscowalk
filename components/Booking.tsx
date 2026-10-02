"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "./Providers";

type FormState = {
  firstName: string; lastName: string; email: string; phone: string;
  date: string; time: string; people: number; tourLanguage: "es" | "en";
};
type Errors = Partial<Record<keyof FormState, string>>;

export default function Booking({ prefillSlot }: { prefillSlot: string | null }) {
  const { t, lang } = useApp();
  const router = useRouter();
  const [form, setForm] = useState<FormState>({ firstName: "", lastName: "", email: "", phone: "", date: "", time: "", people: 1, tourLanguage: lang });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const todayISO = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (prefillSlot) setForm((f) => ({ ...f, time: prefillSlot }));
  }, [prefillSlot]);

  function validate(): boolean {
    const e: Errors = {};
    if (!form.firstName.trim()) e.firstName = t.booking.errRequired;
    if (!form.lastName.trim()) e.lastName = t.booking.errRequired;
    if (!form.email.trim()) e.email = t.booking.errRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.booking.errEmail;
    if (!form.date) e.date = t.booking.errRequired;
    else if (form.date < todayISO) e.date = t.booking.errDate;
    if (!form.time) e.time = t.booking.errRequired;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
      const q = new URLSearchParams({
        name: `${form.firstName} ${form.lastName}`.trim(),
        date: form.date,
        time: form.time,
        people: String(form.people),
        tourLanguage: form.tourLanguage,
      });
      router.push(`/gracias?${q.toString()}`);
    } catch {
      setStatus("error");
    }
  }

  const field = (key: keyof FormState) => errors[key] ? "border-red-500" : "border-piedra-200 dark:border-negro-800";

  return (
    <form onSubmit={handleSubmit} className="bg-crema dark:bg-negro-soft text-[#151513] dark:text-crema rounded p-9 shadow-2xl" noValidate>
      {status === "error" && (
        <p className="text-red-600 text-sm mb-4 bg-red-50 border border-red-200 rounded p-3">{t.booking.errServer}</p>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold">{t.booking.first}</label>
          <input className={`border rounded px-3.5 py-3 bg-white dark:bg-negro-800 text-[#151513] dark:text-crema ${field("firstName")}`}
            value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
          {errors.firstName && <span className="text-sm text-red-600">{errors.firstName}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold">{t.booking.last}</label>
          <input className={`border rounded px-3.5 py-3 bg-white dark:bg-negro-800 text-[#151513] dark:text-crema ${field("lastName")}`}
            value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
          {errors.lastName && <span className="text-sm text-red-600">{errors.lastName}</span>}
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-sm font-semibold">{t.booking.email}</label>
          <input type="email" className={`border rounded px-3.5 py-3 bg-white dark:bg-negro-800 text-[#151513] dark:text-crema ${field("email")}`}
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {errors.email && <span className="text-sm text-red-600">{errors.email}</span>}
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-sm font-semibold">{t.booking.whatsapp} <span className="font-normal text-piedra">{t.booking.optional}</span></label>
          <input type="tel" placeholder="+51 9..." className="border border-piedra-200 dark:border-negro-800 rounded px-3.5 py-3 bg-white dark:bg-negro-800 text-[#151513] dark:text-crema"
            value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold">{t.booking.date}</label>
          <input type="date" min={todayISO} className={`border rounded px-3.5 py-3 bg-white dark:bg-negro-800 text-[#151513] dark:text-crema ${field("date")}`}
            value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          {errors.date && <span className="text-sm text-red-600">{errors.date}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold">{t.booking.time}</label>
          <select className={`border rounded px-3.5 py-3 bg-white dark:bg-negro-800 text-[#151513] dark:text-crema ${field("time")}`}
            value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}>
            <option value="">{t.booking.timePlaceholder}</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="3:30 PM">3:30 PM</option>
          </select>
          {errors.time && <span className="text-sm text-red-600">{errors.time}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold">{t.booking.tourLang}</label>
          <select className="border rounded px-3.5 py-3 bg-white dark:bg-negro-800 text-[#151513] dark:text-crema border-piedra-200 dark:border-negro-800"
            value={form.tourLanguage} onChange={(e) => setForm({ ...form, tourLanguage: e.target.value as "es" | "en" })}>
            <option value="es">🇪🇸 {t.booking.tourLangEs}</option>
            <option value="en">🇬🇧 {t.booking.tourLangEn}</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-sm font-semibold">{t.booking.people}</label>
          <div className="flex items-center gap-3.5">
            <button type="button" onClick={() => setForm((f) => ({ ...f, people: Math.max(1, f.people - 1) }))} className="w-9 h-9 rounded-full border border-piedra-200">−</button>
            <span className="font-mono w-5 text-center">{form.people}</span>
            <button type="button" onClick={() => setForm((f) => ({ ...f, people: Math.min(20, f.people + 1) }))} className="w-9 h-9 rounded-full border border-piedra-200">+</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 flex-wrap mt-4">
        <small className="text-piedra text-sm max-w-[260px]">{t.booking.disclaimer}</small>
        <button type="submit" disabled={status === "submitting"} className="btn btn-primary disabled:opacity-60">
          {status === "submitting" ? t.booking.submitting : t.booking.submit}
        </button>
      </div>
    </form>
  );
}
