/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "watusampu.palukota.go.id",
      },
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
      },
      {
        protocol: "https",
        hostname: "icons8.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
