import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'hotelcasadelmarques.com'
      },
      {
        protocol: 'https',
        hostname: 'www.apartamentos3000.com'
      },
      {
        protocol: 'https',
        hostname: 'fotos.hoteles.net'
      },
      {
        protocol: 'https',
        hostname: 'lh4.googleusercontent.com'
      }
    ]
  }
};

export default nextConfig;
