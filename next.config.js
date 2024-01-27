/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Set port to 8000
  serverRuntimeConfig: {
    port: 8000,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};
module.exports = nextConfig;
