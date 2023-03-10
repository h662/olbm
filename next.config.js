/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({ dest: "public" });

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "olbm.mypinata.cloud",
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
