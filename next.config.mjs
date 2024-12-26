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
        hostname: 'ca86-2-50-148-216.ngrok-free.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;