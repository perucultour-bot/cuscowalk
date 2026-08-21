"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Itinerary from "@/components/Itinerary";
import Schedule from "@/components/Schedule";
import Booking from "@/components/Booking";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import TraditionalTours from "@/components/TraditionalTours";
import { useApp } from "@/components/Providers";

export default function Home() {
  const [slot, setSlot] = useState<string | null>(null);
  const { t } = useApp();

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Itinerary />
      <Schedule onPick={setSlot} />

      <section id="booking" className="py-24 lg:py-28 bg-negro text-crema">
        <div className="container-cw grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
          <div>
            <span className="eyebrow !text-[#8A8474]">{t.booking.eyebrow}</span>
            <h3 className="mt-3 text-3xl lg:text-4xl font-serif">{t.booking.title}</h3>
            <p className="text-[#B9B2A0] mt-3 max-w-sm">{t.booking.sub}</p>
            <div className="flex gap-3.5 p-4 border border-white/15 rounded mt-5">
              <p className="text-xs text-[#C9C3B4]">{t.booking.note1}</p>
            </div>
            <div className="flex gap-3.5 p-4 border border-white/15 rounded mt-3">
              <p className="text-xs text-[#C9C3B4]">{t.booking.note2}</p>
            </div>
          </div>
          <Booking prefillSlot={slot} />
        </div>
      </section>

      <Gallery />
      <TraditionalTours />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppFloat />

      <div className="fixed bottom-0 inset-x-0 z-30 p-3.5 bg-crema/90 dark:bg-negro/90 backdrop-blur-md border-t border-piedra-200 dark:border-negro-800 sm:hidden">
        <a href="#booking" className="btn btn-primary w-full">{t.hero.cta1}</a>
      </div>
    </>
  );
}
