import withFonts from "next-fonts";

/** @type {import('next').NextConfig} */
const nextConfig = withFonts({
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
  webpack(config, options) {
    return config;
  },
});

export default nextConfig;
