"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import useScrollPosition from "@/hooks/use-scroll-position";

const ScrollToTopButton = () => {
  const isVisible = useScrollPosition(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 z-50"
          aria-label="Volver arriba"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
