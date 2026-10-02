import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Work_Sans, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["400", "500", "600", "700"] });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans", weight: ["400", "500", "600", "700"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cuscowalk.com"),
  title: "Cusco Walk — Free Walking Tour en Cusco | Descubre Cusco como un Local",
  description:
    "Free Walking Tour en Cusco con guías locales. Recorre la Plaza de Armas, San Blas, Hatun Rumiyoq y San Cristóbal en un tour a pie gratuito de 2 horas. Reserva en menos de un minuto.",
  keywords: [
    "Free Walking Tour Cusco", "Walking Tour Cusco", "Cusco Walking Tour", "Best Walking Tour Cusco",
    "Free Tour Cusco", "Cusco City Tour", "Cusco Local Guide", "Walking Tour Peru",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Cusco Walk",
    title: "Cusco Walk — Free Walking Tour en Cusco",
    description: "Explora la ciudad con guías locales apasionados. Tour a pie gratuito de 2 horas por el corazón histórico de Cusco.",
    locale: "es_PE",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  verification: { google: "_dbRXc44JymqAu8mJbvFt0K3Nn1wA2xWuRq58U1S3vs" },
  themeColor: "#0B0B0C",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Cusco Walk — Free Walking Tour",
  description: "Tour a pie gratuito de 2 horas por el centro histórico de Cusco, incluyendo Plaza de Armas, Hatun Rumiyoq, San Blas y San Cristóbal.",
  provider: { "@type": "TravelAgency", name: "Cusco Walk", email: "perucultour@gmail.com", areaServed: "Cusco, Peru" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "PEN", availability: "https://schema.org/InStock" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "61" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { q: "Is the tour really free?", a: "There's no booking fee and no fixed entry price. At the end of the tour, we'd love for each participant to leave a contribution for their guide, as a thank-you for their time and dedication." },
    { q: "How long does it last?", a: "About 2 hours, walking at a comfortable pace." },
    { q: "Where do we meet?", a: "At the Plaza de Armas in Cusco, at the Inca Fountain." },
    { q: "How do I recognize the guide?", a: "They always carry a black umbrella." },
    { q: "Do I need to book?", a: "Yes, we recommend booking ahead." },
    { q: "Can I book the same day?", a: "Yes, you can always book the same day — our team is always ready to confirm availability." },
    { q: "What should I bring?", a: "Comfortable clothes, walking shoes, sunscreen and water." },
    { q: "Do you take groups?", a: "Yes. If your group is over 10 people, message us ahead." },
    { q: "Do you take private groups?", a: "Yes, we accept private groups with advance notice — message us on WhatsApp to arrange the date and time." },
  ].map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} ${jetbrains.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </head>
      <body className="font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VC4G8S6J0Z"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VC4G8S6J0Z');
          `}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
