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
        source: "/",
        destination: "/en/home",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
