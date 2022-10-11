/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URL: 'MongoATLAS URI'
  }
}

module.exports = nextConfig
