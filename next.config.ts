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
      },
      {
        protocol: 'https',
        hostname: 'www.fincadesanjuan.es'
      },
      {
        protocol: 'https',
        hostname: 'cdn0.bodas.net'
      },
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com'
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com'
      },
      {
        protocol: 'https',
        hostname: 'photos.app.goo.gl'
      }
    ]
  }
};

export default nextConfig;
