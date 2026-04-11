"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import MaskText from "@/animation/TextMask";

import socialData from "@/content/socialData";

const Footer = () => {
  const massage = ["Have a project or an idea? "];
  const connectHeadingRef = useRef<HTMLParagraphElement>(null);
  const connectInView = useInView(connectHeadingRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px 12% 0px",
  });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section id="contact" className="bg-[#e6e6e6] w-full overflow-hidden">
        {/* Wrapper */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-12.5 py-8 sm:py-10 md:py-16 mt-0 md:mt-24 lg:mt-32">
          <div className="max-w-[100vw]">
            <h2 className="text-[#202020] uppercase leading-[1.05] text-[clamp(0.875rem,3.5vw,1.125rem)] sm:text-[18px] md:text-[clamp(2rem,4vw,3.75rem)] font-bold tracking-tight">
              <MaskText>{massage}</MaskText>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-10 lg:gap-12 mt-6 sm:mt-8 md:mt-10">
            {/* LEFT: Huge Text */}
            <div className="relative w-full min-w-0 flex flex-col gap-6 lg:flex-row lg:flex-nowrap lg:items-start lg:gap-5 xl:gap-6">
              <p
                ref={connectHeadingRef}
                className="-ml-2 font-bold text-[#202020] leading-[0.9] tracking-tight overflow-hidden w-full min-w-0 lg:w-fit lg:shrink-0 m-0
                text-[clamp(2.75rem,14vw,7.5rem)]
                sm:text-[clamp(4rem,18vw,7.5rem)]
                md:text-[clamp(5rem,16vw,7.25rem)]
                lg:text-[clamp(7rem,14vw,11.25rem)]
                xl:text-[clamp(6rem,12vw,9.25rem)]"
              >
                {"Let’s connect!".split("").map((item: string, i: number) => (
                  <motion.span
                    initial={false}
                    animate={
                      reduceMotion
                        ? { y: 0 }
                        : connectInView
                          ? { y: 0 }
                          : { y: "100%" }
                    }
                    transition={{
                      delay: reduceMotion ? 0 : i * 0.1,
                      duration: reduceMotion ? 0 : 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="inline-block will-change-transform [transform:translateZ(0)]"
                    style={{ WebkitBackfaceVisibility: "hidden" }}
                    key={i}
                  >
                    {item === " " ? "\u00A0" : item}
                  </motion.span>
                ))}
              </p>

              <nav
                aria-label="Social links"
                className="shrink-0 text-[10px] sm:text-xs tracking-widest text-[#202020] max-w-full sm:max-w-[min(100%,12rem)] lg:max-w-none lg:pb-[0.08em]"
              >
                <motion.div
                  initial={false}
                  animate={
                    reduceMotion
                      ? { opacity: 1, scale: 1 }
                      : connectInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: reduceMotion ? 0 : 1.5,
                  }}
                >
                  <div className="mt-2 space-y-2">
                    {socialData.map((item, index) => {
                      return (
                        <div key={index} className="">
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
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </nav>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-10 md:gap-16 lg:gap-20 w-full lg:w-auto lg:shrink-0 ">
              <div className="text-[14px] sm:text-md tracking-widest text-black space-y-2 max-w-full">
                <p className="break-words">
                  {" "}
                  © {new Date().getFullYear()} Shahariar Bhuiyan
                </p>

                <p>Full Stack Web Developer</p>

                <address className="pt-2 not-italic space-y-0.5">
                  <p className="break-words">sr.raghib@gmail.com</p>

                  <p>
                    <a
                      href="tel:+33147593456"
                      className="underline-offset-2 hover:underline"
                    >
                      +880 1689-797288
                    </a>
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
