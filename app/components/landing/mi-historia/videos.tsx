"use client";

import { motion } from "framer-motion";
import { Youtube } from "lucide-react";
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
    title: "Conversaciones que Inspiran",
    description:
      "Mi historia no es solo mía; pertenece a todos aquellos que alguna vez se han sentido perdidos, rotos o sin esperanza. En esta charla, abro mi corazón para compartir las lecciones más profundas que he aprendido en mi viaje desde la oscuridad. Hablo sobre la resiliencia no como un don, sino como un músculo que se entrena día a día. Es una conversación honesta sobre el dolor, la aceptación y la búsqueda incansable de un propósito. Mi objetivo es encender una chispa en quien me escucha, recordarles que dentro de cada uno de nosotros reside una fuerza extraordinaria esperando ser descubierta.",
  },
  {
    id: "zoT4FlVM2iE",
    title: "Detrás de las Páginas de 'Evolución'",
    description:
      "Escribir 'Evolución' fue un acto de catarsis y un desafío monumental. En este vídeo, ofrezco una mirada íntima al proceso creativo detrás del libro. No fue solo sentarse a teclear; fue revivir cada momento, desde los más oscuros hasta los más luminosos, y encontrar las palabras exactas para transmitir la esencia de mi viaje. Comparto las herramientas que utilicé, los bloqueos que enfrenté y la motivación que me impulsó a seguir adelante. Es la historia de cómo mis vivencias se transformaron en un legado de tinta y papel, con la esperanza de que sirva como mapa para otros.",
  },
  {
    id: "GpUB3aDvPeE",
    title: "Diario de un Salto al Vacío",
    description:
      "¿Qué se siente al borde del abismo, a punto de dejarte caer? Es una mezcla de miedo primario y una euforia indescriptible. Este vídeo es un diario personal, una crónica de los pensamientos y emociones que recorren mi mente antes, durante y después de un salto. Es un recordatorio de que enfrentar nuestros mayores miedos es lo que nos hace sentir verdaderamente vivos. Cada caída es un renacimiento, una oportunidad para dejar atrás el peso del pasado y abrazar el presente con una intensidad abrumadora. Es mi forma de recordarme que la vida se vive al límite.",
  },
];

const VideoSection = () => {
  return (
    <section className="my-24 sm:my-32">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <SectionTitle className="flex items-center justify-center gap-4">
          <Youtube className="w-10 h-10 text-red-500" />
          Experiencias
        </SectionTitle>
        <p className="text-lg text-gray-400 mt-4">
          Momentos, reflexiones y saltos al vacío. Aquí comparto fragmentos de
          mi viaje en vídeo.
        </p>
      </div>

      <div className="space-y-20">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Columna de Título y Descripción */}
            <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
                {video.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {video.description}
              </p>
            </div>

            {/* Columna de Vídeo */}
            <div
              className={`aspect-video rounded-xl overflow-hidden shadow-2xl ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
