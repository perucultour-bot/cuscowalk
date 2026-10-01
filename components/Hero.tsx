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

  return <b ref={ref} className="block font-serif text-3xl text-crema">{value.toLocaleString("es-PE")}</b>;
}

export default function Hero() {
  const { t, lang } = useApp();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0 bg-negro">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/plaza-de-armas-atardecer.webp"
          alt="Plaza de Armas de Cusco al atardecer"
          className="w-full h-full object-cover object-[68%_55%] sm:object-[center_58%]"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-negro via-negro/55 to-negro/10" />
      </div>

      <a
        href="#gallery"
        className="absolute top-24 right-5 sm:top-28 sm:right-8 z-20 bg-crema/95 text-[#151513] text-xs font-semibold px-3.5 py-2 rounded-full shadow-md flex items-center gap-1.5 hover:bg-crema transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
        </svg>
        {lang === "es" ? "Ver todas las fotos" : "See all photos"}
      </a>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 container-cw pb-14 sm:pb-16 lg:pb-20 pt-32"
      >
        <h1 className="font-serif font-semibold text-[10vw] sm:text-5xl lg:text-6xl leading-[1.08] max-w-2xl text-crema">
          {t.hero.titleLine1}
          <br />
          <em className="italic text-amarillo">{t.hero.titleEm}</em>
        </h1>
        <p className="mt-6 text-lg max-w-md text-[#D8D3C4]">{t.hero.sub}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {t.hero.tags.map((tag, i) => (
            <span key={i} className="text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full border border-white/25 text-[#D8D3C4]">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3.5 mt-10 flex-wrap">
          <a href="#booking" className="btn btn-primary">{t.hero.cta1}</a>
          <a href="#itinerary" className="btn border border-white/35 text-crema">{t.hero.cta2}</a>
        </div>
        <div className="mt-10 sm:mt-14 flex gap-10 flex-wrap border-t border-white/15 pt-7">
          <div><AnimatedCounter target={14280} /><span className="text-xs text-[#B9B2A0]">{t.hero.stat1}</span></div>
          <div><b className="block font-serif text-3xl text-crema">5.0/5</b><span className="text-xs text-[#B9B2A0]">{t.hero.stat2}</span></div>
          <div><b className="block font-serif text-3xl text-crema">2h</b><span className="text-xs text-[#B9B2A0]">{t.hero.stat3}</span></div>
        </div>
      </motion.div>
    </section>
  );
}
