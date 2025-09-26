import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={cn(
        "text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-400",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
