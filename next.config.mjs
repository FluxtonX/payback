/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.output = {
      ...config.output,
      chunkLoadingGlobal: 'webpackChunk_payback',
    };
    return config;
  },
};

export default nextConfig;
