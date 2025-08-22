/** @type {import('next').NextConfig} */
import data from "./r1.js"
const nextConfig = {
  images: {
    loader: 'default',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.bensano.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
   async redirects() {
    return data;
  },
};

export default nextConfig;