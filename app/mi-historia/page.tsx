import Footer from "@/components/landing/footer";
import { PhotoGallery } from "@/components/landing/mi-historia/photo-gallery";
import {
  Timeline,
  TimelineBadge,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@/components/landing/mi-historia/timeline";
import HeaderMiHistoria from "@/components/landing/mi-historia/header-mi-historia";
import { Button } from "@/components/ui/button";
import {
  HeartPulse,
  BookOpen,
  Plane,
  Award,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import VideoSection from "@/components/landing/mi-historia/videos";
import SectionTitle from "@/components/shared/SectionTitle";
import PilaresSection from "@/components/landing/mi-historia/pilares";
import AlgoritmoSection from "@/components/landing/mi-historia/algoritmo";
import CtaFinalSection from "@/components/landing/mi-historia/cta-final";

const MiHistoriaPage = () => {
  return (
    <div className="bg-black text-white">
      <HeaderMiHistoria />
      <main className="container mx-auto px-4 py-20 pt-32">
        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-400 mb-4">
            De la Oscuridad a las Nubes
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Mi vida es un libro abierto que narra una caída y un vuelo. Una
            historia de hierros, dudas y un cielo conquistado. Esta es la forja
            de &quot;Evolución&quot;.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/comprar">Quiero mi ejemplar</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#about">Leer un fragmento</Link>
            </Button>
          </div>
        </section>

        <PhotoGallery />

        {/* TIMELINE */}
        <section id="timeline" className="max-w-3xl mx-auto my-24 sm:my-32">
          <SectionTitle className="text-center mb-16">
            El Viaje de una Vida
          </SectionTitle>
          <Timeline>
            <TimelineItem>
              <TimelineDot icon={User} />
              <TimelineContent>
                <TimelineTitle>Los Años Dorados</TimelineTitle>
                <TimelineDescription>
                  Una vida plena, llena de amigos, fiestas y trabajo. Vivía a
                  200 por hora, sintiéndome invencible, sin saber que una curva
                  inesperada estaba a punto de cambiarlo todo para siempre.
                </TimelineDescription>
                <TimelineTime>Antes de 2003</TimelineTime>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot icon={HeartPulse} />
              <TimelineContent>
                <TimelineTitle>El Silencio y el Despertar</TimelineTitle>
                <TimelineDescription>
                  Un accidente de coche. Un mes en coma. Al despertar, mi mundo
                  se había reducido a una cama de hospital y un diagnóstico:
                  tetraplejia. La oscuridad se cernió sobre mí.
                </TimelineDescription>
                <TimelineBadge>El Punto de Inflexión</TimelineBadge>
                <TimelineTime>2003</TimelineTime>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot icon={Sparkles} />
              <TimelineContent>
                <TimelineTitle>La Chispa en la Oscuridad</TimelineTitle>
                <TimelineDescription>
                  En la UCI, rodeado de máquinas y desesperanza, una pequeña
                  decisión lo cambió todo. Elegí vivir. Elegí luchar. Empecé a
                  ver la rehabilitación no como una condena, sino como mi
                </TimelineDescription>
                <TimelineTime>2003 - 2005</TimelineTime>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot icon={Plane} />
              <TimelineContent>
                <TimelineTitle>Conquistando el Cielo</TimelineTitle>
                <TimelineDescription>
                  El deporte adaptado me devolvió la vida y el paracaidismo me
                  enseñó a volar de nuevo. Cada salto era un grito de libertad,
                  una prueba de que los únicos límites están en la mente.
                </TimelineDescription>
                <TimelineBadge>Nuevos Horizontes</TimelineBadge>
                <TimelineTime>2010 - Actualidad</TimelineTime>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot icon={Award} />
              <TimelineContent>
                <TimelineTitle>Reconocimiento y Propósito</TimelineTitle>
                <TimelineDescription>
                  Mi historia empezó a inspirar a otros. Llegaron los premios,
                  las charlas, el reconocimiento... pero el mayor logro fue
                  encontrar un propósito: compartir mi experiencia.
                </TimelineDescription>
                <TimelineTime>2015 - Actualidad</TimelineTime>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineDot icon={BookOpen} />
              <TimelineContent>
                <TimelineTitle>Nace &quot;Evolución&quot;</TimelineTitle>
                <TimelineDescription>
                  Todas esas vivencias, batallas y victorias necesitaban un
                  lugar donde quedarse para siempre. Así nació el libro. Un
                  legado de resiliencia y la prueba de que, incluso desde el
                  suelo, se puede volver a tocar el cielo.
                </TimelineDescription>
                <TimelineBadge>El Legado</TimelineBadge>
                <TimelineTime>2024</TimelineTime>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </section>

        {/* POR QUÉ EL LIBRO */}
        <section
          id="legado"
          className="text-center bg-gray-900/50 rounded-2xl p-8 sm:p-16 my-24 sm:my-32 max-w-4xl mx-auto"
        >
          <SectionTitle className="mb-6">
            ¿Por Qué Escribí &quot;Evolución&quot;?
          </SectionTitle>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            No escribí este libro para contar una tragedia. Lo escribí para
            compartir una victoria: la victoria de la voluntad sobre la
            adversidad. Es un manual para quien busca una razón para seguir, una
            chispa de esperanza en la oscuridad. Es mi forma de decirte:
            &quot;Si yo pude, tú también puedes&quot;.
          </p>
          <Button asChild size="lg">
            <Link href="/comprar">Descubre tu propia evolución</Link>
          </Button>
        </section>

        <PilaresSection />

        <AlgoritmoSection />

        <VideoSection />

        <CtaFinalSection />
      </main>
      <Footer />
    </div>
  );
};

export default MiHistoriaPage;
