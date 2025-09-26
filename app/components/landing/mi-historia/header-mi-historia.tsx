"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeaderMiHistoria = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Galería", href: "#galeria" },
    { name: "Timeline", href: "#timeline" },
    { name: "Pilares", href: "#pilares" },
    { name: "Algoritmo", href: "#algoritmo" },
    { name: "Experiencias", href: "#experiencias" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 grid grid-cols-3 items-center h-20 text-white">
        {/* Columna Izquierda: Logo */}
        <div className="text-2xl font-bold justify-self-start">
          <Link href="/">
            <span className="text-red-600">Evolución</span>
          </Link>
        </div>

        {/* Columna Central: Navegación */}
        <nav className="hidden md:flex items-center space-x-2 justify-self-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded-md hover:bg-white/10 hover:text-red-600 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Columna Derecha: Botón Comprar */}
        <div className="hidden md:flex justify-self-end">
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

        {/* Menú Móvil (a la derecha) */}
        <div className="md:hidden col-start-3 justify-self-end">
          {/* Placeholder for hamburger icon */}
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderMiHistoria;
