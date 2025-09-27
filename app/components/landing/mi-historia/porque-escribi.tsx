"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PorqueEscribiSection = () => {
  return (
    <section
      id="legado"
      className="text-center bg-gray-900/50 rounded-2xl p-8 sm:p-16 my-24 sm:my-32 max-w-4xl mx-auto"
    >
      <SectionTitle className="mb-6">
        ¿Por Qué Escribí &quot;Evolución&quot;?
      </SectionTitle>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Después de mi accidente, mi vida cambió para siempre. Lo que en un
        principio parecía el final de todo lo que conocía, se convirtió en el
        inicio de un viaje de resiliencia y reinvención personal. En estas
        páginas comparto, en primera persona, mi historia de superación y
        evolución: mis luchas físicas y emocionales, los momentos de oscuridad y
        también las pequeñas victorias que me devolvieron la esperanza. Este
        libro es mi testimonio más honesto y crudo. Hablo sin filtros de lo que
        significa vivir con una lesión medular, de los retos diarios, de la
        aceptación y la adaptación que he tenido que aprender a fuerza de
        tropiezos. Pero también hablo de la determinación, de cómo descubrí un
        nuevo propósito y una nueva identidad en medio de la adversidad. No ha
        sido un camino en solitario. El amor, la amistad y el apoyo de mi
        familia me han sostenido cuando pensé que no podría más. Crístel, con su
        afecto profundo y su compañía incondicional, ha sido la luz en mis
        momentos más oscuros. Nuestra relación se convirtió en un recordatorio
        de que, incluso cuando el cuerpo parece limitado, el amor es capaz de
        derribar cualquier barrera. Hoy puedo decir que este viaje me enseñó que
        siempre hay espacio para la transformación, para el cambio y para la
        felicidad, incluso en circunstancias que parecen desesperanzadoras.
        Comparto estas páginas para inspirar a quienes atraviesan sus propias
        batallas, y para demostrar que, pese a todo, la vida siempre ofrece
        razones para luchar, reinventarse y seguir adelante.
      </p>
      <Button asChild size="lg">
        <Link href="/comprar">Descubre tu propia evolución</Link>
      </Button>
    </section>
  );
};

export default PorqueEscribiSection;
