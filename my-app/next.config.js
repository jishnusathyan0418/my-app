/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper App Router configuration
  experimental: {
    appDir: true
  },
  
  // Essential for Vercel deployment
  eslint: {
    ignoreDuringBuilds: false
  },
  
  // Don't add any of these (they break API routes):
  // output: 'export'
  // trailingSlash: true
  // distDir: 'build'
}

module.exports = nextConfig