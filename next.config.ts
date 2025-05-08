import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          port: '',
          pathname: '/f/**',
        }
      ],
  },
  async redirects() {
    return [
      {
        source: "/gallery",
        destination: '/galleri',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/ydelser',
        permanent: true,
      },
      {
        source: '/skills',
        destination: '/kompetencer',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
