

// TODO: избравиться от 'encrypted-tbn0.gstatic.com', 'isaloni.su'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
   deviceSizes: [320, 600, 1024, 1280, 1440],
   domains: ['i.postimg.cc', 'books.google.com', 'encrypted-tbn0.gstatic.com', 'isaloni.su', 'lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
