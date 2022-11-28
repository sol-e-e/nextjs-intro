/** @type {import('next').NextConfig} */
const API_KEY = "21c2fefe610a2ba3f1e86d2f05327693";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false
      }
    ]
  },
  async rewrites() {
    return [{
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3//movie/popular?api_key=${API_KEY}`
    },{
      source: "/api/movies/:id",
      destination: `https://api.themoviedb.org/3//movie/:id?api_key=${API_KEY}`
    }]
  },
  swcMinify: true,
}

module.exports = nextConfig
