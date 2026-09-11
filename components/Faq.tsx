"use client";
import { useState } from "react";
import { useApp } from "./Providers";

export default function Faq() {
  const { t } = useApp();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-28">
      <div className="container-cw">
        <div className="max-w-xl mb-10">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.faq.title}</h2>
        </div>
        <div className="max-w-2xl">
          {t.faq.items.map((f, i) => (
            <div key={f.q} className="border-b border-piedra-200 dark:border-negro-800">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full text-left flex justify-between items-center gap-5 py-5 font-serif text-lg">
                {f.q}
                <span className="flex-none">{openIdx === i ? "−" : "+"}</span>
              </button>
              {openIdx === i && <p className="text-piedra text-sm pb-5 max-w-xl leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
