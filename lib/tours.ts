// Número de WhatsApp empresarial para reservar los tours tradicionales
// (formato internacional sin "+" ni espacios, tal como lo pide wa.me).
export const WHATSAPP_NUMBER = "51900801969";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Tour = {
  slug: string;
  name: { es: string; en: string };
  duration: { es: string; en: string };
  description: { es: string; en: string };
  highlights: { es: string[]; en: string[] };
  whatsappMessage: { es: string; en: string };
};

// Para agregar un tour nuevo: copia uno de estos bloques completo y
// cambia los datos. No hace falta tocar nada más del sitio.
export const TOURS: Tour[] = [
  {
    slug: "city-tour",
    name: { es: "City Tour Cusco", en: "Cusco City Tour" },
    duration: { es: "Medio día · 4-5 horas", en: "Half day · 4-5 hours" },
    description: {
      es: "Un recorrido en bus y a pie por los sitios arqueológicos más importantes alrededor de Cusco, además de la Catedral y el Qorikancha en el centro histórico.",
      en: "A bus and walking tour through the most important archaeological sites around Cusco, plus the Cathedral and Qorikancha in the historic center.",
    },
    highlights: {
      es: ["Catedral del Cusco", "Qorikancha", "Sacsayhuamán", "Q'enqo, Puka Pukara y Tambomachay"],
      en: ["Cusco Cathedral", "Qorikancha", "Sacsayhuamán", "Q'enqo, Puka Pukara and Tambomachay"],
    },
    whatsappMessage: {
      es: "Hola, quiero reservar el City Tour en Cusco. ¿Me ayudan con la disponibilidad y el precio?",
      en: "Hi, I'd like to book the Cusco City Tour. Can you help me with availability and pricing?",
    },
  },
  {
    slug: "valle-sagrado",
    name: { es: "Valle Sagrado", en: "Sacred Valley" },
    duration: { es: "Día completo · 10-11 horas", en: "Full day · 10-11 hours" },
    description: {
      es: "Un día completo recorriendo Pisac, su mercado artesanal y andenes incas, y Ollantaytambo, una de las fortalezas mejor conservadas del imperio.",
      en: "A full day through Pisac, its craft market and Inca terraces, and Ollantaytambo, one of the best-preserved fortresses of the empire.",
    },
    highlights: {
      es: ["Mercado y andenes de Pisac", "Fortaleza de Ollantaytambo", "Paisajes andinos", "Almuerzo buffet incluido (opcional)"],
      en: ["Pisac market and terraces", "Ollantaytambo fortress", "Andean landscapes", "Buffet lunch available (optional)"],
    },
    whatsappMessage: {
      es: "Hola, quiero reservar el tour al Valle Sagrado. ¿Me ayudan con la disponibilidad y el precio?",
      en: "Hi, I'd like to book the Sacred Valley tour. Can you help me with availability and pricing?",
    },
  },
  {
    slug: "rainbow-mountain",
    name: { es: "Montaña de Colores", en: "Rainbow Mountain" },
    duration: { es: "Día completo · 12-13 horas, salida muy temprano", en: "Full day · 12-13 hours, very early departure" },
    description: {
      es: "La caminata hacia Vinicunca, la famosa montaña de siete colores, a más de 5,000 metros de altura. Exigente pero inolvidable.",
      en: "The hike to Vinicunca, the famous seven-colored mountain, at over 5,000 meters of altitude. Demanding but unforgettable.",
    },
    highlights: {
      es: ["Vista de la montaña de 7 colores", "Paisajes de alta montaña", "Desayuno y almuerzo incluidos", "Recomendado tras aclimatarte unos días en Cusco"],
      en: ["Views of the 7-colored mountain", "High mountain scenery", "Breakfast and lunch included", "Recommended after a few days acclimating in Cusco"],
    },
    whatsappMessage: {
      es: "Hola, quiero reservar el tour a la Montaña de Colores (Rainbow Mountain). ¿Me ayudan con la disponibilidad y el precio?",
      en: "Hi, I'd like to book the Rainbow Mountain tour. Can you help me with availability and pricing?",
    },
  },
];
