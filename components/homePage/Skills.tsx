"use client";
import React from "react";
import { motion } from "framer-motion";
import skillsData from "@/content/skillsData";
import SkillsDesign from "../uiComponent/SkillsDesign";

const Skills = () => {
  return (
    <div className="w-full padding-x py-[100px] bg-[#e1e1e1] px-4 md:px-12.5">
      <div className="flex flex-col justify-center items-center h-full gap-[20px]">
        <div className="w-full flex justify-start mb-0 md:mb-10">
          <h1 className="text-[#202020] uppercase leading-none sm:text-[18px] md:text-[60px] text-[25px] font-bold tracking-tight overflow-hidden">
            {"my skills".split("").map((item: string, i: number) => (
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="inline-block"
                key={i}
              >
                {item}
              </motion.span>
            ))}
          </h1>
        </div>
        <div className="w-full">
          <div className="w-full border-[0.2px] border-black/10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-8 xl:grid-cols-8 xxl:grid-cols-2">
            {skillsData.map((items, index) => (
              <div key={index} className="w-full">
                <div className="w-full">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full border-[0.2px] border-black/10"
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: index * 0.01,
                    }}
                  >
                    <SkillsDesign Icon={items.Icon} />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
