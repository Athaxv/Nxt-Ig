import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "build",
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
