/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com','media.graphassets.com'],
   
  },
}

module.exports = nextConfig

