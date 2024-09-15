/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aggregator-devnet.walrus.space",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
