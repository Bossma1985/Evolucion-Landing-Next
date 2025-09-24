"use client";
import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Una historia que te cambia la perspectiva. Me ha enseñado que los límites solo existen en la mente.",
      author: "Laura Gómez",
      title: "Lectora",
    },
    {
      quote:
        "Rafa es un ejemplo de resiliencia y superación. Su libro es una inyección de motivación pura.",
      author: "Carlos Pérez",
      title: "Entrenador personal",
    },
    {
      quote:
        "No es solo un libro sobre discapacidad, es una lección de vida para cualquier persona. ¡Imprescindible!",
      author: "Ana Martínez",
      title: "Psicóloga",
    },
  ];

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gray to-gray-300 py-20 px-4"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black">
          Lo que dicen los lectores
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-gray-700 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="mt-6 font-bold text-black">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
