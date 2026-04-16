import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'en.sleepcountry.ca',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
