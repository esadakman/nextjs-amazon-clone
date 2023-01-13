/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: { 
      domains: ['links.papareact.com', 'fakestoreapi.com']
  },
  nextConfig
  // env: {
  //   MAPBOX_KEY: process.env.MAPBOX_KEY,
  // },
}
