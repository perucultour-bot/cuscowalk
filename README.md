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

## 6. Cómo agregar un artículo nuevo al blog (sin tocar código)

Los artículos del blog son archivos de texto simple (formato Markdown) dentro de la carpeta `content/blog/`. Para agregar uno nuevo:

1. En GitHub, entra a la carpeta `content/blog/`.
2. Haz clic en "Add file" → "Create new file".
3. Nómbralo así, con guiones y sin espacios ni tildes, terminando en `.md`: por ejemplo `que-llevar-a-machu-picchu.md`.
4. Copia y pega esta plantilla al inicio, y escribe tu artículo debajo con el mismo estilo (puedes usar `## ` para subtítulos, lineas en blanco entre párrafos, y `- ` para viñetas):

```
---
title: "Título de tu artículo"
date: "2026-08-25"
excerpt: "Una o dos frases resumiendo el artículo, aparece en la lista del blog."
---

Aquí escribes el contenido normal, en párrafos.

## Un subtítulo

- Una viñeta
- Otra viñeta
```

5. Baja hasta "Commit changes" y guarda. Vercel publica el artículo solo en 1-2 minutos, ya aparece automáticamente en `/blog`.

No necesitas registrar el archivo en ningún otro lado — el sitio lee automáticamente todo lo que haya en `content/blog/`.

## 7. Tours tradicionales y reservas por WhatsApp

Los tours pagados (City Tour, Valle Sagrado, Rainbow Mountain) están definidos en `lib/tours.ts`. Cada uno reserva directo por WhatsApp al número configurado en `WHATSAPP_NUMBER` en ese mismo archivo. Para agregar un tour nuevo, copia uno de los bloques existentes en ese archivo y cambia los datos — no hace falta tocar el componente.

El Free Walking Tour sigue usando el formulario con confirmación por correo (Resend), ya que tiene horarios fijos y es gratuito. Si en algún momento prefieres que también redirija a WhatsApp en vez del formulario, dímelo y lo cambio.
