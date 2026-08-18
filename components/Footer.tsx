"use client";
import { useApp } from "./Providers";
import { SunMark } from "./Illustrations";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="bg-negro text-[#D8D3C4] pt-16 pb-7">
      <div className="container-cw">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-serif font-bold text-xl text-crema mb-3">
              <SunMark size={22} /> Cusco Walk
            </div>
            <p className="text-sm max-w-[240px]">{t.footer.tagline}</p>
          </div>
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-[#8A8474] mb-4">{t.footer.links}</h5>
            <a href="#about" className="block text-sm mb-2.5 hover:text-amarillo">{t.nav.about}</a>
            <a href="#itinerary" className="block text-sm mb-2.5 hover:text-amarillo">{t.nav.itinerary}</a>
            <a href="#booking" className="block text-sm mb-2.5 hover:text-amarillo">{t.nav.book}</a>
          </div>
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-[#8A8474] mb-4">{t.footer.more}</h5>
            <a href="#gallery" className="block text-sm mb-2.5 hover:text-amarillo">{t.nav.gallery}</a>
            <a href="#testimonials" className="block text-sm mb-2.5 hover:text-amarillo">{t.nav.reviews}</a>
            <a href="#faq" className="block text-sm mb-2.5 hover:text-amarillo">{t.nav.faq}</a>
          </div>
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-[#8A8474] mb-4">{t.footer.legal}</h5>
            <a href="#" className="block text-sm mb-2.5 hover:text-amarillo">{t.footer.privacy}</a>
            <a href="#" className="block text-sm mb-2.5 hover:text-amarillo">{t.footer.terms}</a>
          </div>
        </div>
        <div className="flex justify-between items-center pt-6 text-xs text-[#7A7466] flex-wrap gap-3">
          <span>© {new Date().getFullYear()} Cusco Walk. {t.footer.rights}</span>
          <span>{t.footer.made}</span>
        </div>
        <div className="mt-3.5 text-[11px] text-[#5A5548]">
          Fotos: colaboradores de{" "}
          <a href="https://commons.wikimedia.org" target="_blank" rel="noopener" className="underline hover:text-amarillo">
            Wikimedia Commons
          </a>{" "}
          (CC BY-SA / dominio público). Ilustraciones propias de Cusco Walk.
        </div>
      </div>
    </footer>
  );
}
