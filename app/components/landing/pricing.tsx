"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Pricing = () => {
  const options = [
    {
      format: "Libro Físico",
      price: "24,99€",
      description:
        "Recibe en casa la edición de tapa blanda. Siente la historia en tus manos.",
      features: [
        "Tapa blanda de alta calidad",
        "Marcapáginas exclusivo de regalo",
        "Envío a toda España",
      ],
      buttonText: "Comprar Físico",
    },
    {
      format: "eBook (Digital)",
      price: "9,99€",
      description:
        'Lleva "Evolución" contigo a todas partes. Lectura instantánea en tus dispositivos.',
      features: [
        "Formatos EPUB, MOBI y PDF",
        "Acceso inmediato tras la compra",
        "Compatible con todos los e-readers",
      ],
      buttonText: "Comprar eBook",
    },
  ];

  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-white to-orange-50 py-20 px-4"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black">Elige tu formato</h2>
        <p className="mt-4 text-lg text-gray-600">
          Escoge la forma en la que quieres que esta historia te acompañe.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg p-8 flex flex-col hover:shadow-2xl hover:border-red-600 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-black">{option.format}</h3>
              <p className="mt-4 text-4xl font-bold text-red-600">
                {option.price}
              </p>
              <p className="mt-4 text-gray-700 flex-grow">
                {option.description}
              </p>
              <ul className="mt-6 space-y-2 text-left">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/comprar?formato=${
                  option.format === "Libro Físico" ? "fisico" : "ebook"
                }`}
              >
                <button className="mt-8 bg-black text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-800 transition-colors w-full">
                  {option.buttonText}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
