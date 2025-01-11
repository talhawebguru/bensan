/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'https://b832-2-50-148-251.ngrok-free.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;