"use client";
import { useApp } from "./Providers";

export default function Footer() {
  const { t, lang } = useApp();
  return (
    <footer className="bg-negro text-[#D8D3C4] pt-14 pb-6">
      <div className="container-cw">
        {/* Logo + GERCETUR badge, lado a lado, con el sello destacado */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-cusco-walk.jpg" alt="Cusco Walk" className="h-11 w-11 rounded object-cover flex-none" />
            <p className="text-sm max-w-[220px]">{t.footer.tagline}</p>
          </div>

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded px-4 py-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gercetur-logo.png" alt="GERCETUR Cusco" className="h-9 w-auto bg-white rounded p-1 flex-none" />
            <div>
              <p className="text-sm font-semibold text-crema leading-tight">
                {lang === "es" ? "Guías oficiales y verificados" : "Official, verified guides"}
              </p>
              <p className="text-[11px] text-[#8A8474] leading-tight">
                {lang === "es" ? "Registrados ante GERCETUR" : "Registered with GERCETUR"}
              </p>
            </div>
          </div>
        </div>

        {/* Enlaces, en una sola fila compacta */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-5 border-t border-white/10 text-sm">
          <a href="/#about" className="hover:text-amarillo">{t.nav.about}</a>
          <a href="/#itinerary" className="hover:text-amarillo">{t.nav.itinerary}</a>
          <a href="/#gallery" className="hover:text-amarillo">{t.nav.gallery}</a>
          <a href="/#testimonials" className="hover:text-amarillo">{t.nav.reviews}</a>
          <a href="/#faq" className="hover:text-amarillo">{t.nav.faq}</a>
          <a href="/blog" className="hover:text-amarillo">Blog</a>
          <a href="/#booking" className="hover:text-amarillo">{t.nav.book}</a>
          <span className="w-px h-4 bg-white/15 mx-1" />
          <a href="#" className="text-[#8A8474] hover:text-amarillo">{t.footer.privacy}</a>
          <a href="#" className="text-[#8A8474] hover:text-amarillo">{t.footer.terms}</a>
        </div>

        {/* Redes sociales + copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-white/10">
          <div className="flex gap-2.5">
            <a
              href="https://www.instagram.com/cuscowalk/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-amarillo hover:text-amarillo transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a
              href="https://share.google/IFsEJoDSQSKKj76YD"
              target="_blank"
              rel="noopener"
              aria-label="Google"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-amarillo hover:text-amarillo transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </a>
            <a
              href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d28007796-Reviews-Peru_Cultour_Alternative_Tours-Cusco_Cusco_Region.html"
              target="_blank"
              rel="noopener"
              aria-label="TripAdvisor"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-amarillo hover:text-amarillo transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <circle cx="12" cy="12" r="9" />
                <circle cx="9" cy="12" r="2.4" />
                <circle cx="15" cy="12" r="2.4" />
              </svg>
            </a>
          </div>
          <div className="text-xs text-[#7A7466] text-center sm:text-right">
            <span>© {new Date().getFullYear()} Cusco Walk. {t.footer.rights}</span>
            <span className="mx-1.5">·</span>
            <span>{t.footer.made}</span>
          </div>
        </div>

        <div className="mt-3 text-[10.5px] text-[#5A5548] text-center sm:text-left">
          Fotos de Cusco Walk. Una foto de referencia del Museo del Luthier vía{" "}
          <a href="https://commons.wikimedia.org" target="_blank" rel="noopener" className="underline hover:text-amarillo">
            Wikimedia Commons
          </a>
          . Ilustraciones propias de Cusco Walk.
        </div>
      </div>
    </footer>
  );
}
