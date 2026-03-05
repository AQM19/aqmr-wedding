import "./globals.css";
import { playfair } from "@/lib";
import { montserrat } from "@/lib/fonts/montserrat";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Aarón & Merce - Nuestra boda",
  description: `¡Nos casamos! Celebra con nosotros nuestro gran día`,
  authors: [
    {
      name: "Aarón Quintanal Martín",
      url: "https://p-qfoil.vercel.app/es"
    }
  ]
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
