"use client";

import { useApp } from "./Providers";

const SLOTS = [
  {
    time: "10:30", suffix: "AM", full: "10:30 AM",
    noteEs: "Incluye los miradores de San Blas y San Cristóbal, el acueducto colonial y la huaca inca.",
    noteEn: "Includes the San Blas and San Cristóbal viewpoints, the colonial aqueduct and the Inca huaca.",
  },
  {
    time: "1:00", suffix: "PM", full: "1:00 PM",
    noteEs: "Incluye el Qorikancha (por fuera) y el taller del luthier.",
    noteEn: "Includes Qorikancha (from outside) and the luthier's workshop.",
  },
  {
    time: "3:30", suffix: "PM", full: "3:30 PM",
    noteEs: "Incluye el Qorikancha (por fuera) y el taller del luthier.",
    noteEn: "Includes Qorikancha (from outside) and the luthier's workshop.",
  },
];

export default function Schedule({ onPick }: { onPick: (slot: string) => void }) {
  const { t, lang } = useApp();

  return (
    <section id="schedule" className="py-14 sm:py-20 lg:py-28">
      <div className="container-cw">
        <div className="max-w-xl mb-8 sm:mb-14">
          <span className="eyebrow">{t.schedule.eyebrow}</span>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.schedule.title}</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {SLOTS.map((s) => (
            <div key={s.full} className="border border-piedra-200 dark:border-negro-800 rounded p-8 bg-white dark:bg-negro-800 hover:-translate-y-1 transition-transform">
              <span className="font-serif text-4xl">
                {s.time}
                <span className="text-base ml-1">{s.suffix}</span>
              </span>
              <p className="text-xs text-piedra mt-3 leading-relaxed">{lang === "es" ? s.noteEs : s.noteEn}</p>
              <a
                href="#booking"
                onClick={() => onPick(s.full)}
                className="btn btn-inverse w-full mt-6"
              >
                {t.schedule.book}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
