"use client";

import { useState } from "react";
import { useApp } from "./Providers";
import { Scene } from "./Illustrations";
import CityPhotos from "./CityPhotos";

export default function Gallery() {
  const { t } = useApp();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 lg:py-28">
      <div className="container-cw">
        <div className="max-w-xl mb-14">
          <span className="eyebrow">{t.gallery.eyebrow}</span>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.gallery.title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {t.gallery.items.map((item, i) => (
            <button
              key={item.t}
              onClick={() => setOpen(i)}
              className={`relative aspect-square rounded overflow-hidden border border-piedra-200 dark:border-negro-800 group ${
                i === 2 || i === 5 ? "row-span-2 md:aspect-auto" : ""
              }`}
            >
              <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
                <Scene index={i} />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-xs font-semibold text-left opacity-0 group-hover:opacity-100 transition-opacity">
                {item.t}
              </div>
            </button>
          ))}
        </div>
        <CityPhotos />
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-8" onClick={() => setOpen(null)}>
          <button className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 border border-white/25 text-white" onClick={() => setOpen(null)}>✕</button>
          <div className="max-w-xl w-full bg-crema rounded overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-[4/3]"><Scene index={open} /></div>
            <div className="p-6">
              <h4 className="font-serif text-lg text-[#151513]">{t.gallery.items[open].t}</h4>
              <p className="text-sm text-piedra mt-1">{t.gallery.items[open].d}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
