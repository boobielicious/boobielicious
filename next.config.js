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
        protocol: process.env.STASH_IMAGE_REMOTE_PROTOCOL,
        hostname: process.env.STASH_IMAGE_REMOTE_HOSTNAME,
        port: process.env.STASH_IMAGE_REMOTE_PORT
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
