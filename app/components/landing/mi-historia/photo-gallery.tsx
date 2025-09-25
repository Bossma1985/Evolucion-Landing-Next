"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const photos = [
  {
    src: "/imagenes/carrusel/paraca.JPG",
    alt: "Rafa Botella saltando en paracaídas",
    rotation: "rotate-2",
  },
  {
    src: "/imagenes/autor/yo_pc.jpg",
    alt: "Retrato de Rafa Botella",
    rotation: "-rotate-2",
  },
  {
    src: "/imagenes/carrusel/dominator.jpg",
    alt: "Rafa Botella en un evento",
    rotation: "rotate-2",
  },
  {
    src: "/imagenes/carrusel/cumplefe.JPG",
    alt: "Rafa Botella con amigos",
    rotation: "rotate-2",
  },
  {
    src: "/imagenes/carrusel/gladio.jpg",
    alt: "Rafa Botella entrenando",
    rotation: "-rotate-2",
  },
];

export const PhotoGallery = () => {
  return (
    <div className="my-16 sm:my-24">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            className={cn(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-900/5 sm:w-72 sm:rounded-2xl",
              photo.rotation
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
