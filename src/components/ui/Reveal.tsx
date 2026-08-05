import { type ReactNode } from "react";
import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  threshold = 0.1,
}: {
  children: ReactNode;
  delay?: number;
  threshold?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px", amount: threshold }}
      transition={{
        duration: 0.8,
        delay: delay / 1000,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom smooth easing
      }}
    >
      {children}
    </motion.div>
  );
}

