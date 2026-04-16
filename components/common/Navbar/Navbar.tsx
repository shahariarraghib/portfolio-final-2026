"use client";
import Image from "next/image";
import Menu from "./Side-Menu/SideHome";
import { motion } from "framer-motion";
import { navVarients } from "@/motion/inted";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVarients}
      initial="initial"
      animate="visible"
      aria-label="Primary"
      className="w-full max-w-[100vw] min-h-[52px] sm:min-h-[8vh] flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 md:px-10 lg:px-14 py-2 fixed backdrop-blur-[1.8px] z-50 top-0 left-0 "
    >
      <Link href="/">
        {" "}
        <div className="flex shrink-0 items-center">
          <Image
            height={80}
            width={80}
            src="/images/logo/logo.gif"
            alt="Logo"
            className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 object-cover"
            sizes="40px"
            priority
            fetchPriority="high"
          />
        </div>
      </Link>
      <p className="flex-1 min-w-0 text-center text-base sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-[#202020] uppercase truncate px-1">
        shahariar
      </p>
      <div className="flex w-[100px] sm:w-[110px] shrink-0 items-center justify-end">
        <Menu />
      </div>
    </motion.nav>
  );
}
