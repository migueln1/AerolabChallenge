/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  images: {
    domains: ["coding-challenge-api.aerolab.co"]
  }
}

module.exports = nextConfig
