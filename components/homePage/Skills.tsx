"use client";
import React from "react";
import { motion } from "framer-motion";
import skillsData from "@/content/skillsData";
import SkillsDesign from "../uiComponent/SkillsDesign";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full max-w-[100vw] min-w-0 padding-x py-12 sm:py-16 md:py-24 lg:py-[100px] bg-[#e1e1e1] px-4 sm:px-6 md:px-10 lg:px-12.5 scroll-mt-[10vh]"
    >
      <div className="flex flex-col justify-center items-center h-full gap-[20px]">
        <div className="w-full flex justify-start mb-0 md:mb-10">
          <h2 className="text-[#202020] uppercase leading-none font-bold tracking-tight overflow-hidden text-[clamp(1.25rem,4vw,3.75rem)]">
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
          </h2>
        </div>
        <div className="w-full">
          <div className="w-full min-w-0 border-[0.2px] border-black/10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
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
