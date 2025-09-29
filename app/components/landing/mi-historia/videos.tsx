"use client";

import { motion } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { FaYoutube } from "react-icons/fa";
import SectionTitle from "@/components/shared/SectionTitle";

const videos = [
  {
    id: "RcEE3msnl_A",
    title: "El Vuelo del Fénix",
    description:
      "Hay momentos que te definen, que te rompen y te reconstruyen. Para mí, uno de esos momentos fue volver a sentir el viento en la cara a miles de metros de altura. Este vídeo no es solo sobre paracaidismo; es sobre reclamar tu libertad, sobre demostrarte a ti mismo que los barrotes más sólidos son los que construimos en nuestra mente. Cada salto es un recordatorio de que, sin importar la caída, siempre tenemos la capacidad de volver a volar. Es la prueba de que la verdadera discapacidad es rendirse, y yo decidí que ese no sería mi destino.",
  },
  {
    id: "j7jUXQDpF-c",
    title: "Rompiendo Barreras en el Deporte",
    description:
      "El deporte me devolvió la vida, la competición me devolvió el fuego. Antes del accidente, mi energía era inagotable; después, tuve que aprender a canalizarla de una forma completamente nueva. El deporte adaptado no es una versión inferior, es un testamento a la increíble capacidad de adaptación del ser humano. Aquí comparto una parte de ese viaje, de la disciplina, el sudor y la satisfacción de competir al más alto nivel. Es una historia sobre encontrar nuevas pasiones y demostrar que la fuerza no reside únicamente en los músculos, sino en una voluntad inquebrantable de superación.",
  },
  {
    id: "OqKlqd0mJJM",
    title: "La Tecnología como Aliada",
    description:
      "Cuando tu cuerpo se convierte en una jaula, la tecnología puede ser la llave. En este vídeo exploro cómo la domótica, la inteligencia artificial y otras herramientas digitales se convirtieron en una extensión de mi voluntad. No se trata solo de comodidad, sino de autonomía y dignidad. Desde controlar mi entorno con la voz hasta las herramientas que me permitieron escribir 'Evolución', la tecnología ha sido mi gran aliada. Esta es una reflexión sobre cómo la innovación, cuando se usa con propósito, tiene el poder de derribar barreras que antes parecían insuperables, devolviéndonos el control sobre nuestro propio mundo.",
  },
  {
    id: "yKlhUHkXTnA",
    title: "Primera Dominator",
    description:
      "En este vídeo, quiero compartir con vosotros una de las mejores experiencias de mi vida: mi viaje al festival Dominator en 2015. Desde la emoción en el aeropuerto de camino a Eindhoven, sabía que iba a ser legendario. Nada me detiene cuando se trata de mi pasión, y estar allí, frente a ese escenario brutal, fue un sueño cumplido.Viví cada segundo al máximo, rodeado de amigos y de la increíble energía de miles de personas. Pude disfrutar de DJs como Mad Dog y Korsakoff, sintiendo la potencia del hardcore en primera fila. Este vídeo es mi recuerdo personal, la prueba de que no hay barreras para la música. Fue una locura inolvidable, una demostración de pura adrenalina y libertad.",
  },
  {
    id: "zoT4FlVM2iE",
    title: "Masters of Hardcore - Riders of Rampage",
    description:
      "¡Qué noche vivimos en Masters of Hardcore 2016! En este vídeo, os comparto mi experiencia en el festival, donde Miss K8 lideraba la carga como la diosa del hardcore. La energía era palpable mientras nos preparábamos para la victoria, y yo estaba allí, inmerso en la multitud, sintiendo cada beat.El ambiente era increíble, con miles de personas unidas por el amor al hardcore, gritando Masters of Hardcore. Las luces, los visuales y la música crearon una experiencia inolvidable. Era como si el mundo nunca viera venir la fuerza de la visión que estábamos viviendo. Juntos, nos levantamos, juntos era nuestro momento. No hay nada como ser parte de algo tan potente, con los Riders of Rampage a mi alrededor. Este fue el Masters of Hardcore, y yo estuve allí para vivirlo.",
  },
  {
    id: "GpUB3aDvPeE",
    title: "Mi vida, mis adaptaciones",
    description:
      "En este vídeo, os muestro cómo es mi día a día. Para mí, la vida es un reto constante, pero gracias a mi silla de ruedas y a las adaptaciones, puedo moverme y realizar muchas actividades. Me veis preparándome para el día con la ayuda de otros, lo que es fundamental. También me veis utilizando la tecnología para interactuar con mi entorno, abriendo puertas y controlando cosas con un dispositivo de mando.Salgo de casa y me desplazo por las calles con mi silla de ruedas, incluso por la noche, lo que me da una gran independencia. Regreso a casa, entro en mi ascensor adaptado y me relajo viendo un partido de fútbol. Es mi forma de vivir, adaptándome y superando cada día, demostrando que con apoyo y determinación, puedo hacer muchas cosas.",
  },
];

const VideoSection = () => {
  return (
    <section id="experiencias" className="my-24 sm:my-32">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <SectionTitle className="flex items-center justify-center gap-4">
          <FaYoutube className="w-8 h-8 text-red-500" />
          Experiencias
        </SectionTitle>
        <p className="text-lg text-gray-400 mt-4">
          Momentos, reflexiones y saltos al vacío. Aquí comparto fragmentos de
          mi viaje en vídeo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="mb-4 aspect-video overflow-hidden rounded-xl">
              <LiteYouTubeEmbed id={video.id} title={video.title} />
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <FaYoutube className="text-red-500 mr-2" />
              {video.title}
            </h3>
            <p className="text-gray-400">{video.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
