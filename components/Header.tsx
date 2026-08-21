"use client";

import { useEffect, useState } from "react";
import { useApp } from "./Providers";
import { SunMark } from "./Illustrations";

const NAV_KEYS = ["about", "itinerary", "schedule", "tours", "gallery", "reviews", "faq", "contact"] as const;
const NAV_HREF: Record<(typeof NAV_KEYS)[number], string> = {
  about: "#about", itinerary: "#itinerary", schedule: "#schedule", tours: "#tours", gallery: "#gallery", reviews: "#testimonials", faq: "#faq", contact: "#contact",
};

export default function Header() {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-crema/90 dark:bg-negro/90 backdrop-blur-md border-b border-piedra-200 dark:border-negro-800 py-3" : "py-5"
        }`}
      >
        <div className="container-cw flex items-center justify-between gap-6">
          <a href="#hero" className="flex items-center gap-2 font-serif font-bold text-xl">
            <SunMark size={24} /> Cusco Walk
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_KEYS.map((k) => (
              <a key={k} href={NAV_HREF[k]} className="text-sm font-medium text-piedra hover:text-inherit transition-colors">
                {t.nav[k]}
              </a>
            ))}
            <a href="/blog" className="text-sm font-medium text-piedra hover:text-inherit transition-colors">Blog</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="font-mono text-xs border border-piedra-200 rounded-full flex overflow-hidden"
              aria-label="Cambiar idioma"
            >
              <span className={`px-2.5 py-1.5 ${lang === "es" ? "bg-negro text-crema dark:bg-crema dark:text-negro" : ""}`}>ES</span>
              <span className={`px-2.5 py-1.5 ${lang === "en" ? "bg-negro text-crema dark:bg-crema dark:text-negro" : ""}`}>EN</span>
            </button>
            <button onClick={toggleTheme} className="w-9 h-9 rounded-full border border-piedra-200 flex items-center justify-center" aria-label="Cambiar tema">
              {theme === "dark" ? "☀" : "☾"}
            </button>
            <a href="#booking" className="btn btn-primary btn-sm hidden lg:inline-flex !py-2.5 !px-5 !text-xs">
              {t.nav.book}
            </a>
            <button className="lg:hidden w-9 h-9 rounded-full border border-piedra-200 flex items-center justify-center" onClick={() => setDrawerOpen(true)} aria-label="Abrir menú">
              ☰
            </button>
          </div>
        </div>
      </header>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-crema dark:bg-negro p-6 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <span className="flex items-center gap-2 font-serif font-bold text-xl"><SunMark size={22} /> Cusco Walk</span>
            <button onClick={() => setDrawerOpen(false)} className="w-9 h-9 rounded-full border border-piedra-200" aria-label="Cerrar menú">✕</button>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV_KEYS.map((k) => (
              <a key={k} href={NAV_HREF[k]} onClick={() => setDrawerOpen(false)} className="font-serif text-2xl py-3 border-b border-piedra-200">
                {t.nav[k]}
              </a>
            ))}
            <a href="/blog" onClick={() => setDrawerOpen(false)} className="font-serif text-2xl py-3 border-b border-piedra-200">Blog</a>
            <a href="#booking" onClick={() => setDrawerOpen(false)} className="btn btn-primary mt-6">{t.nav.book}</a>
          </nav>
        </div>
      )}
    </>
  );
}
