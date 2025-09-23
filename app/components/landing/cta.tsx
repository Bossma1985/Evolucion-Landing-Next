"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 px-4 text-center"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold">¿Listo para evolucionar?</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          No esperes más para descubrir una historia que cambiará tu
          perspectiva. Adquiere tu copia de "Evolución" hoy mismo y comienza tu
          propio viaje de superación.
        </p>
        <Link href="/comprar">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-black text-white font-bold py-4 px-10 rounded-lg text-xl transition-colors"
          >
            Quiero mi copia ahora
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default CTA;
