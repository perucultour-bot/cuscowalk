"use client";
import { useApp } from "./Providers";

export default function Contact() {
  const { t } = useApp();
  const cards = [
    { h: t.contact.wa, p: "+51 900 801 969" },
    { h: t.contact.email, p: "perucultour@gmail.com" },
    { h: t.contact.hours, p: "10:30 AM · 1:00 PM · 3:30 PM" },
    { h: t.contact.meet, p: t.contact.meetDesc },
  ];
  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28">
      <div className="container-cw">
        <div className="max-w-xl mb-10">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.contact.title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div key={c.h} className="border border-piedra-200 dark:border-negro-800 rounded p-6 bg-white dark:bg-negro-800 flex items-center gap-3">
              {c.h === t.contact.wa && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/whatsapp-icon.png" alt="" className="w-8 h-8 flex-none" />
              )}
              <div>
                <h4 className="font-semibold text-sm">{c.h}</h4>
                <p className="text-sm text-piedra mt-1">{c.p}</p>
              </div>
            </div>
          ))}
          <div className="sm:col-span-2 rounded overflow-hidden border border-piedra-200 dark:border-negro-800 aspect-[16/6]">
            <iframe
              src="https://www.google.com/maps?q=Plaza%20de%20Armas%20Cusco%20Peru&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa punto de encuentro"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
