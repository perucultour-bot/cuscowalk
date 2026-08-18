/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Agrega aquí los dominios desde donde cargarás fotos reales,
      // por ejemplo tu propio bucket o CMS.
    ],
  },
};
export default nextConfig;
