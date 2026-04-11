"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import menuData from "@/content/menuData";
import { TnavProps } from "@/types/menu";
import { perspective, slideIn } from "@/motion/inted";
import socialData from "@/content/socialData";

export default function Nav({ toggleMenu }: TnavProps) {
  return (
    <div className="flex max-h-[min(100dvh-1rem,100%)] flex-col justify-between overflow-hidden overscroll-none px-4 py-8 sm:px-8 sm:py-10 sm:pr-16 sm:pl-6 md:pr-20 md:pl-10 w-full max-w-[min(100vw,32rem)]">
      <div className="flex gap-[15px] flex-col">
        {menuData.map((link, i) => {
          const { title, path } = link;
          return (
            <div
              key={`b_${i}`}
              className="perspective-120 perspective-origin-bottom"
            >
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link
                  onClick={toggleMenu}
                  href={path}
                  className="text-black text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[2.875rem] break-words"
                >
                  {title}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>

      <motion.div className="flex flex-wrap mt-[40px]">
        {socialData.map((item, index) => {
          return (
            <motion.div
              className="w-[50%] mt-[5px] text-[16px]"
              variants={slideIn}
              custom={index}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${index}`}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
                href={item.href}
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#202020]"
                aria-label={`${item.name} (opens in a new tab)`}
              >
                <span className="uppercase">{item.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
