"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import useScrollPosition from "@/hooks/use-scroll-position";
import useSmoothScroll from "@/hooks/use-smooth-scroll";

const Header = () => {
  const scrolled = useScrollPosition(20);
  const scrollToElement = useSmoothScroll(80); // 80px de offset para el header

  const navLinks = [
    { name: "Contenido", href: "#features" },
    { name: "Sobre mí", href: "#about" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Precios", href: "#pricing" },
    { name: "Preguntas Frecuentes", href: "#faq" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const elementId = href.replace("#", "");
    scrollToElement(elementId);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20 text-white">
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="text-red-600">Evolución</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 rounded-md hover:bg-white/10 hover:text-red-600 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link href="/comprar">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg text-md"
            >
              Comprar
            </motion.button>
          </Link>
        </div>
        {/* TODO: Mobile Menu Button */}
        <div className="md:hidden">{/* Placeholder for hamburger icon */}</div>
      </div>
    </motion.header>
  );
};

export default Header;
