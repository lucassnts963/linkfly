/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lojaybera.fbitsstatic.net',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
}

module.exports = nextConfig
