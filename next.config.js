/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  experimental: {
    webVitalsAttribution: [],
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    }
    return config
  }
};

module.exports = nextConfig;