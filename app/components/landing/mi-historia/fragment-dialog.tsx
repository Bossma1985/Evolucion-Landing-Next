"use client";

import { useState, useCallback, useEffect } from "react";
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
import { fragments } from "@/lib/constants";

interface FragmentDialogProps {
  children: React.ReactNode;
}

const FragmentDialog: React.FC<FragmentDialogProps> = ({ children }) => {
  const [currentFragment, setCurrentFragment] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextFragment = useCallback(() => {
    setCurrentFragment((prev) =>
      prev < fragments.length - 1 ? prev + 1 : prev
    );
  }, []);

  const prevFragment = useCallback(() => {
    setCurrentFragment((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowRight") {
        nextFragment();
      } else if (e.key === "ArrowLeft") {
        prevFragment();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextFragment, prevFragment]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setCurrentFragment(0);
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
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
            aria-label="Fragmento anterior"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={nextFragment}
            disabled={currentFragment === fragments.length - 1}
            aria-label="Siguiente fragmento"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FragmentDialog;
