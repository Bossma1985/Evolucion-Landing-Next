import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/shared/scroll-to-top-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evolución - La historia de Rafa Botella",
  description:
    "La landing page oficial del libro autobiográfico &quot;Evolución&quot; de Rafa Botella. Una historia de superación, resiliencia e inspiración.",
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
        <ScrollToTopButton />
      </body>
    </html>
  );
}
