
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Work Now",
  description: "Contratá rápido sin perder tiempo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={inter.className}>
      <body className="bg-white">


        {children}

        {/* Botón de WhatsApp fijo */}
        <a
          href="https://wa.me/5493413650224"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir WhatsApp para chatear con Work Now"
          className="fixed bottom-4 left-4 z-50 bg-[#1C0B35] hover:bg-[#A463F2] text-white rounded-full p-3 shadow-lg flex items-center justify-center"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </body>
    </html>
  );
}
