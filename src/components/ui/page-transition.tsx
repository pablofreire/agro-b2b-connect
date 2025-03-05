
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  location?: string;
}

const PageTransition = ({ children, location }: PageTransitionProps) => {
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // Skip animation on first render
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

  const variants = {
    initial: { 
      opacity: isFirstRender ? 1 : 0,
      y: isFirstRender ? 0 : 10,
    },
    in: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    out: { 
      opacity: 0, 
      y: 10,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial="initial"
        animate="in"
        exit="out"
        variants={variants}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export { PageTransition };
