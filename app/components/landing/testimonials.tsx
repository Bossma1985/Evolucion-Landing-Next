"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Imágenes de los testimonios
import elonMusk from "../../../public/imagenes/testimonios/elon-musk.jpeg";
import jkRowling from "../../../public/imagenes/testimonios/jk_rowling.jpg";
import stephenKing from "../../../public/imagenes/testimonios/Stephen_King.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "La 'Evolución' de Rafa demuestra que la única limitación es la física. La voluntad humana es el cohete más potente. Imprescindible para cualquier emprendedor interplanetario.",
      author: "Elon Musk",
      title: "Ingeniero Jefe, SpaceX",
      image: elonMusk,
    },
    {
      quote:
        "Hay magia en estas páginas. Una historia de resiliencia que nos recuerda que incluso en los momentos más oscuros, siempre se puede conjurar la luz. Pura inspiración.",
      author: "J.K. Rowling",
      title: "Autora",
      image: jkRowling,
    },
    {
      quote:
        "Aterradoramente bueno. El verdadero monstruo es la adversidad, y Rafa Botella le planta cara con una narrativa que te atrapa y no te suelta. Una obra maestra del coraje.",
      author: "Stephen King",
      title: "Maestro del Terror",
      image: stephenKing,
    },
  ];

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 py-20 px-4"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black">
          Lo que dicen los grandes
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-red-500 -mt-20 mb-6">
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.author}`}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-700 italic text-lg mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="mt-auto font-bold text-xl text-black">
                {testimonial.author}
              </p>
              <p className="text-md text-gray-500">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
