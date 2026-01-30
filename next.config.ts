import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "https://docs.brickbot.ro",
        permanent: true,
      },
      {
        source: "/apply",
        destination: "https://forms.gle/yBG1R8YJoQaGmYez7",
        permanent: true,
      },
      {
        source: "/submit-portfolio",
        destination: "https://forms.gle/YGcVdcwkANbtqKNs5",
        permanent: true,
      },
      {
        source: "/en/home",
        destination: "https://brickbot.ro/en",
        permanent: true,
      },
      {
        source: "/ro/acasa",
        destination: "https://brickbot.ro/ro",
        permanent: true,
      },
      {
        source: "/formular230",
        destination: "https://formular230.ro/asociatia-brickbot",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [new URL("https://cdn.brickbot.ro/**")],
  },
};

export default withNextIntl(nextConfig);
