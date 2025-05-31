import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    // disable Turbopack temporarily
    turbo: false,
  },
};

export default nextConfig;
