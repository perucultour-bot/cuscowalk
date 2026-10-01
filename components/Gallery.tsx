"use client";

import { useEffect, useRef, useState } from "react";
import { useApp } from "./Providers";
import CityPhotos from "./CityPhotos";
import { GALLERY_PHOTOS } from "@/lib/gallery-photos";

export default function Gallery() {
  const { t, lang } = useApp();
  const [open, setOpen] = useState<number | null>(null);
  const dragStartX = useRef<number | null>(null);

  const total = GALLERY_PHOTOS.length;
  const goPrev = () => setOpen((o) => (o === null ? o : (o - 1 + total) % total));
  const goNext = () => setOpen((o) => (o === null ? o : (o + 1) % total));

  useEffect(() => {
    if (open === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function onPointerDown(e: React.PointerEvent) {
    dragStartX.current = e.clientX;
  }
  function onPointerUp(e: React.PointerEvent) {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goPrev();
      else goNext();
    }
    dragStartX.current = null;
  }

  return (
    <section id="gallery" className="py-9 sm:py-16 lg:py-28">
      <div className="container-cw">
        <div className="max-w-xl mb-6 sm:mb-12">
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
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-semibold text-left opacity-0 group-hover:opacity-100 transition-opacity">
                {lang === "es" ? photo.titleEs : photo.titleEn}
              </div>
            </button>
          ))}
        </div>
        <CityPhotos />
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8" onClick={() => setOpen(null)}>
          <button className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 border border-white/25 text-white z-10" onClick={() => setOpen(null)}>✕</button>

          <button
            aria-label={lang === "es" ? "Foto anterior" : "Previous photo"}
            className="hidden sm:flex absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/25 text-white items-center justify-center hover:bg-white/20 z-10"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            ‹
          </button>
          <button
            aria-label={lang === "es" ? "Siguiente foto" : "Next photo"}
            className="hidden sm:flex absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/25 text-white items-center justify-center hover:bg-white/20 z-10"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            ›
          </button>

          <div
            className="max-w-xl w-full bg-crema rounded overflow-hidden touch-pan-y select-none"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <div className="aspect-[4/3] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_PHOTOS[open].url}
                alt={lang === "es" ? GALLERY_PHOTOS[open].titleEs : GALLERY_PHOTOS[open].titleEn}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              {/* Flechas también visibles encima de la foto en móvil */}
              <button
                aria-label={lang === "es" ? "Foto anterior" : "Previous photo"}
                className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
              >
                ‹
              </button>
              <button
                aria-label={lang === "es" ? "Siguiente foto" : "Next photo"}
                className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
              >
                ›
              </button>
            </div>
            <div className="p-6">
              <h4 className="font-serif text-lg text-[#151513]">{lang === "es" ? GALLERY_PHOTOS[open].titleEs : GALLERY_PHOTOS[open].titleEn}</h4>
              <p className="text-sm text-piedra mt-1">{lang === "es" ? GALLERY_PHOTOS[open].descEs : GALLERY_PHOTOS[open].descEn}</p>
              <p className="text-sm text-piedra/70 mt-3">{open + 1} / {total}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

