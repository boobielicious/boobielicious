/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['lib', 'app', 'generated', 'graphql']
  },
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.IMAGE_REMOTE_PROTOCOL ?? 'http',
        hostname: process.env.IMAGE_REMOTE_HOSTNAME ?? 'stash',
        port: process.env.IMAGE_REMOTE_PORT ?? '9999'
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com'
      }
    ]
  },
  reactStrictMode: true
}

module.exports = nextConfig
