/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.flaticon.com',
        port: '',
        pathname: '/free-icons/google',
      },
    ],
  },};

export default nextConfig;
