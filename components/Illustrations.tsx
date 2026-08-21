export function SunMark({ size = 26, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="46" className="fill-negro dark:fill-crema" />
      <circle cx="50" cy="50" r="22" fill="#FFD400" />
    </svg>
  );
}

// Fotos reales de Cusco Walk (subidas por el cliente) para el itinerario y la
// galería. El índice 6 (guía con paraguas) se queda como ilustración porque
// no hay foto real todavía de un guía con el paraguas negro — en cuanto la
// tengas, reemplaza esa línea igual que las demás. El índice 4 (Museo del
// Luthier) sigue usando una foto libre de Wikimedia Commons como referencia
// temporal, ya que aún no hay una foto propia de ese punto exacto.
export const SCENE_PHOTOS: (string | null)[] = [
  "/images/plaza-de-armas-atardecer.jpg",
  "/images/hatun-rumiyoq-muro.jpg",
  "/images/san-blas-callejon-escaleras.jpg",
  "/images/san-blas-calle-farmacia.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Cusco%20Peru-%20shop%20making%20Bandurrias.jpg?width=900",
  "/images/san-cristobal-mirador-cruz.jpg",
  null,
  "/images/viajeros-piscina-infinita.jpg",
];

// Renderiza la foto real con la ilustración SVG como respaldo si la imagen
// externa fallara en cargar (onError oculta la <img> y deja ver el SVG).
export function Scene({ index, className = "" }: { index: number; className?: string }) {
  const photo = SCENE_PHOTOS[index];
  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="absolute inset-0 [&>svg]:w-full [&>svg]:h-full">{SCENES[index]}</div>
      {photo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt=""
          loading="lazy"
          className="relative z-10 w-full h-full object-cover"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      )}
    </div>
  );
}

export function UmbrellaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M12 3c-4 3-6 5-6 9a6 6 0 0 0 12 0c0-4-2-6-6-9z" />
      <line x1="12" y1="12" x2="12" y2="21" />
    </svg>
  );
}

// Set de escenas reutilizado por Itinerary y Gallery — línea negro/amarillo,
// consistente con la identidad visual (ver nota de diseño en README).
export const SCENES = [
  // 0 Fuente Inca
  (
    <svg viewBox="0 0 200 150" key="s0"><rect width="200" height="150" className="fill-crema-600 dark:fill-negro-800" />
      <circle cx="100" cy="80" r="46" fill="none" className="stroke-negro dark:stroke-crema" strokeWidth={2} />
      <circle cx="100" cy="80" r="30" fill="none" stroke="#E3BE00" strokeWidth={2} />
      <circle cx="100" cy="80" r="6" className="fill-negro dark:fill-crema" />
    </svg>
  ),
  // 1 Hatun Rumiyoq wall
  (
    <svg viewBox="0 0 200 150" key="s1"><rect width="200" height="150" className="fill-crema-600 dark:fill-negro-800" />
      <g fill="none" className="stroke-negro dark:stroke-crema" strokeWidth={2}>
        <path d="M10 130 L10 90 L40 78 L70 92 L70 130" />
        <path d="M70 130 L70 88 L100 70 L130 92 L130 130" />
        <path d="M130 130 L130 90 L160 76 L190 94 L190 130" />
      </g>
    </svg>
  ),
  // 2 San Blas street
  (
    <svg viewBox="0 0 200 150" key="s2"><rect width="200" height="150" className="fill-crema-600 dark:fill-negro-800" />
      <g className="stroke-negro dark:stroke-crema" strokeWidth={2} fill="none">
        <path d="M20 140 Q100 40 180 10" />
        <path d="M40 140 Q110 55 190 30" />
      </g>
      <circle cx="150" cy="34" r="16" fill="#E3BE00" />
    </svg>
  ),
  // 3 Siete Borreguitos
  (
    <svg viewBox="0 0 200 150" key="s3"><rect width="200" height="150" className="fill-crema-600 dark:fill-negro-800" />
      <g fill="none" className="stroke-negro dark:stroke-crema" strokeWidth={2}>
        <path d="M40 20 L40 140 M160 20 L160 140" />
        <path d="M40 60 Q100 30 160 60" />
      </g>
      <circle cx="70" cy="90" r="5" fill="#E3BE00" /><circle cx="100" cy="100" r="5" fill="#E3BE00" /><circle cx="130" cy="90" r="5" fill="#E3BE00" />
    </svg>
  ),
  // 4 Luthier museum
  (
    <svg viewBox="0 0 200 150" key="s4"><rect width="200" height="150" className="fill-crema-600 dark:fill-negro-800" />
      <path d="M90 30 C70 30 60 55 65 75 C55 80 55 100 70 105 C75 120 100 125 110 110 C125 112 132 95 122 82 C130 60 115 30 90 30Z" fill="none" className="stroke-negro dark:stroke-crema" strokeWidth={2} />
      <line x1="90" y1="30" x2="90" y2="10" stroke="#E3BE00" strokeWidth={2} />
    </svg>
  ),
  // 5 San Cristobal mirador
  (
    <svg viewBox="0 0 200 150" key="s5"><rect width="200" height="150" className="fill-crema-600 dark:fill-negro-800" />
      <circle cx="160" cy="35" r="20" fill="#E3BE00" />
      <path d="M0 130 L40 80 L70 110 L110 60 L150 100 L200 70 L200 150 L0 150Z" fill="none" className="stroke-negro dark:stroke-crema" strokeWidth={2} />
    </svg>
  ),
  // 6 umbrella guide
  (
    <svg viewBox="0 0 200 150" key="s6"><rect width="200" height="150" fill="#0B0B0C" />
      <path d="M70 60 A30 30 0 0 1 130 60Z" fill="#FFD400" />
      <line x1="100" y1="60" x2="100" y2="120" stroke="#FFD400" strokeWidth={3} />
      <circle cx="140" cy="90" r="8" fill="#FAF6EC" /><circle cx="160" cy="95" r="8" fill="#FAF6EC" /><circle cx="60" cy="95" r="8" fill="#FAF6EC" />
    </svg>
  ),
  // 7 travelers
  (
    <svg viewBox="0 0 200 150" key="s7"><rect width="200" height="150" className="fill-crema-600 dark:fill-negro-800" />
      <g className="fill-negro dark:fill-crema">
        <circle cx="60" cy="70" r="14" /><rect x="46" y="86" width="28" height="40" rx="6" />
        <circle cx="142" cy="70" r="14" /><rect x="128" y="86" width="28" height="40" rx="6" />
      </g>
      <circle cx="100" cy="60" r="16" fill="#E3BE00" /><rect x="84" y="78" width="32" height="46" rx="6" fill="#E3BE00" />
    </svg>
  ),
];
