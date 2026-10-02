"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useApp } from "@/components/Providers";
import { UmbrellaIcon } from "@/components/Illustrations";

function GraciasContent() {
  const { t, lang } = useApp();
  const params = useSearchParams();

  const name = params.get("name") || "";
  const date = params.get("date") || "";
  const time = params.get("time") || "";
  const people = params.get("people") || "";
  const tourLanguage = params.get("tourLanguage") || "";
  const tourLangLabel = tourLanguage === "en" ? t.booking.tourLangEn : tourLanguage === "es" ? t.booking.tourLangEs : "";

  const rows: [string, string][] = [
    [t.booking.first, name],
    [t.booking.date, date],
    [t.booking.time, time],
    [t.booking.tourLang, tourLangLabel],
    [t.booking.people, people],
  ].filter(([, val]) => val) as [string, string][];

  return (
    <>
      <Header />
      <main className="pt-36 pb-24">
        <div className="container-cw max-w-lg">
          <div className="bg-crema dark:bg-negro-soft text-[#151513] dark:text-crema rounded p-9 shadow-2xl text-center border border-piedra-200 dark:border-negro-800">
            <div className="w-14 h-14 rounded-full bg-amarillo text-negro flex items-center justify-center mx-auto mb-5 text-2xl">✓</div>
            <h1 className="font-serif text-3xl">{t.booking.confirmTitle}</h1>
            <p className="text-piedra mt-2">{t.booking.confirmLead}</p>

            {rows.length > 0 && (
              <div className="text-left bg-white dark:bg-negro-800 text-[#151513] dark:text-crema border border-piedra-200 dark:border-negro-800 rounded p-5 mt-6 text-sm">
                {rows.map(([label, val]) => (
                  <div key={label} className="flex justify-between py-2 border-b border-dashed border-piedra-200 last:border-none">
                    <span className="text-piedra">{label}</span>
                    <span className="font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-3 items-center bg-negro text-crema rounded p-4 mt-5 text-left">
              <UmbrellaIcon className="w-6 h-6 text-amarillo flex-none" />
              <p className="text-sm text-[#D8D3C4]">{t.booking.confirmUmbrella}</p>
            </div>

            <Link href="/" className="btn btn-primary mt-6 inline-flex">
              {lang === "es" ? "Volver al inicio" : "Back to home"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default function GraciasPage() {
  return (
    <Suspense fallback={null}>
      <GraciasContent />
    </Suspense>
  );
}
