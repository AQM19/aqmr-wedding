import "./globals.css";
import { playfair } from "@/lib";
import { montserrat } from "@/lib/fonts/montserrat";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://aaronandmercesweding.es/"),

  title: "Aarón & Merce - Nuestra boda",
  description: "¡Nos casamos! Celebra con nosotros nuestro gran día",

  openGraph: {
    type: "website",
    title: "Aarón & Merce - Nuestra boda",
    description: "¡Nos casamos! Celebra con nosotros nuestro gran día",
    url: "/",
    images: [
      {
        url: "/imgs/romantic-wedding-venue-sunset-elegant.jpg",
        width: 1200,
        height: 630,
        alt: "Imagen de la boda de Aarón y Merce",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aarón & Merce - Nuestra boda",
    description: "¡Nos casamos! Celebra con nosotros nuestro gran día",
    images: ["/imgs/romantic-wedding-venue-sunset-elegant.jpg"],
  },
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
