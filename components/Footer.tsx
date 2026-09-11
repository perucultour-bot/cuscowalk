"use client";
import { useApp } from "./Providers";

export default function Footer() {
  const { t, lang } = useApp();
  return (
    <footer className="bg-negro text-[#D8D3C4] pt-16 pb-7">
      <div className="container-cw">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-cusco-walk.jpg" alt="Cusco Walk" className="h-10 w-10 rounded object-cover" />
            </div>
            <p className="text-sm max-w-[240px]">{t.footer.tagline}</p>
            <div className="flex gap-2.5 mt-4">
              <a
                href="https://www.instagram.com/cuscowalk/"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-amarillo hover:text-amarillo transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
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
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-amarillo hover:text-amarillo transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </a>
              <a
                href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d28007796-Reviews-Peru_Cultour_Alternative_Tours-Cusco_Cusco_Region.html"
                target="_blank"
                rel="noopener"
                aria-label="TripAdvisor"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-amarillo hover:text-amarillo transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="9" cy="12" r="2.4" />
                  <circle cx="15" cy="12" r="2.4" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-[#8A8474] mb-4">{t.footer.links}</h5>
            <a href="/#about" className="block text-sm mb-2.5 hover:text-amarillo">{t.nav.about}</a>
            <a href="/#itinerary" className="block text-sm mb-2.5 hover:text-amarillo">{t.nav.itinerary}</a>
            <a href="/#booking" className="block text-sm mb-2.5 hover:text-amarillo">{t.nav.book}</a>
          </div>
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-[#8A8474] mb-4">{t.footer.more}</h5>
            <a href="/#gallery" className="block text-sm mb-2.5 hover:text-amarillo">{t.nav.gallery}</a>
            <a href="/#testimonials" className="block text-sm mb-2.5 hover:text-amarillo">{t.nav.reviews}</a>
            <a href="/#faq" className="block text-sm mb-2.5 hover:text-amarillo">{t.nav.faq}</a>
            <a href="/blog" className="block text-sm mb-2.5 hover:text-amarillo">Blog</a>
          </div>
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-[#8A8474] mb-4">{t.footer.legal}</h5>
            <a href="#" className="block text-sm mb-2.5 hover:text-amarillo">{t.footer.privacy}</a>
            <a href="#" className="block text-sm mb-2.5 hover:text-amarillo">{t.footer.terms}</a>
          </div>
        </div>
        <div className="flex items-center gap-4 py-6 border-t border-white/10 flex-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gercetur-logo.png" alt="GERCETUR Cusco" className="h-10 w-auto bg-white rounded p-1.5" />
          <div>
            <p className="text-sm font-semibold text-crema">
              {lang === "es" ? "Guías oficiales y verificados en Cusco" : "Official, verified guides in Cusco"}
            </p>
            <p className="text-xs text-[#8A8474]">
              {lang === "es"
                ? "Registrados ante GERCETUR — Gerencia Regional de Comercio Exterior, Turismo y Artesanía"
                : "Registered with GERCETUR — Regional Bureau of Foreign Trade, Tourism and Crafts"}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center pt-6 text-xs text-[#7A7466] flex-wrap gap-3">
          <span>© {new Date().getFullYear()} Cusco Walk. {t.footer.rights}</span>
          <span>{t.footer.made}</span>
        </div>
        <div className="mt-3.5 text-[11px] text-[#5A5548]">
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
