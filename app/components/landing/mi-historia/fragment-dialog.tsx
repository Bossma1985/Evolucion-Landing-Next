"use client";

import { useState } from "react";
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
    title: "Capítulo 1: Primeros pasos",
    content: `Pero 4º de ESO fue otra historia. La simple casualidad de cambiar de clase y de compañeros lo alteró todo. Los que me habían hecho la vida imposible seguían allí, pero su poder se había diluido en un nuevo entorno. Empecé a actuar más maduramente, empecé a juntarme con otras personas, algunas de las cuales siguen siendo mis mejores amigos a día de hoy. No eran héroes que vinieran a rescatarme, eran algo mucho más importante: gente normal que me trataba con normalidad. Quedábamos por la tarde, íbamos a nuestros sitios, hacíamos el tonto... y poco a poco, sin darme cuenta, la coraza que había construido a mi alrededor empezó a agrietarse. Empezaron a llamarme por teléfono para salir, a incluirme en los planes. Dejé de ser el paria para convertirme en uno más del grupo.
Esa confianza fue como un combustible que prendió una mecha que llevaba mucho tiempo apagada. Descubrí, aunque tarde, que no hay nada mejor que creer en uno mismo para que los demás dejen de joderte la vida, y esa idea se me quedó bien integrada en el ADN. Comprendí que no debía ser como la gente esperaba, sino como a mí me diera la gana ser, sin miedos al qué dirán o cualquier inseguridad típica de la adolescencia como la necesidad de sentirte parte de un algo muy superior a tu pequeño “yo”. Y fue entonces cuando me sentí querido de verdad: cuando me quise yo. Recuerdo plantarle cara a varias personas que intentaron seguir con la vieja dinámica. Les dije, con una calma que ni yo mismo sabía que tenía: "No soy el mismo Botella que conociste el año pasado, así que o paras, o vamos a tener problemas. Y aunque los tenga yo también, te aseguro que no me voy a quedar callado". Ahí cambió todo. Dejé de ser una víctima y empecé a ser yo mismo. Mi vida se disparó.
Ese año cambié algunas amistades y me acerqué a muchos de los que hoy siguen siendo mis mejores amigos. Nuestro primer cuartel general, nuestro refugio lejos de la mirada de los adultos, era una granja abandonada a las afueras del pueblo, junto al Calvario. Allí pasábamos horas y horas, sintiendo que aquel lugar nos pertenecía. Ahora es una bonita residencia de ancianos, pero, sin darme cuenta, aún la llamo la granja. Fue allí donde empecé a coquetear de verdad con las drogas. Supongo que anduve por el camino habitual, empiezas con las sustancias más "blandas" como los porros y el alcohol y, si te gusta la experiencia, vas subiendo escalones. Así, lo primero que entró en mi vida fueron esos canutitos de la risa que tan buenos momentos nos daban de risas interminables. Recuerdo que comprábamos entre varias personas una placa de costo y nos escondíamos por los campos para fumárnosla, luego llegó la Marihuana, única droga que mientras escribo este libro aun dependo de ella. En casa, mientras tanto, mis padres ni se imaginaban que pudiera estar ni siquiera fumando tabaco; para ellos, viendo que en las clases no iba mal del todo ese año, todo iba sobre ruedas.
Pero venía del internado con poca información de lo que me iba a encontrar en la vida real, y el cambio fue tan grande que me dejé engatusar por los placeres y vicios que se me habían vetado durante tantos años. A mis dieciséis años, con solo el graduado de 4º de ESO, las fuerzas de lo prohibido vencieron. Aunque me matriculé en 1º de Bachillerato, prácticamente ya no acudía a las clases; me pasaba las horas en los jardines de los alrededores del centro estudiantil con un grupo de amigos con los que compartía las mismas motivaciones: fumar y disfrutar cada momento.
`,
  },
  {
    title: "Capítulo 2: Cristel",
    content: `Iba paseando con la moto por el pueblo, sin rumbo fijo, buscando a mis amigos, cuando me crucé con un colega. Pero no fue a él a quien vi. En la parte trasera de su moto iba una chica que yo jamás había visto, 
Tenía el pelo castaño y ondulado. Se le hacía un peculiar hoyuelo en la mejilla cuando sonreía y sus ojos denotaban fuego y ganas de vivir. 
Era una misteriosa mujercita que, con una sola mirada, me hizo saltar por los aires. Mi reacción fue automática, un cortocircuito en todo el sistema, un impulso que no pude ni quise controlar. Todo el personaje que me había montado, el del tipo duro de la discoteca, el que controlaba, se desmoronó en un puto segundo. Giré el manillar de mi Suzuki como si la moto tuviera vida propia y me puse a su lado, con el corazón bombeando en mi garganta, a mil por hora, tan fuerte que pensaba que se me iba a salir por la boca.
En ese instante descubrí que a estas edades los flechazos no son tonterías de las películas; son reales, y te golpean como un gancho al hígado. Toda mi supuesta hombría, toda esa fachada que tanto me había costado construir, se vino abajo de un plumazo. Me sentí completamente vulnerable, expuesto. Ya no era el "Botella" de la fiesta, era solo un crío que no podía apartar los ojos de ella. Quería estar con ella, pero no era un simple capricho; era una necesidad física, una urgencia que me quemaba por dentro. Sentí que era algo superior a mí, una fuerza que me empujaba, que me susurraba al oído que aquella chica era importante, que tenía que hacer algo, lo que fuera. No sabía quién era, ni de dónde salía, ni cómo coño lo iba a conseguir, pero a partir de ese momento, todo lo demás se borró. Conocerla se convirtió en mi única meta, en la única misión que importaba en mitad de mi desastrosa vida.
Al principio, admito que fue solo su cara, un flechazo en mitad de la calle. Pero al llegar al lugar donde pararon y empezar a observarla, entendí que había algo mucho más profundo. Era simpática y agradable, siempre riendo, pero lo que de verdad me impactó fue ver cómo se relacionaba con todo el mundo. No le importaba si eras de los populares o de aquellos de los que otros se reían; no juzgaba a nadie. Era una persona sencilla y humilde, pero al mismo tiempo tenía un carácter que ponía a todos en su sitio. Esa mezcla de bondad y fuerza me desarmó por completo. Fue entonces cuando el flechazo se convirtió en una certeza: tenía que ser para mí.
Para entender la situación de Crístel, hay que entender el ambiente de la época. Las problemáticas del "sábado noche" eran una realidad para muchísimos jóvenes. El consumo de drogas de forma recreativa estaba normalizado en el circuito de las discotecas; no era algo de marginados, sino una práctica extendida. El problema de Crístel no era distinto al de tantos otros, con la diferencia de que ella era especialmente joven para estar en ese mundo, lo que la hacía más vulnerable. Se dejó llevar, en parte tentada por la relación que mantenía entonces, pero la culpa no fue solo de una persona, sino de un cóctel de factores: la inexperiencia, la libertad repentina y una juventud que a veces te empuja a correr sin ver el precipicio.
Pronto me enteré de la verdad de su situación, y aquello que desde fuera parecía un noviazgo, era en realidad una historia mucho más oscura y triste. Crístel estaba lidiando con sus propios demonios; las drogas recreativas del fin de semana, como a tantos otros, habían empezado a alterar su vida. Estaba enamorada, o creía estarlo, de un chico del pueblo que se aprovechaba de sus sentimientos. Él no estaba enamorado de ella, sino del dinero que podía sacarle para pagarse sus propios vicios. Lejos de amedrentarme, conocer esa realidad me dio una extraña y rotunda confianza. Yo me veía con mucho más valor, sentía que podía ofrecerle algo genuino, no la mentira en la que estaba atrapada. Sabía que ambos nos movíamos en mundos complicados.
Al principio, ella estaba dividida. La droga la ataba a él, y había días en que desaparecía en ese mundo oscuro, mientras que otros días buscaba mi compañía, nuestro coche, nuestra música. Fue una época de incertidumbre, hasta que nuestro amigo en común, Alberto —el mismo que iba con ella en la moto el día que la conocí—, hizo lo que nadie a esa edad se atreve a hacer. Asustado por la espiral en la que estaban entrando Crístel y el otro chico, tuvo un arranque de madurez y valentía que todavía hoy me cuesta comprender: fue a casa de ambos y habló con sus padres. Les contó el problema que tenían con las drogas y la necesidad de que hicieran algo.
`,
  },
  {
    title: "Capítulo 4: El Poder de la Silla",
    content: `La euforia de la Eurocopa de 2008 me dejó con ganas de más. Pensé que sería divertido tener un ritual, una excusa para ir a Valencia, comer por allí y pasar la tarde. Ir a ver al Valencia a Mestalla parecía el plan perfecto. Sin embargo, cuando pregunté, me di de bruces con la burocracia. La zona accesible para sillas de ruedas estaba completa; ya no cabía ni una aguja. Lo comentaba a menudo con mis amigos, hasta que un día, la persona menos esperada escuchó mis quejas.
Se llama Luis, pero en el pueblo y en el mundo de la pilota valenciana todos le conocen como "Loripi". Su familia y la mía habían sido vecinos de toda la vida, creando un lazo que iba más allá de la amistad. Loripi no era cualquiera; en su época, fue el número uno, el Messi de la pilota valenciana. Él, al oírme, dijo: "Oye, pues yo conozco a una persona que está metido en algún tipo de junta del Valencia CF. A lo mejor puede arreglar algo".
Esa persona era Blas Madrigal. Un hombre de un pueblo cercano a Torrente al que le encantaba la pilota y que, por esa afición, había conocido a Loripi. Cuando Loripi le comentó mi situación, la respuesta de Blas fue inmediata: "Yo para qué estoy? Tranquilo, que Rafa tendrá su pase. Pero me gustaría ir a conocerlo". Dicho y hecho. Nunca supimos de dónde provenía su poder dentro del club, pero desde luego, lo tenía.
Y así fue. Un día, llegaron a mi casa Loripi y Blas. Blas era una de esas personas maduras con las que da gusto hablar, lleno de anécdotas. Llegó con un detallismo increíble: un escudo del Valencia, algunas firmas de jugadores y, por supuesto, mi pase de temporada. Era imposible. Mis amigos no se lo creían. "¿Cómo lo has conseguido?", me preguntaban. Yo bromeaba: "El poder de la silla, ¿qué queréis que os diga?". Pero la verdad es que fue gracias a la magia de Loripi, que echó mano de su cartera de contactos, y a la inmensa generosidad de Blas.
Llegó el gran día. Yo nunca había estado en un estadio de fútbol. Como era costumbre, íbamos apurados de tiempo, perdidos por Valencia buscando el campo. "¿Dónde está Mestalla?". "Dirección contraria, subid por allá". De repente, lo vi. "¡Joan, que está aquí!", le grité a mi amigo. Aparcamos en doble fila, como todo el mundo, y nos apresuramos a entrar. El partido ya había comenzado.
Cuando por fin llegamos a la puerta de acceso, escuchaba el rugido de la gente dentro. Nosotros, los de las sillas de ruedas, entrábamos por un córner, a nivel del césped. En el momento en que crucé esa puerta, el mundo cambió. Pasé de un pasillo silencioso a una arena con 45.000 personas gritando al unísono. El impacto fue brutal. Mirara donde mirara, veía gradas que se levantaban hacia el cielo, una pared humana llena de gente de pie, chillando, agitando banderas. Me sentí exactamente como un gladiador entrando en la arena del Coliseo, con el clamor de la multitud golpeándote el pecho. Pensé: "Madre mía, ¿cómo tiene que sentirse un jugador cuando cantan su nombre?".
Ese primer partido apenas vi el fútbol. Estaba fascinado por el entorno: la gente, los banquillos, el ambiente... Me interesaba más lo que pasaba alrededor que el partido en sí. Aquella primera vez se convirtió en una rutina maravillosa que duró cinco años. Vi partidos de Champions, de UEFA, de Liga... entre semana, por la mañana, por la noche. Blas, incluso, vino a verme varias veces al campo para asegurarse de que estaba a gusto en el sitio que me había conseguido. Siempre le estaré agradecido, a él y a Loripi, por ese regalo.
Íbamos siempre, cada vez que el Valencia jugaba en casa. Nos preparábamos, aparcábamos fácil cerquita, veíamos el fútbol y volvíamos a casa. Se convirtió en una parte feliz y constante de mi vida. Pero esa rutina, como tantas otras cosas que había ido conquistando, tenía los días contados. El dolor crónico empezó a manifestarse, a machacar mi vida poco a poco, obligándome a cancelar salidas y a abandonar las pasiones que tanto me había costado recuperar. El dolor, silenciosamente, me estaba arrebatando las ganas de vivir.
`,
  },
];

interface FragmentDialogProps {
  children: React.ReactNode;
}

const FragmentDialog: React.FC<FragmentDialogProps> = ({ children }) => {
  const [currentFragment, setCurrentFragment] = useState(0);

  const nextFragment = () => {
    setCurrentFragment((prev) => {
      if (prev === fragments.length - 1) return prev;
      return prev + 1;
    });
  };

  const prevFragment = () => {
    setCurrentFragment((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  return (
    <Dialog onOpenChange={() => setCurrentFragment(0)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
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
  );
};

export default FragmentDialog;
