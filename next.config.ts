import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,  // This tells Next.js to use the app/ folder
  },
};

export default nextConfig;
