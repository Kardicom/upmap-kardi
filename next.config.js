/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upmap.ru',
      },
    ],
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],
  // Исключаем demo-страницы из сборки
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
    }
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /src\/pages\/demo\//,
      loader: 'ignore-loader',
    });
    return config;
  },
}

module.exports = nextConfig
