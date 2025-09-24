"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const images = [
    "/imagenes/carrusel/casaviejapc.JPG",
    "/imagenes/carrusel/gladio.jpg",
    "/imagenes/carrusel/missk8.jpg",
    "/imagenes/carrusel/paraca.JPG",
    "/imagenes/carrusel/dominator.jpg",
    "/imagenes/carrusel/primos.jpg",
    "/imagenes/carrusel/cumplefe.JPG",
    "/imagenes/carrusel/campus.JPG",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-slate-100 to-white py-20 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Sobre mí, Rafa Botella
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            El autor detrás de la historia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 space-y-6 text-base leading-relaxed"
          >
            <p>
              Mi vida ha sido una guerra librada en dos frentes muy distintos.
              La primera fue una batalla por la libertad: años de adolescencia
              vividos al límite, quemando rueda en una moto y buscando mi
              identidad en la oscuridad de las discotecas. La segunda, tras un
              accidente que me dejó tetrapléjico, fue mucho más silenciosa y
              brutal. Fue una guerra contra el estancamiento, contra un enemigo
              que no puedes golpear: el de sentir que tu mundo se ha detenido
              para siempre mientras el resto sigue girando.
            </p>
            <p>
              Continúa narrando los desafíos que has enfrentado y, lo más
              importante, cómo los has superado. El objetivo es transmitir el
              mensaje central de &quot;Evolución&quot;: la resiliencia, la
              fuerza interior y la capacidad de adaptarse y encontrar un nuevo
              propósito.
            </p>
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
            <Link
              href="#pricing"
              className="inline-block mt-6 bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-colors"
            >
              Descubre mi libro
            </Link>
          </motion.div>

          {/* Columna del Carrusel de Fotos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-2xl"
          >
            <AnimatePresence>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }} // Transición suave de 1.5s
                className="absolute inset-0"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`Foto de Rafa Botella ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
