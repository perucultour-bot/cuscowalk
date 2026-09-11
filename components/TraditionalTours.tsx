"use client";

import { useApp } from "./Providers";
import { TOURS, whatsappLink } from "@/lib/tours";

export default function TraditionalTours() {
  const { lang } = useApp();
  const copy = {
    es: { eyebrow: "Otros tours en Cusco", title: "¿Quieres ver más? Tenemos tours tradicionales también", cta: "Reservar por WhatsApp" },
    en: { eyebrow: "Other tours in Cusco", title: "Want to see more? We also run traditional tours", cta: "Book via WhatsApp" },
  }[lang];

  return (
    <section id="tours" className="py-14 sm:py-20 lg:py-28 bg-crema-600 dark:bg-negro-soft">
      <div className="container-cw">
        <div className="max-w-xl mb-8 sm:mb-14">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="mt-3 text-4xl lg:text-5xl">{copy.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TOURS.map((tour) => (
            <div key={tour.slug} className="border border-piedra-200 dark:border-negro-800 rounded overflow-hidden bg-white dark:bg-negro-800 flex flex-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tour.image} alt={tour.name[lang]} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              <div className="p-7 flex flex-col flex-1">
              <span className="font-mono text-xs text-piedra">{tour.duration[lang]}</span>
              <h3 className="font-serif text-xl mt-2">{tour.name[lang]}</h3>
              <p className="text-sm text-piedra mt-3 flex-1">{tour.description[lang]}</p>
              <ul className="mt-4 space-y-1.5">
                {tour.highlights[lang].map((h) => (
                  <li key={h} className="text-xs flex items-start gap-2">
                    <span className="text-amarillo-600 dark:text-amarillo mt-0.5">●</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(tour.whatsappMessage[lang])}
                target="_blank"
                rel="noopener"
                className="btn btn-primary w-full mt-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/whatsapp-icon.png" alt="" className="w-5 h-5" />
                {copy.cta}
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
