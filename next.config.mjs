/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Force cache invalidation
  },
  compiler: {
    // Eliminar console.logs en producción
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Excluir transpilación de características modernas
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
