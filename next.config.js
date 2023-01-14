/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  trailingSlash: false,
  /*experimental: {
    // Required:
    appDir: true
  }*/
}

module.exports = nextConfig
