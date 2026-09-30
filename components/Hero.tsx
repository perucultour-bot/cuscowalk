"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useApp } from "./Providers";

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return <b ref={ref} className="block font-serif text-3xl">{value.toLocaleString("es-PE")}</b>;
}

// Mosaico de fotos del encabezado — chicas, livianas, y clicables (llevan a la Galería).
const HERO_PHOTOS = [
  { src: "/images/mirador-plaza-armas.webp", alt: "Turistas fotografiando la Plaza de Armas desde el mirador" },
  { src: "/images/plaza-de-armas-atardecer.webp", alt: "Plaza de Armas de Cusco" },
  { src: "/images/qorikancha-panoramica.webp", alt: "Qorikancha" },
  { src: "/images/hatun-rumiyoq-muro.webp", alt: "Calle Hatun Rumiyoq" },
  { src: "/images/san-blas-callejon-escaleras.webp", alt: "Barrio de San Blas" },
];

export default function Hero() {
  const { t, lang } = useApp();

  return (
    <section id="hero" className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-16 lg:pb-20 bg-crema dark:bg-negro">
      <div className="container-cw">
        {/* Mosaico de fotos */}
        <a href="#gallery" className="block group relative rounded-xl overflow-hidden">
          <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[360px] lg:h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_PHOTOS[0].src}
              alt={HERO_PHOTOS[0].alt}
              className="col-span-2 row-span-2 w-full h-full object-cover object-[center_42%] group-hover:brightness-[.94] transition-[filter]"
              fetchPriority="high"
              loading="eager"
            />
            {HERO_PHOTOS.slice(1).map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={p.src} src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover group-hover:brightness-[.94] transition-[filter]" />
            ))}
          </div>
          {/* Versión móvil: solo la foto principal */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_PHOTOS[0].src}
            alt={HERO_PHOTOS[0].alt}
            className="md:hidden w-full h-64 object-cover object-[center_42%] rounded-xl"
            fetchPriority="high"
            loading="eager"
          />
          <span className="absolute bottom-3 right-3 bg-crema text-[#151513] text-xs font-semibold px-3.5 py-2 rounded-full shadow-md flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
            </svg>
            {lang === "es" ? "Ver todas las fotos" : "See all photos"}
          </span>
        </a>

        {/* Texto e info debajo del mosaico */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-10 lg:mt-12"
        >
          <span className="eyebrow">{t.hero.badge}</span>
          <h1 className="font-serif font-semibold text-[9vw] sm:text-5xl lg:text-6xl leading-[1.08] max-w-2xl mt-3">
            {t.hero.titleLine1}
            <br />
            <em className="italic text-[#8A6800] dark:text-amarillo">{t.hero.titleEm}</em>
          </h1>
          <p className="mt-6 text-lg max-w-md text-piedra">{t.hero.sub}</p>
          <div className="flex gap-3.5 mt-10 flex-wrap">
            <a href="#booking" className="btn btn-primary">{t.hero.cta1}</a>
            <a href="#itinerary" className="btn border border-piedra-200 dark:border-white/35">{t.hero.cta2}</a>
          </div>
          <div className="mt-8 sm:mt-14 flex gap-10 flex-wrap border-t border-piedra-200 dark:border-white/15 pt-7">
            <div><AnimatedCounter target={14280} /><span className="text-xs text-piedra">{t.hero.stat1}</span></div>
            <div><b className="block font-serif text-3xl">5.0/5</b><span className="text-xs text-piedra">{t.hero.stat2}</span></div>
            <div><b className="block font-serif text-3xl">2h</b><span className="text-xs text-piedra">{t.hero.stat3}</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
