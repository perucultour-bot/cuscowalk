"use client";

import { motion } from "framer-motion";
import { useApp } from "./Providers";
import { Scene } from "./Illustrations";

export default function Itinerary() {
  const { t } = useApp();

  return (
    <section id="itinerary" className="py-24 lg:py-28">
      <div className="container-cw">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="max-w-xl mb-14">
          <span className="eyebrow">{t.itinerary.eyebrow}</span>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.itinerary.title}</h2>
          <p className="mt-4 text-piedra text-lg">{t.itinerary.sub}</p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-6 sm:left-[29px] top-2 bottom-2 w-px"
            style={{ backgroundImage: "repeating-linear-gradient(var(--tw-gradient-stops))", backgroundColor: "transparent" }}
          />
          {t.itinerary.stops.map((stop, i) => (
            <motion.div
              key={stop.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-[48px_1fr] sm:grid-cols-[60px_1fr] gap-5 sm:gap-7 py-7 relative"
            >
              <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full border border-piedra-200 bg-white dark:bg-negro-soft flex items-center justify-center font-mono text-xs sm:text-sm text-piedra relative z-10 flex-none">
                0{i + 1}
              </div>
              <div className="grid sm:grid-cols-[1fr_200px] gap-6 items-center pb-2 border-b border-piedra-200 dark:border-negro-800 last:border-none">
                <div>
                  <h3 className="font-serif text-xl">{stop.t}</h3>
                  <p className="text-piedra text-sm mt-2 max-w-md">{stop.d}</p>
                </div>
                <div className="aspect-[4/3] rounded overflow-hidden border border-piedra-200 dark:border-negro-800">
                  {i === 8 ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src="/images/brindis-pisco-sour.webp" alt="" className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <Scene index={i} />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
