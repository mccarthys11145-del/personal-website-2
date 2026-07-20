/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'stephenmccarthypa.com' }],
        destination: 'https://www.stephenmccarthypa.com/:path*',
        permanent: true,
      },
      {
        source: '/professional-journey',
        destination: '/professional-record',
        permanent: true,
      },
      {
        source: '/community-involvement',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/writing',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/writing',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/profiles-and-sources',
        permanent: true,
      },
      {
        source: '/media-press',
        destination: '/profiles-and-sources',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
