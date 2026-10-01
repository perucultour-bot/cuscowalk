"use client";

import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Coordenadas aproximadas de cada parada, solo para fines ilustrativos del recorrido.
const STOPS: { nameEs: string; nameEn: string; lat: number; lng: number }[] = [
  { nameEs: "Plaza de Armas", nameEn: "Plaza de Armas", lat: -13.517, lng: -71.9785 },
  { nameEs: "Qorikancha", nameEn: "Qorikancha", lat: -13.5202, lng: -71.9767 },
  { nameEs: "Hatun Rumiyoq", nameEn: "Hatun Rumiyoq", lat: -13.5178, lng: -71.9767 },
  { nameEs: "San Blas", nameEn: "San Blas", lat: -13.5147, lng: -71.9748 },
  { nameEs: "Siete Borreguitos", nameEn: "Siete Borreguitos", lat: -13.514, lng: -71.9745 },
  { nameEs: "Museo del Luthier", nameEn: "Luthier Museum", lat: -13.5143, lng: -71.9738 },
  { nameEs: "Acueducto Colonial", nameEn: "Colonial Aqueduct", lat: -13.512, lng: -71.973 },
  { nameEs: "Huaca", nameEn: "Huaca", lat: -13.5115, lng: -71.975 },
  { nameEs: "San Cristóbal", nameEn: "San Cristóbal", lat: -13.5126, lng: -71.9801 },
  { nameEs: "Final del tour", nameEn: "End of the tour", lat: -13.517, lng: -71.9785 },
];

function numberedIcon(n: number) {
  return L.divIcon({
    className: "",
    html: `<div style="background:#151513;color:#FFD400;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;border:2px solid #FFD400;box-shadow:0 1px 4px rgba(0,0,0,.35);">${n}</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
  });
}

export default function RouteMap({ lang }: { lang: "es" | "en" }) {
  const positions: [number, number][] = STOPS.map((s) => [s.lat, s.lng]);
  const center: [number, number] = [-13.5155, -71.977];

  return (
    <div className="rounded-xl overflow-hidden border border-piedra-200 dark:border-negro-800 h-[380px] lg:h-[440px]">
      <MapContainer center={center} zoom={15.3} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={positions} pathOptions={{ color: "#E3BE00", weight: 3, dashArray: "6 7" }} />
        {STOPS.map((s, i) => (
          <Marker key={i} position={[s.lat, s.lng]} icon={numberedIcon(i + 1)}>
            <Tooltip direction="top" offset={[0, -14]}>{lang === "es" ? s.nameEs : s.nameEn}</Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
