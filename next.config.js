/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['lib', 'app']
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
