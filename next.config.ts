// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // se você usar <Image> com domínios externos, liste aqui
    // domains: ["images.unsplash.com", "…"],
  },
};

export default nextConfig;
