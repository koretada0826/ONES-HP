/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "ones-mg.com" },
      { protocol: "https", hostname: "assets.st-note.com" },
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
