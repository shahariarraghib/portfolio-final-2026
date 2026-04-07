"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
