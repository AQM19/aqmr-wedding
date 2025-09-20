import "./globals.css";
import { env } from "process";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invitación de boda - Aarón & Merce",
  description: `Estás invitado a nuestra boda el ${env.WEDDING_DAY}-${env.WEDDING_MONTH}-${env.WEDDING_YEAR} en Cantabria. ¡Nos encantaría contar con tu presencia en este día tan especial!`,
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
      <body
        className={`antialiased bg-bone_carver text-night_court`}
      >
        <Header></Header>
        <main>
          {children}
        </main>
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
