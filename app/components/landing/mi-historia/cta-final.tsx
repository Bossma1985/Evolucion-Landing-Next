"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FragmentDialog from "./fragment-dialog";

const CtaFinalSection = () => {
  return (
    <section
      id="cta-final"
      className="relative my-24 sm:my-32 py-20 sm:py-32 text-white text-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: "url('/imagenes/autor/yo_pc.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          ¿Listo para empezar tu propia{" "}
          <span className="text-red-600 text-5xl sm:text-6xl">Evolución</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Mi historia es la prueba de que los límites solo existen en la mente.
          Descubre las herramientas y la mentalidad que me permitieron
          reconstruir mi vida.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/comprar">Comprar el Libro</Link>
          </Button>
          <FragmentDialog>
            <Button size="lg" variant="outline">
              Leer un Fragmento
            </Button>
          </FragmentDialog>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaFinalSection;
