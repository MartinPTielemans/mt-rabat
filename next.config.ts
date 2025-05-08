import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/gallery',
        destination: '/galleri',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/ydelser',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
