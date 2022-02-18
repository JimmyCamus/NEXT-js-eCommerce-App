module.exports = {
  reactStrictMode: true,
  env: {
    API_PROTOCOL: process.env.API_PROTOCOL,
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ["i.ibb.co"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
};
