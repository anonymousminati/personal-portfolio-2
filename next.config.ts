import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
   basePath: "/personal-portfolio-2",
   images: {
    unoptimized: true,
  },
};

export default nextConfig;
