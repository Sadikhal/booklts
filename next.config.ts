import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow Cloudinary images used in seed and components
    domains: ['res.cloudinary.com'],
    // Alternatively you could use `remotePatterns` for more precise matching
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'res.cloudinary.com',
    //     pathname: '/**',
    //   },
    // ],
  },
};

export default nextConfig;
