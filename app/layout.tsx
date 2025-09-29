import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/shared/scroll-to-top-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evolución - La historia de Rafa Botella",
  description:
    "La landing page oficial del libro autobiográfico &quot;Evolución&quot; de Rafa Botella. Una historia de superación, resiliencia e inspiración.",
  openGraph: {
    title: "Evolución - La historia de Rafa Botella",
    description: "Una historia de superación, resiliencia e inspiración.",
    url: "https://www.ejemplo.com", // Cambiar por la URL real
    siteName: "Evolución - El Libro",
    images: [
      {
        url: "https://www.ejemplo.com/og-image.jpg", // Crear y subir esta imagen
        width: 1200,
        height: 630,
        alt: "Portada del libro Evolución de Rafa Botella",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evolución - La historia de Rafa Botella",
    description: "Una historia de superación, resiliencia e inspiración.",
    images: ["https://www.ejemplo.com/twitter-image.jpg"], // Crear y subir esta imagen
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Analytics />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
