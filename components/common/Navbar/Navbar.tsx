"use client";
import Image from "next/image";
import Menu from "./Side-Menu/SideHome";
import { motion } from "framer-motion";
import { navVarients } from "@/motion/inted";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVarients}
      initial="initial"
      animate="visible"
      className="w-full h-[8vh] flex items-center px-[50px] justify-between fixed backdrop-blur-[1.8px] z-99 top-0 left-0"
    >
      <div className="w-[200px]">
        <div>
          <Image
            height={500}
            width={500}
            src="/images/logo/logo.gif"
            alt="Logo"
            className="w-[40px] h-[40px] object-cover"
          />
        </div>
      </div>
      <div className="w-[200px] flex items-center justify-center">
        <h1 className="text-[30px] font-bold tracking-wider text-[#202020] uppercase">
          shahariar
        </h1>
      </div>
      <div className="w-[200px] flex items-center justify-center">
        <Menu />
      </div>
    </motion.nav>
  );
}
