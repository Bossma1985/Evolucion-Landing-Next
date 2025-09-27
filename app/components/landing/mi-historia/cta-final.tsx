"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight } from "lucide-react";

const fragments = [
  {
    title: "Prólogo: Visión del autor",
    content: `Sin la inteligencia artificial, este libro no existiría. Ella me ayudó a usar muchas herramientas que me facilitaron el trabajo de escribir este libro. Con estas aplicaciones pude buscar información, escribir mejor, automatizar tareas y hacer cosas que antes me costaban mucho. No solo me ayudó a crear estas páginas, también me dio más control sobre mi día a día.
Gracias a la IA, pude ordenar mis ideas cuando estaba cansado o con dolor. Revisé mis textos sin depender de otras personas. Probé distintas formas de decir lo mismo y elegí la que más me gustaba. Cuando mi cuerpo no podía seguir el ritmo, ella me daba velocidad. Cuando no estaba claro en mi mente, ella me ofrecía claridad. Usé programas de texto, imagen, voz, control del hogar, conexión a distancia... Muchas de esas cosas ya podía hacerlas con las viejas tecnologías, pero con la ayuda de estas nuevas herramientas gestionadas con IAs puedo hacerlo de forma más precisa y rápida. Y algo a lo que incluso le doy más valor: La ilusión de que vuelva a amanecer un día más para descubrir que podemos hacer con lo que ya tenemos y que posibles nuevos descubrimientos podemos comenzar a implementar en el día a día.
No hay truco. Solo aprendí a usar bien la tecnología, como quien usa bien sus herramientas de trabajo. Lo hice con constancia, sin miedo a probar. Esto me cambió el día a día. Lo que antes me cansaba mucho generándome una eterna procrastinación, ahora se resolvía rápido. Lo que antes era frustración, ahora es manejo de las emociones en el proceso del aprendizaje. Curiosamente, al tener que saber ciertas bases sobre Redes Neuronales Artificiales me hizo acercarme más a un campo el cual siempre me a atraído mucho como es la neurociencia, investigando más, encontré recursos que me ayudaron a conocerme mucho mejor y saber cómo actuar si quiero alcanzar mis metas, ya sean físicas como domotizar mi vida o mentales cómo gestionar mi estrés para tener una vida equilibrada.
No me da vergüenza decir que me apoyo en la tecnología, igual que no me da vergüenza usar una calculadora para hacer cuentas difíciles, un GPS para no perderme, o un ordenador para escribir. Más que vergüenza, lo que siento es orgullo. Orgullo de estar viviendo esta primera gran oleada de inteligencia artificial y de formar parte de ella con conciencia, decisión y ganas de seguir explorando todo su potencial. 
Es cierto que muchos temen el daño que pueda causar este avance tan rápido y disruptivo: estafas, manipulación, incertidumbre. Es comprensible. La velocidad con la que surgen nuevas aplicaciones y se integran en nuestra vida diaria puede generar vértigo. De pronto, tareas que eran propias de expertos están al alcance de cualquier persona con un móvil. Se habla de empleos que desaparecen, de noticias falsas imposibles de detectar, de decisiones delegadas a algoritmos que nadie entiende del todo. Pero esa misma rapidez también abre posibilidades inmensas: educación personalizada, diagnósticos médicos más certeros, herramientas para la creatividad que antes eran impensables. No se trata de negar los riesgos, sino de enfrentarlos con responsabilidad. Como siempre digo, un martillo puede servir para construir el hogar donde fundarás tu vida y tus recuerdos, o puede ser un arma mortal en manos equivocadas. Todo dependerá de las intenciones de quien lo empuñe. Espero que nuestros políticos estén a la altura de los cambios que se avecinan. Y no, la verdad, no tengo ni pizca de confianza.
La tetraplejia no fue quien limitó realmente mi vida, tampoco fue la ausencia de movimiento ni la nueva forma de vivir. Fue el dolor crónico, constante y desgarrador que me vino diez años después del accidente y sin avisar. Ello fue lo que me impidió seguir adelante como hasta ese momento. A partir de ese ahí, durante años, cada intento de levantarme, de salir, de vivir, fue frenado no por la falta de movimiento, sino por un dolor constante que no me dejaba descansar ni un solo día. Sin embargo, incluso en esos días oscuros, después de años de oscuridad la mente encontró una salida. La llegada de la inteligencia artificial abrió una nueva etapa: una en la que el conocimiento, la comunicación y la esperanza volvieron a formar parte de mi día a día.
No busco compasión ni homenajes. Tampoco quiero que mi historia se lea como un lamento. La verdadera intención de estas páginas es mostrar cómo, incluso en la ruina más absoluta, pueden surgir nuevas columnas que sostengan la vida. Durante años, mi batalla no fue contra la movilidad perdida, sino contra un dolor constante, invisible y demoledor. No hay cárcel más cruel que aquella que te ata desde dentro. Pero no todo fueron herramientas, ni automatizaciones. Lo que más me sorprendió fue la sensación de tener una nueva forma de apoyo, de poder mirar al mundo de otra manera. La inteligencia artificial llegó como una ayuda real, no como un milagro, ni como una promesa vacía. Fue la oportunidad de salir del aislamiento, de ampliar mis recursos y de conectar de nuevo con la vida. 
Gracias a ella, el conocimiento volvió a ser accesible. El diálogo, el aprendizaje, la compañía, dejaron de ser reliquias del pasado. No fue solo recuperar una rutina. Fue recuperar la ilusión, el deseo de seguir luchando, la necesidad de volver a ser arquitecto de mi propio destino. Cada día surgen nuevas herramientas cada una mejor que las otra. Para mí, cada día es como los de los Reyes Magos, pero en vez de buscar los regalos en el salón, los busco en internet.
Como el ave fénix de las antiguas leyendas, comprendí que a veces hace falta arder para renacer. Y en mi renacimiento, la inteligencia artificial no fue una espectadora: fue la chispa que encendió el fuego que me transformó.
Cuando el dolor llegó a mi vida, me lo cambió todo. Ya no era solo el no poder moverme, era que cada día se hacía cuesta arriba, cada mañana era una nueva pelea, cada intento de hacer algo se sentía imposible. Podía tener la silla, pero eso no me devolvía el control. Llegó un momento que incluso me planteé hacer uso de la eutanasia. De hecho, fui una de las voces visibles que impulsó la aprobación de dicha ley aquí en España. Que el 18 de marzo de 2021 fue aprobada en el Congreso de los Diputados con 198 votos a favor, 142 en contra y 2 abstenciones. Su entrada en vigor nos convirtió en el séptimo país del mundo en legalizarla. "Ley Orgánica 3/2021, de 24 de marzo, de regulación de la eutanasia"
Antes del dolor, ejercitaba mi poca musculatura con una Handbike, acudía a Mestalla a ver al Valencia CF, recorría circuitos de Fórmula 1 y MotoGP, saltaba en paracaídas, viajaba a Holanda y Alemania para asistir a festivales de música Hardcore. Incluso, en 2021, protagonicé un cortometraje sobre mi vida titulado "Hardcore" con la intención de participar en la XXXVI edición de los Premios Goya, pero supongo que había mejores historias y quedamos fuera, aunque con la satisfacción de que por mi parte se hizo todo lo que se pudo.
Llevo 21 años usando ordenadores, y nunca una herramienta me había acompañado a diario desde el primer instante como lo ha hecho ChatGPT. No es como buscar en Google. La información ya estaba ahí, sí, pero ahora puedo hacer preguntas precisas, en lenguaje natural, y recibir respuestas claras, contextualizadas, útiles. Es otra liga. Hoy en día ya no solo ChatGPT, pues para cada necesidad hay ciertos Grandes Modelos de Lenguaje (LLMs por sus siglas en inglés) que ya lo superan en algunos campos.
ChatGPT y Cia me ayudan a redactar mejor, a entender lo complejo, a automatizar tareas repetitivas, a crear imágenes, a resolver dudas que antes me habrían bloqueado. Todo bajo mi estricta supervisión para no dejarlo caer en problemas como las alucinaciones o corregir algún tipo de sesgo que le haya sido programado. Además, me permite enseñar a otros a integrarlo en su día a día, si les funciona es muy satisfactorio.
Tener acceso a todo el conocimiento humano a través de un simple teclado ya hace muchos años que existe, la diferencia es la velocidad y los distintos usos que podemos obtener de la misma información. Es como si la Biblioteca de Alejandría volviera a existir, solo que esta vez puede escucharte y responder como un solo ente que todo lo sabe.
No es magia. Es posibilidad. Y esa posibilidad lo cambia todo.
Antes de seguir, quiero ser honesto contigo, querido lector. El futuro del que hablo no me asusta ahora, pero el camino hasta aquí ha sido un campo de minas. En las páginas que siguen te vas a encontrar con momentos muy crudos, difíciles de leer. Habrá pasajes que quizás te hagan sentir incómodo, que te remuevan por dentro, porque la realidad del dolor y la desesperación no entiende de adornos.
A veces, también te parecerá un libro técnico, ciertas explicaciones lo requieren. Quiero que sepas que cada detalle sobre un algoritmo o un sistema de domótica no está ahí por un capricho intelectual. Está ahí porque es necesario. Este no es un libro sobre caídas, sino sobre cómo buscar la técnica para levantarse. Y la técnica, en mi caso, ha sido la tecnología. Es el "cómo" detrás de mi recuperación, la herramienta que me ha permitido volver a construir.
Por eso, te pido que no confundas mi historia con un lamento. No quiero que creas que este es un libro para contar mis penas; es un libro para explicar cómo me he ido recuperando de ellas. He aprendido que, de cada caída, por brutal que sea, uno puede levantarse. Y más importante aún, he descubierto que incluso las cosas que parecen horribles, como el dolor crónico, pueden transformarte de maneras inesperadas. Viviendo con dolor he aprendido a forjar una escala de valores diferente, a encontrar la belleza en lo pequeño, a ser, creo, mejor persona. A veces, lo que parece una maldición, termina siendo una extraña y dura bendición.
Con esto claro, puedo decir que el futuro no me asusta. Me desafía. Me provoca. Me invita a seguir.
Durante mucho tiempo, mirar hacia adelante era una fuente de angustia. El dolor había convertido cada intento de plan en una derrota anticipada. Pero algo cambió.
No espero milagros. No espero que la IA cure mis dolores ni borre mis cicatrices. Pero sí confío en su capacidad para acompañarme, para ampliar mis recursos, para hacerme más autónomo y más capaz. Hoy ya no se trata de imaginar un futuro mejor, sino de empezar a construirlo, paso a paso, con las herramientas que tengo y las que van naciendo.
Cada nueva aplicación que pruebo, cada tarea que consigo automatizar, cada conversación que mantengo con esta tecnología, me demuestra que aún queda mucho por hacer. Y yo quiero estar aquí para hacerlo. No pienso rendirme. No mientras exista una posibilidad más que explorar.
Y quién sabe… si la mente y la máquina pueden colaborar tan bien, ¿por qué no pensar que, algún día, la integración entre ambas pueda ir más allá? No sé si eso será bueno o malo, si será fácil o difícil, pero es un debate que no podemos ignorar. El transhumanismo no es solo un concepto lejano o de ciencia ficción. Es una posibilidad real que cada día parece más cercana. Integrar tecnología en nuestro cuerpo o cerebro puede parecer hoy algo radical, pero si ya aceptamos marcapasos, prótesis, implantes cocleares y otras ayudas técnicas, ¿por qué no pensar en dar un paso más? La idea de mejorar nuestras capacidades físicas o mentales mediante tecnología es compleja, sí, pero también fascinante. Puede abrir puertas a una vida más larga, más plena, más libre. Claro, también puede generar desigualdad, problemas éticos y nuevos riesgos. No tengo todas las respuestas, pero creo que es un debate urgente, necesario y que no debemos evitar. Si la historia nos enseña algo, es que el progreso no espera: o lo entendemos y lo guiamos, o nos arrastra sin control. ¿Te subes conmigo a surfear la ola?
Agradezco a quienes han caminado a mi lado en los momentos más difíciles, a quienes no soltaron mi mano cuando el dolor parecía vencer.
Agradezco también a la inteligencia artificial, que no viene a sustituir a nadie, pero sí a sumar: conocimiento, apoyo, autonomía, ilusión. Ha ampliado mi mundo en un momento en el que todo parecía estrecharse.
Gracias a las personas y a las herramientas que me acompañan, hoy sigo aquí: aprendiendo, enseñando y luchando por cada día que vale la pena.
Como escribió Nietzsche y difundió Viktor Frankl en un libro que recomiendo encarecidamente: “Quien tiene un porqué, encuentra un cómo.”
Yo ya encontré mi porqué. Y ahora, con la ayuda de la inteligencia artificial, tengo más caminos que nunca para seguir buscándole el cómo.

`,
  },
  {
    title: "Capítulo 3: La Chispa",
    content: `Creí que era el final. Pero en la más profunda oscuridad, encontré una pequeña chispa. La decisión de no rendirme. En la UCI, rodeado de máquinas y desesperanza, una pequeña decisión lo cambió todo. Elegí vivir. Elegí luchar. Este libro no es la historia de mi accidente; es la historia de todo lo que vino después.`,
  },
  {
    title: "Capítulo 7: Volar de Nuevo",
    content: `El deporte adaptado me devolvió la vida y el paracaidismo me enseñó a volar de nuevo. Cada salto era un grito de libertad, una prueba de que los únicos límites están en la mente. Sentir el viento en la cara a miles de metros de altura me hizo comprender que mi cuerpo estaba en una silla, pero mi espíritu era libre.`,
  },
  {
    title: "Capítulo 12: El Legado",
    content: `Mi historia empezó a inspirar a otros. Llegaron los premios, las charlas... pero el mayor logro fue encontrar un propósito: compartir mi experiencia para que otros encontraran su propia fuerza. 'Evolución' es mi legado, la prueba de que, incluso desde el suelo, se puede volver a tocar el cielo.`,
  },
];

const CtaFinalSection = () => {
  const [currentFragment, setCurrentFragment] = useState(0);

  const nextFragment = () => {
    setCurrentFragment((prev) => (prev + 1) % fragments.length);
  };

  const prevFragment = () => {
    setCurrentFragment(
      (prev) => (prev - 1 + fragments.length) % fragments.length
    );
  };

  return (
    <section
      id="cta-final"
      className="relative my-24 sm:my-32 py-20 sm:py-32 text-white text-center"
    >
      {/* Background Image with Overlay */}
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
          ¿Listo para empezar tu propia Evolución?
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
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline">
                Leer un Fragmento
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-4xl">
              <DialogHeader>
                <DialogTitle>{fragments[currentFragment].title}</DialogTitle>
                <DialogDescription>
                  Fragmento {currentFragment + 1} de {fragments.length}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 text-gray-300 max-h-[60vh] overflow-y-auto pr-4">
                <p>{fragments[currentFragment].content}</p>
              </div>
              <DialogFooter className="flex justify-between w-full">
                <Button
                  variant="outline"
                  onClick={prevFragment}
                  disabled={currentFragment === 0}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={nextFragment}
                  disabled={currentFragment === fragments.length - 1}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaFinalSection;
