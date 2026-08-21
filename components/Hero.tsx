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

export default function Hero() {
  const { t } = useApp();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end pt-36 overflow-hidden bg-negro">
      <div className="absolute inset-0 z-0 bg-negro">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/plaza-de-armas-atardecer.jpg"
          alt="Plaza de Armas de Cusco"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />
      </div>
      <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(180deg, rgba(11,11,12,.15) 0%, rgba(11,11,12,.55) 68%, rgba(11,11,12,.92) 100%)" }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="container-cw relative z-[2] text-crema pb-20"
      >
        <span className="inline-flex items-center gap-2 bg-amarillo/10 border border-amarillo/40 text-amarillo font-mono text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
          {t.hero.badge}
        </span>
        <h1 className="font-serif font-semibold text-[13vw] sm:text-7xl lg:text-8xl leading-[0.98] max-w-4xl">
          {t.hero.titleLine1}
          <br />
          <em className="italic text-amarillo">{t.hero.titleEm}</em>
        </h1>
        <p className="mt-6 text-lg max-w-md text-[#D8D3C4]">{t.hero.sub}</p>
        <div className="flex gap-3.5 mt-10 flex-wrap">
          <a href="#booking" className="btn btn-primary">{t.hero.cta1}</a>
          <a href="#itinerary" className="btn border border-white/35 text-white">{t.hero.cta2}</a>
        </div>
        <div className="mt-16 flex gap-10 flex-wrap border-t border-white/15 pt-7">
          <div><AnimatedCounter target={14280} /><span className="text-xs text-[#B9B2A0]">{t.hero.stat1}</span></div>
          <div><b className="block font-serif text-3xl">4.9/5</b><span className="text-xs text-[#B9B2A0]">{t.hero.stat2}</span></div>
          <div><b className="block font-serif text-3xl">2h</b><span className="text-xs text-[#B9B2A0]">{t.hero.stat3}</span></div>
        </div>
      </motion.div>
    </section>
  );
}
