"use client";

import { motion } from "framer-motion";
import { useApp } from "./Providers";
import { UmbrellaIcon } from "./Illustrations";

export default function About() {
  const { t } = useApp();
  const icons = [
    <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.4" /></svg>,
    <UmbrellaIcon key="2" className="w-7 h-7" />,
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7"><path d="M8 21h8M12 17v4M6 3h12l-1 8a5 5 0 0 1-10 0L6 3z" /></svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7"><path d="M12 3l7 4v5c0 5-3 7-7 9-4-2-7-4-7-9V7z" /><path d="M9 12l2 2 4-4" /></svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7"><path d="M5 8h14M5 8a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" /></svg>,
  ];

  return (
    <section id="about" className="py-24 lg:py-28">
      <div className="container-cw grid lg:grid-cols-[1.1fr_1fr] gap-14">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.about.title}</h2>
          <p className="mt-4 text-piedra text-lg max-w-lg">{t.about.p1}</p>
          <p className="mt-4 text-piedra text-lg max-w-lg">{t.about.p2}</p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 gap-3.5"
        >
          {t.about.cards.map((card, i) => (
            <motion.div
              key={card.h}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              className={`border border-piedra-200 dark:border-negro-800 rounded p-6 hover:-translate-y-1 transition-transform bg-white dark:bg-negro-800 ${
                i === 2 ? "col-span-2 flex items-center gap-4 !bg-negro !border-negro text-crema" : ""
              }`}
            >
              <div className={`text-amarillo-600 dark:text-amarillo mb-4 ${i === 2 ? "!mb-0 flex-none text-amarillo" : ""}`}>{icons[i]}</div>
              <div>
                <h4 className={`font-semibold text-sm ${i === 2 ? "text-crema" : ""}`}>{card.h}</h4>
                <p className={`text-sm mt-1.5 ${i === 2 ? "text-[#B9B2A0]" : "text-piedra"}`}>{card.p}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
