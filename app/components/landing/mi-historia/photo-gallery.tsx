"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/imagenes/mi-historia/gladio.jpg",
  "/imagenes/mi-historia/missk8.jpg",
  "/imagenes/mi-historia/paraca.JPG",
  "/imagenes/mi-historia/dominator.jpg",
  "/imagenes/mi-historia/primos.jpg",
  "/imagenes/mi-historia/cumplefe.JPG",
  "/imagenes/mi-historia/casaviejapc.JPG",
  "/imagenes/mi-historia/campus.JPG",
];

export const PhotoGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="my-24 sm:my-32 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full max-w-3xl h-[550px] rounded-xl overflow-hidden shadow-2xl"
      >
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Foto de la historia de Rafa Botella ${
                currentImageIndex + 1
              }`}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
