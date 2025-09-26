"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";

const frases = [
  {
    texto: "El cielo no fue mi límite, fue mi punto de partida.",
  },
  {
    texto: "La verdadera discapacidad es una mente que se rinde.",
  },
  {
    texto: "Transforma tus cicatrices en el mapa de tu fortaleza.",
  },
];

const PilaresSection = () => {
  return (
    <section id="pilares" className="my-24 sm:my-32">
      <SectionTitle className="text-center mb-16">Mis Pilares</SectionTitle>
      <div className="max-w-4xl mx-auto space-y-12">
        {frases.map((frase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="text-center"
          >
            <p className="text-3xl sm:text-4xl font-light italic text-gray-200 leading-tight">
              &ldquo;{frase.texto}&rdquo;
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PilaresSection;
