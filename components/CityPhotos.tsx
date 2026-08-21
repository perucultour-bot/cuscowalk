"use client";

import { useState } from "react";
import { useApp } from "./Providers";
import { CITY_PHOTOS } from "@/lib/city-photos";

export default function CityPhotos() {
  const { lang } = useApp();
  const [broken, setBroken] = useState<Record<number, boolean>>({});
  const copy = {
    es: { eyebrow: "La ciudad", title: "Un poco más de Cusco" },
    en: { eyebrow: "The city", title: "A little more of Cusco" },
  }[lang];

  return (
    <div className="mt-14">
      <div className="max-w-xl mb-8">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h3 className="mt-3 text-2xl lg:text-3xl font-serif">{copy.title}</h3>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-3 -mx-6 px-6 snap-x">
        {CITY_PHOTOS.map((photo, i) =>
          broken[i] ? null : (
            <figure key={photo.url} className="flex-none w-64 snap-start">
              <div className="aspect-[4/3] rounded overflow-hidden border border-piedra-200 dark:border-negro-800 bg-crema-600 dark:bg-negro-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.url}
                  alt={lang === "es" ? photo.captionEs : photo.captionEn}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={() => setBroken((b) => ({ ...b, [i]: true }))}
                />
              </div>
              <figcaption className="text-xs text-piedra mt-2">{lang === "es" ? photo.captionEs : photo.captionEn}</figcaption>
            </figure>
          )
        )}
      </div>
    </div>
  );
}
