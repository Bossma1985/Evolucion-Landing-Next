"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const images = [
    {
      src: "/imagenes/carrusel/parking_central.jpg",
      description: "El parking la central, momentos sagrados.",
    },
    {
      src: "/imagenes/carrusel/reportaje.jpg",
      description: "Un momento capturado para la historia.",
    },
    {
      src: "/imagenes/carrusel/mercedesf1.jpg",
      description: "El mundo de la Fórmula 1, velocidad pura.",
    },
    {
      src: "/imagenes/carrusel/Martina.jpg",
      description: "Con Martina, momentos especiales.",
    },
    {
      src: "/imagenes/carrusel/mas_amigos.jpg",
      description: "Más amigos, más recuerdos, más vida.",
    },
    {
      src: "/imagenes/carrusel/mariscada.jpg",
      description: "Una mariscada, compartiendo con los míos.",
    },
    {
      src: "/imagenes/carrusel/handbike.jpg",
      description: "Mi handbike, mi forma de mantenerme activo.",
    },
    {
      src: "/imagenes/carrusel/Javi_boss.jpg",
      description: "Con Javi, el jefe.",
    },
    {
      src: "/imagenes/carrusel/grua.jpg",
      description: "La grúa, herramienta de trabajo y vida.",
    },
    {
      src: "/imagenes/carrusel/grupo_amigos.jpg",
      description: "Mi grupo de amigos, mi segunda familia.",
    },
    {
      src: "/imagenes/carrusel/Dori.jpg",
      description: "Con Dori, momentos entrañables.",
    },
    {
      src: "/imagenes/carrusel/familia_cristel.jpg",
      description: "La familia de Cristel, parte de mi historia.",
    },
    {
      src: "/imagenes/carrusel/gogos-central.jpg",
      description: "Los gogos del Central, música en vivo.",
    },
    {
      src: "/imagenes/carrusel/box_lcr.jpg",
      description: "En el box LCR, mundo del motociclismo.",
    },
    {
      src: "/imagenes/carrusel/campus_con_marc.jpg",
      description: "En el campus con Marc, compartiendo experiencias.",
    },
    {
      src: "/imagenes/carrusel/careta_angerfist.jpg",
      description: "La careta de Angerfist, símbolo del hardcore.",
    },
    {
      src: "/imagenes/carrusel/central_salida.jpg",
      description: "La salida del Central, después de la fiesta.",
    },
    {
      src: "/imagenes/carrusel/comida.jpg",
      description: "Momento de comida, compartiendo mesa.",
    },
    {
      src: "/imagenes/carrusel/Bailecito_La_Fe.jpg",
      description: "Bailecito en La Fe, música y diversión.",
    },
    {
      src: "/imagenes/carrusel/avion.jpg",
      description: "El avión, mi transporte hacia la libertad.",
    },
    {
      src: "/imagenes/carrusel/amigos1.jpg",
      description: "Con amigos, los mejores momentos.",
    },
    {
      src: "/imagenes/carrusel/Aitana_saxo.jpeg",
      description: "Con Aitana y su saxo, música en familia.",
    },
    {
      src: "/imagenes/carrusel/Abel.jpg",
      description: "Con Abel, amistad verdadera.",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Sobre mí, Rafa Botella
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            El autor detrás de la historia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 space-y-6 text-base leading-relaxed"
          >
            <p>
              Cuando creía que había llegado al borde del mapa, encontré una
              brújula en el lugar más inesperado: la historia de la Inteligencia
              Artificial. Descubrí que el viaje de la IA, con sus sueños
              imposibles y sus duros inviernos, era un espejo de mi propia
              lucha. Este libro no es una historia sobre tecnología, es el
              relato de cómo un ser humano puede desmontar su propia mente y
              reconstruirla pieza a pieza. En él comparto el &quot;algoritmo de
              resiliencia&quot; que tuve que programar para no rendirme y los
              &quot;sistemas expertos&quot; que diseñé para reconquistar mi
              vida. Es mi mapa para navegar el caos y la prueba de que, a veces,
              la salida se encuentra en los lugares que nunca habrías imaginado.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/comprar"
                className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-colors"
              >
                Comprar el libro
              </Link>
              <Link
                href="/mi-historia"
                className="inline-block bg-transparent border border-gray-400 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-600 hover:text-black hover:border-red-600 transition-colors"
              >
                Descubre mi historia
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full"
          >
            <div className="mb-6 text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentImageIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg text-gray-300"
                >
                  {images[currentImageIndex].description}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-2xl bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImageIndex].src}
                    alt={`Foto de Rafa Botella ${currentImageIndex + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
