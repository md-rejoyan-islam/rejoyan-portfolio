/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "api.microlink.io",
      },
      {
        hostname: "cdn.hashnode.com",
      },
    ],
  },
};

export default nextConfig;
