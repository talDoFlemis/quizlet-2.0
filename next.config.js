/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    })
    return config
  },
  images: {
    domains: [
      "imgs.search.brave.com",
      "avatars.githubusercontent.com",
      "cdn.jsdelivr.net",
      "github.com",
      "raw.githubusercontent.com",
      "c.tenor.com",
    ],
  },
}
