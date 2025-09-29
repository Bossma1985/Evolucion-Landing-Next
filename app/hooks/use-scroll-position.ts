"use client";

import { useState, useEffect } from "react";

const useScrollPosition = (threshold = 10) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(lastKnownScrollPosition > threshold);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};

export default useScrollPosition;
