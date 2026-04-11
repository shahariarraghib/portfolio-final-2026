"use client";
import Nav from "./Nav/Nav";
import { useState, useEffect } from "react";
import Button from "./Button/Button";
import { AnimatePresence, motion } from "framer-motion";
import { menu } from "@/motion/inted";

export default function SideHome() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed right-2 top-2 z-[60] sm:right-4 sm:top-3 md:right-8 md:top-4">
      <motion.div
        className="bg-[#d6d5d5] rounded-[25px] relative max-h-[100dvh] max-w-[calc(100vw-1rem)] overflow-hidden overscroll-none shadow-lg"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && (
            <Nav
              toggleMenu={() => {
                setIsActive(!isActive);
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
