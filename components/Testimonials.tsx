"use client";
import { useApp } from "./Providers";

export default function Testimonials() {
  const { t } = useApp();
  return (
    <section id="testimonials" className="py-24 lg:py-28">
      <div className="container-cw">
        <div className="max-w-xl mb-10">
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.testimonials.title}</h2>
        </div>
        <div className="flex items-center gap-5 p-7 border border-piedra-200 dark:border-negro-800 rounded mb-10 bg-white dark:bg-negro-800 flex-wrap">
          <span className="font-serif text-5xl">4.9</span>
          <div>
            <span className="text-amarillo-600 dark:text-amarillo tracking-widest">★★★★★</span>
            <small className="block text-piedra mt-1">{t.testimonials.ratingSub}</small>
          </div>
          <div className="flex gap-3 ml-auto flex-wrap">
            <a
              href="https://share.google/IFsEJoDSQSKKj76YD"
              target="_blank"
              rel="noopener"
              className="text-xs font-semibold underline decoration-amarillo underline-offset-4"
            >
              Ver en Google →
            </a>
            <a
              href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d28007796-Reviews-Peru_Cultour_Alternative_Tours-Cusco_Cusco_Region.html"
              target="_blank"
              rel="noopener"
              className="text-xs font-semibold underline decoration-amarillo underline-offset-4"
            >
              TripAdvisor →
            </a>
            <a
              href="https://www.instagram.com/cuscowalk/"
              target="_blank"
              rel="noopener"
              className="text-xs font-semibold underline decoration-amarillo underline-offset-4"
            >
              Instagram →
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {t.testimonials.items.map((rev) => (
            <div key={rev.n} className="border border-piedra-200 dark:border-negro-800 rounded p-6 bg-white dark:bg-negro-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-negro text-amarillo flex items-center justify-center font-serif font-semibold">{rev.n.charAt(0)}</div>
                <div><b className="block text-sm">{rev.n}</b><span className="text-xs text-piedra">{rev.c}</span></div>
              </div>
              <span className="text-amarillo-600 dark:text-amarillo text-xs block mb-2">★★★★★</span>
              <p className="text-sm leading-relaxed">&ldquo;{rev.t}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
