"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";

const images = [
  {
    src: "/imagenes/mi-historia/yo-dominator.jpg",
    description: "En el festival Dominator, la energía que me mueve.",
  },
  {
    src: "/imagenes/mi-historia/rossi.jpg",
    description: "Admiración por los grandes del deporte.",
  },
  {
    src: "/imagenes/mi-historia/suzuki_rmx.jpg",
    description: "Mi Suzuki RMX, mi compañera de aventuras.",
  },
  {
    src: "/imagenes/mi-historia/tienda_senna.jpg",
    description: "Homenaje a Ayrton Senna, leyenda del automovilismo.",
  },
  {
    src: "/imagenes/mi-historia/Toledo.jpg",
    description: "Recuerdos de Toledo, ciudad histórica.",
  },
  {
    src: "/imagenes/mi-historia/rosa_dominator.jpg",
    description: "La rosa del Dominator, símbolo de la música hardcore.",
  },
  {
    src: "/imagenes/mi-historia/primos.jpg",
    description: "Con mis primos, la familia es mi pilar fundamental.",
  },
  {
    src: "/imagenes/mi-historia/paramotor_suelo.jpg",
    description: "Preparando el paramotor, listo para volar.",
  },
  {
    src: "/imagenes/mi-historia/paracaidas_puerta.jpg",
    description: "En la puerta del avión, a punto de saltar.",
  },
  {
    src: "/imagenes/mi-historia/mestalla.jpg",
    description: "En Mestalla, con el Valencia CF.",
  },
  {
    src: "/imagenes/mi-historia/missk8.jpg",
    description: "Disfrutando de la música, mi otra gran pasión.",
  },
  {
    src: "/imagenes/mi-historia/paraca.jpg",
    description: "Volando, sintiendo la libertad en su estado más puro.",
  },
  {
    src: "/imagenes/mi-historia/madre_padre_yo.jpg",
    description: "Con mis padres, mi familia, mi apoyo.",
  },
  {
    src: "/imagenes/mi-historia/marc_marquez.jpg",
    description: "Admirando a Marc Márquez, campeón del mundo.",
  },
  {
    src: "/imagenes/mi-historia/hamilton.jpg",
    description: "Lewis Hamilton, ídolo del automovilismo.",
  },
  {
    src: "/imagenes/mi-historia/gladio.jpg",
    description: "Entrenando duro, forjando el cuerpo y la mente.",
  },
  {
    src: "/imagenes/mi-historia/dominator.jpg",
    description: "En el Dominator, la energía que me mueve.",
  },
  {
    src: "/imagenes/mi-historia/casaviejapc.jpg",
    description: "Recuerdos de la Casa Vieja, siempre en mi corazón.",
  },
  {
    src: "/imagenes/mi-historia/aterrizaje_paracaidas.jpg",
    description: "Aterrizaje perfecto, misión cumplida.",
  },
  {
    src: "/imagenes/mi-historia/alonso.jpg",
    description: "Fernando Alonso, orgullo español.",
  },
  {
    src: "/imagenes/mi-historia/aire_paramotor.jpg",
    description: "En el aire con el paramotor, libertad total.",
  },
  {
    src: "/imagenes/mi-historia/20_cumpleaños.jpg",
    description: "Mi cumpleaños número 20, celebrando la vida.",
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
        className="relative w-full max-w-3xl h-[550px] rounded-xl overflow-hidden shadow-2xl bg-black"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={`Foto de la historia de Rafa Botella ${currentIndex + 1}`}
              fill
              style={{ objectFit: "cover" }}
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
