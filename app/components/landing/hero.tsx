"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative text-white h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800 animate-gradient-bg bg-[length:200%_200%] -z-10" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            La historia de superación que te{" "}
            <span className="text-red-600">inspirará</span> a evolucionar
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
            Mi nombre es Rafa Botella y esta es mi historia. Un viaje de
            resiliencia, superación y la prueba de que no existen límites cuando
            te niegas a rendirte.
          </p>
          <Link href="/comprar">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Comprar el libro
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/imagenes/autor/yo_pc.jpg"
              alt="Rafa Botella escribiendo en su ordenador adaptado"
              layout="fill"
              objectFit="cover"
              className="brightness-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
