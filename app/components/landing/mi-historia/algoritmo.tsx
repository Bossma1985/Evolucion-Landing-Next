"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";
import { BrainCircuit, Cog, Compass } from "lucide-react";

const algoritmo = [
  {
    icon: BrainCircuit,
    title: "Aceptación Radical",
    description:
      "Reconocer la realidad sin juicio es el primer paso para poder transformarla. Es mirar al abismo y entender que es tu nuevo punto de partida.",
  },
  {
    icon: Cog,
    title: "Construye tu Sistema",
    description:
      "Apóyate en la tecnología, en las personas y en nuevas rutinas para amplificar tu voluntad. Conviértete en el arquitecto de tu nueva vida.",
  },
  {
    icon: Compass,
    title: "Redefine tu Norte",
    description:
      "Encuentra un propósito que sea más grande que tu adversidad. Una misión que te impulse a levantarte cada mañana, sin importar las circunstancias.",
  },
];

const AlgoritmoSection = () => {
  return (
    <section id="algoritmo" className="my-24 sm:my-32">
      <SectionTitle className="text-center mb-16">
        El Algoritmo de Resiliencia
      </SectionTitle>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {algoritmo.map((paso, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="p-8 bg-gray-900/50 rounded-xl"
          >
            <div className="flex justify-center mb-6">
              <paso.icon className="w-16 h-16 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{paso.title}</h3>
            <p className="text-gray-300">{paso.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AlgoritmoSection;
