/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },

  // 👇 só no dev: usa cache em memória (nada de pack.gz no disco)
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = { type: 'memory' };
    }
    return config;
  },

  // 👇 redirects from old atletas page to new atleta page
  async redirects() {
    return [
      {
        source: '/atletas',
        destination: '/atleta',
        permanent: true, // 301 redirect (SEO-friendly)
      },
      {
        source: '/atletas/:path*',
        destination: '/atleta',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;