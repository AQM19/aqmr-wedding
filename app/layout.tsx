import "./globals.css";
import { playfair } from "@/lib";
import { montserrat } from "@/lib/fonts/montserrat";
import type { Metadata } from "next";
import { Suspense } from "react";
import { host } from "./config";

export const metadata: Metadata = {
  title: "Aarón & Merce - Nuestra boda",
  description: `¡Nos casamos! Celebra con nosotros nuestro gran día`,
  authors: [
    {
      name: 'Aarón Quintanal Martín',
      url: host
    }
  ],
  keywords: ["Aarón Quintanal Martín", "Mercedes Ríos Gutiérrez", "boda", "celebración", "amor", "compromiso", "familia", "amigos", "evento", "invitación", "ceremonia", "fiesta", "recuerdos", "momentos especiales"],
  openGraph: {
    title: "Aarón & Merce - Nuestra boda",
    description: `¡Nos casamos! Celebra con nosotros nuestro gran día`,
    url: host,
    type: "website",
    images: [
      {
        url: `${host}/imgs/romantic-wedding-venue-sunset-elegant.jpg`,
        width: 800,
        height: 600,
        alt: "Imagen de la boda de Aarón y Merce",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarón & Merce - Nuestra boda",
    description: `¡Nos casamos! Celebra con nosotros nuestro gran día`,
    site: '@AQuintanalMDev',
    creator: '@AQuintanalMDev',
    images: [
      `${host}/imgs/romantic-wedding-venue-sunset-elegant.jpg`
    ]
  },
  alternates: {
    canonical: host,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    title: 'Aarón & Merce - Nuestra boda',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/imgs/romantic-wedding-venue-sunset-elegant.jpg',
      {
        url: '/assets/imgs/romantic-wedding-venue-sunset-elegant.jpg',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  assets: [
    `${host}/assets`,
  ],
  category: 'wedding',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`font-sans ${playfair.variable} ${montserrat.variable} antialiased`}>
        <Suspense fallback={<div>Cargando...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
