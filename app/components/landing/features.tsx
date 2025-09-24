"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpenText, Globe, Zap, HeartHandshake } from "lucide-react";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      icon: <BookOpenText size={32} className="text-red-600" />,
      title: "Historia Real",
      description: "Una autobiografía auténtica y conmovedora que te atrapará.",
    },
    {
      icon: <Globe size={32} className="text-red-600" />,
      title: "Mensaje Universal",
      description:
        "Un mensaje de superación que resuena con cualquier persona.",
    },
    {
      icon: <Zap size={32} className="text-red-600" />,
      title: "Inspiración Pura",
      description:
        "Motivación para afrontar tus propios desafíos y dificultades.",
    },
    {
      icon: <HeartHandshake size={32} className="text-red-600" />,
      title: "Narrativa Cercana",
      description:
        "Un estilo accesible que te hará sentir parte de la historia.",
    },
  ];

  return (
    <motion.section
      id="features"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-white to-slate-100 py-20 px-4"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna Izquierda: Imagen del Libro */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/imagenes/libro/Evolucion-Cover.jpg"
              alt="Portada del libro Evolución de Rafa Botella"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Columna Derecha: Características */}
          <div>
            <h2 className="text-3xl font-bold text-black sm:text-4xl text-center lg:text-left">
              ¿Qué encontrarás en &quot;Evolución&quot;?
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-center lg:text-left">
              Cuatro pilares que hacen de este libro una experiencia
              transformadora.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="mt-1 flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
