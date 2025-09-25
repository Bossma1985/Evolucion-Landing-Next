"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Para quién es este libro?",
      answer:
        "Es para cualquier persona que busque inspiración, motivación y una historia real de superación. No es un libro exclusivo para personas con discapacidad, sino para todo aquel que quiera afrontar sus propios retos.",
    },
    {
      question: "¿Dónde puedo comprar el libro?",
      answer:
        "Puedes adquirirlo haciendo clic en cualquiera de los botones de compra de esta página. Te redirigirán a la plataforma de venta de forma segura.",
    },
    {
      question: "¿El libro está disponible en formato físico y digital?",
      answer:
        "Sí, &quot;Evolución&quot; está disponible tanto en formato físico (tapa blanda) como en formato eBook para que puedas leerlo en tu dispositivo preferido.",
    },
    {
      question: "¿Cuánto tiempo tarda el envío?",
      answer:
        "El tiempo de envío varía según tu ubicación, pero generalmente tarda entre 3 y 5 días hábiles para envíos nacionales.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black py-20 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-white">
          Preguntas Frecuentes
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-800 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left py-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className={`w-6 h-6 text-red-500 transition-colors ${
                      activeIndex === index ? "text-red-500" : "text-gray-400"
                    }`}
                  />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
