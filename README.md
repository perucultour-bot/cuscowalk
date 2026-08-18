# Cusco Walk — proyecto Next.js

Sitio de reservas para el Free Walking Tour de Cusco Walk. Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion, con un endpoint de reservas que envía correo real a la empresa y al cliente vía Resend.

## 1. Instalar y correr localmente

```bash
npm install
cp .env.example .env.local   # completa RESEND_API_KEY, etc.
npm run dev
```

Abre http://localhost:3000

## 2. Desplegar (recomendado: Vercel)

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a vercel.com → "Add New Project" → conecta el repositorio.
3. Vercel detecta Next.js automáticamente, no necesitas configurar nada del build.
4. En "Environment Variables" agrega las mismas variables de `.env.example`:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `COMPANY_NOTIFY_EMAIL`
5. Deploy. Cada push a `main` vuelve a desplegar automáticamente.

Alternativas: Netlify (también soporta Next.js App Router) o un VPS con `npm run build && npm start`.

## 3. Activar el envío real de correos (Resend)

1. Crea una cuenta gratuita en https://resend.com
2. Verifica tu dominio (o usa el dominio de pruebas `onboarding@resend.dev` mientras verificas el tuyo).
3. Genera una API key y ponla en `RESEND_API_KEY`.
4. Sin esta variable configurada, el sitio sigue funcionando y confirmando reservas en pantalla, pero no envía los correos (se ve un aviso en los logs del servidor).

## 4. Fotos

El sitio ya usa fotos reales de libre uso (Wikimedia Commons, licencia CC BY-SA / dominio público) para el hero, el itinerario y la galería — ver `SCENE_PHOTOS` en `components/Illustrations.tsx`. Dos escenas (el guía con el paraguas y "viajeros felices") se quedan con la ilustración propia porque no existen fotos de stock libres apropiadas para ellas, y la foto de "Siete Borreguitos" es un reemplazo temporal (otra calle empedrada del mismo barrio) porque esa calle exacta no tiene aún una foto con licencia libre en Commons. Cada `<img>` tiene un respaldo automático: si la foto externa no carga, se muestra la ilustración SVG.

Para reemplazar cualquiera de estas fotos por las tuyas propias (muy recomendable en cuanto tengas material real del tour):

1. Junta tus fotos (ideal: 1600px de ancho, formato `.jpg` o `.webp`, menos de 300KB — usa https://squoosh.app para comprimir).
2. Colócalas en `public/images/`, por ejemplo `public/images/plaza-de-armas.jpg`.
3. En `components/Illustrations.tsx`, cambia la URL correspondiente en `SCENE_PHOTOS` por la ruta local, por ejemplo `"/images/plaza-de-armas.jpg"`.
4. Para el fondo del hero, cambia la URL en `components/Hero.tsx`.
5. Si prefieres no tocar código: súbeme las fotos o los enlaces y hago el cambio por ti.

Nota de atribución: las licencias CC BY-SA de Wikimedia piden dar crédito — ya está añadido un aviso en el `Footer`. Si sustituyes todas las fotos por material propio, puedes quitar esa línea.

## 5. Conectar guardado de reservas (opcional)

El endpoint `app/api/bookings/route.ts` ya deja marcado con `TODO(persistencia)` dónde insertar el guardado en Supabase/Firebase/Postgres antes de enviar los correos, para tener registro de cada reserva incluso si el correo falla.
