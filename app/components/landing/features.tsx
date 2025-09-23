"use client";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Historia Real",
      description:
        "Una autobiografía auténtica y conmovedora que te atrapará desde la primera página.",
    },
    {
      title: "Mensaje Universal",
      description:
        "Descubre un mensaje de superación y resiliencia que resuena con cualquier persona.",
    },
    {
      title: "Inspiración Pura",
      description:
        "Encuentra la motivación para afrontar tus propios desafíos y dificultades.",
    },
    {
      title: "Narrativa Cercana",
      description:
        "Escrita con un estilo accesible y cercano que te hará sentir parte de la historia.",
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
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black">
          ¿Qué encontrarás en "Evolución"?
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-black">{feature.title}</h3>
              <p className="mt-4 text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
