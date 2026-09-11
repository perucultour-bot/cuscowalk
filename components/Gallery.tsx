"use client";

import { useState } from "react";
import { useApp } from "./Providers";
import CityPhotos from "./CityPhotos";
import { GALLERY_PHOTOS } from "@/lib/gallery-photos";

export default function Gallery() {
  const { t, lang } = useApp();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-28">
      <div className="container-cw">
        <div className="max-w-xl mb-8 sm:mb-14">
          <span className="eyebrow">{t.gallery.eyebrow}</span>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.gallery.title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY_PHOTOS.map((photo, i) => (
            <button
              key={photo.url}
              onClick={() => setOpen(i)}
              className="relative aspect-square rounded overflow-hidden border border-piedra-200 dark:border-negro-800 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.url}
                alt={lang === "es" ? photo.titleEs : photo.titleEn}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-xs font-semibold text-left opacity-0 group-hover:opacity-100 transition-opacity">
                {lang === "es" ? photo.titleEs : photo.titleEn}
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
            <div className="aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_PHOTOS[open].url}
                alt={lang === "es" ? GALLERY_PHOTOS[open].titleEs : GALLERY_PHOTOS[open].titleEn}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-serif text-lg text-[#151513]">{lang === "es" ? GALLERY_PHOTOS[open].titleEs : GALLERY_PHOTOS[open].titleEn}</h4>
              <p className="text-sm text-piedra mt-1">{lang === "es" ? GALLERY_PHOTOS[open].descEs : GALLERY_PHOTOS[open].descEn}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
