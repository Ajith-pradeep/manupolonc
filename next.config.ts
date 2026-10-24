import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/portfolio", destination: "/about", permanent: true },
      { source: "/portfolio/:slug*", destination: "/about", permanent: true },
      { source: "/ventures", destination: "/about", permanent: true },
      { source: "/ventures/:path*", destination: "/about", permanent: true },
      { source: "/impact", destination: "/about", permanent: true },
      { source: "/media", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
