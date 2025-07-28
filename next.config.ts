import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'your-domain.com'],
    unoptimized: false,
  },
  experimental: {
    optimizeCss: true,
  }
};

export default nextConfig;
