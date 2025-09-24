"use client";
import React from "react";
import { motion } from "framer-motion";

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

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white py-20 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-black">
          Preguntas Frecuentes
        </h2>
        <div className="mt-12 space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 pb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-black">
                {faq.question}
              </h3>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
