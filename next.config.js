/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: { 
      domains: ['links.papareact.com', 'fakestoreapi.com','m.media-amazon.com']
  },
  nextConfig
  // env: {
  //   MAPBOX_KEY: process.env.MAPBOX_KEY,
  // },
}
