import type { Metadata } from "next";
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
  themeColor: "#0B0B0C",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Cusco Walk — Free Walking Tour",
  description: "Tour a pie gratuito de 2 horas por el centro histórico de Cusco, incluyendo Plaza de Armas, Hatun Rumiyoq, San Blas y San Cristóbal.",
  provider: { "@type": "TravelAgency", name: "Cusco Walk", email: "perucultour@gmail.com", areaServed: "Cusco, Peru" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "PEN", availability: "https://schema.org/InStock" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "312" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${workSans.variable} ${jetbrains.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
