/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
   domains:['postimg.cc']
  }
}

module.exports = nextConfig
