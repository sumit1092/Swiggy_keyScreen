import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media-assets.swiggy.com",
        protocol: "https",
      },
      {
        hostname: "cdn.dummyjson.com",
        protocol: "https",
      },
    ],
  },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
