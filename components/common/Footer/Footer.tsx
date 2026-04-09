"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import { TfooterItem } from "@constants";
import MaskText from "@/animation/TextMask";
import ContactSection from "@/components/uiComponent/ContactSection";

const Footer = () => {
  const massage = ["Have a project or an idea? "];
  return (
    <section
      className="w-full h-screen bg-[#e1e1e1] relative z-[70]"
      id="contact"
    >
      <div className="flex items-center justify-between flex-col h-full">
        <div className="w-full h-[8vh] " />
        <div className="flex items-center justify-center flex-col space-y-6 w-full h-auto ">
          <div>
            <h1 className="text-[#202020] uppercase leading-none sm:text-[18px] md:text-[60px] text-[25px] font-bold tracking-tight">
              <MaskText>{massage}</MaskText>
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.8 }}
          >
            <p className="text-[25px] text-[#202020] mt-[-20px] tracking-wider">
              Let’s connect!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
          >
            <Link
              href={"mailto:sr.raghib?subject=Portfolio%20Website"}
              className="uppercase text-[25px] text-[#202020] tracking-wider font-semibold"
            >
              sr.raghib@gmail.com
            </Link>
          </motion.div>
        </div>

        <div className="w-full px-4 md:px-12 py-10 border-t border-black/10 bg-[#e1e1e1]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            {/* Left */}
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold text-[#202020]">
                Shahariar Bhuiyan
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Full Stack Web Developer
              </p>
            </div>

            {/* Middle */}
            <div className="flex justify-center items-center">
              <ContactSection />
            </div>

            {/* Right */}
            <div className="flex flex-col items-center md:items-end">
              <p className="text-sm sm:text-base font-medium text-gray-700">
                © {new Date().getFullYear()} Shahariar Bhuiyan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
