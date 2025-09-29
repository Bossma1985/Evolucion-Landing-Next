"use client";

import { useCallback } from "react";

const useSmoothScroll = (offset = 80) => {
  const scrollToElement = useCallback(
    (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    [offset]
  );

  return scrollToElement;
};

export default useSmoothScroll;
