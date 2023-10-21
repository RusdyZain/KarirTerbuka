/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "watusampu.palukota.go.id",
      },
    ],
  },
};

module.exports = nextConfig;
