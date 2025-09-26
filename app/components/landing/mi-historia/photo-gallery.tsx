"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";

const images = [
  {
    src: "/imagenes/mi-historia/gladio.jpg",
    description: "Entrenando duro, forjando el cuerpo y la mente.",
  },
  {
    src: "/imagenes/mi-historia/missk8.jpg",
    description: "Disfrutando de la música, mi otra gran pasión.",
  },
  {
    src: "/imagenes/mi-historia/paraca.JPG",
    description: "Volando, sintiendo la libertad en su estado más puro.",
  },
  {
    src: "/imagenes/mi-historia/dominator.jpg",
    description: "En el festival Dominator, la energía que me mueve.",
  },
  {
    src: "/imagenes/mi-historia/primos.jpg",
    description: "Con mis primos, la familia es mi pilar fundamental.",
  },
  {
    src: "/imagenes/mi-historia/cumplefe.JPG",
    description: "Celebrando la vida, cada momento cuenta.",
  },
  {
    src: "/imagenes/mi-historia/casaviejapc.JPG",
    description: "Recuerdos de la Casa Vieja, siempre en mi corazón.",
  },
  {
    src: "/imagenes/mi-historia/campus.JPG",
    description: "Compartiendo experiencias en el campus.",
  },
];

export const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="galeria" className="my-24 sm:my-32 flex flex-col items-center">
      <SectionTitle className="mb-16 text-center">
        Mi vida en imágenes
      </SectionTitle>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full max-w-3xl h-[550px] rounded-xl overflow-hidden shadow-2xl"
      >
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={`Foto de la historia de Rafa Botella ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="mt-6 text-center w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-300"
          >
            {images[currentIndex].description}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};
