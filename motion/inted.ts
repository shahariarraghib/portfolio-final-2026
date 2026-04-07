import { Variants } from "framer-motion";

// reusable easing (proper tuple টাইপ)
const easeInOut: [number, number, number, number] = [0.76, 0, 0.24, 1];
const easeSmooth: [number, number, number, number] = [0.33, 1, 0.68, 1];
const easeExpo: [number, number, number, number] = [0.215, 0.61, 0.355, 1];


// 🔹 TEXT / GENERAL ANIMATION
export const animation: Variants = {
  initial: {
    y: "100%",
  },
  enter: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.75,
      ease: easeSmooth,
      delay: 0.5,
    },
  }),
};


// 🔹 NAVBAR ANIMATION
export const navVarients: Variants = {
  initial: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 1.3,
      ease: easeInOut,
    },
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 1.3,
      ease: easeInOut,
    },
  },
};


// 🔹 HERO SECTION
export const heroVarients: Variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeInOut,
      delay: 1,
    },
  },
};


// 🔹 SCALE (MENU DOT / CURSOR TYPE)
export const scaleAnimation: Variants = {
  initial: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: easeInOut,
    },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.32, 0, 0.67, 0] as [number, number, number, number],
    },
  },
};


// 🔹 MENU CONTAINER
export const menu: Variants = {
  open: {
    width: "auto",
    height: "auto",
    top: "-10px",
    right: "-10px",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: easeInOut,
    },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: easeInOut,
    },
  },
};


// 🔹 3D PERSPECTIVE MENU ITEMS
export const perspective: Variants = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: easeExpo,
      opacity: {
        duration: 0.35,
      },
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
};


// 🔹 SIMPLE SLIDE IN (LIST / TEXT)
export const slideIn: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: easeExpo,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};