"use client";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import TextMask from "../../animation/TextMask";

const Hero = () => {
  const phares1 = [
    "I am a passionate Full Stack Web Developer with expertise in building modern, scalable, and interactive web applications using technologies such as Next.js, React, Node.js, and MongoDB. I enjoy transforming ideas into user-friendly digital products and collaborating with teams to create efficient and impactful solutions.",
  ];
  const phares2 = [
    "With hands-on experience across both frontend and backend development, I focus on writing clean, maintainable code and continuously improving my problem-solving and communication skills. I am always eager to learn new technologies and contribute to building high-quality web applications that deliver real value to users.",
  ];
  useLayoutEffect(() => {
    const textWrapper = document.querySelector(".ml12");
    if (textWrapper && textWrapper.textContent) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>",
      );
    }

    gsap.timeline().from(".ml12 .letter", {
      opacity: 0,
      stagger: {
        amount: 0.5,
        grid: "auto",
        from: "random",
      },
      delay: 0.5,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to("nav", {
      top: 0,
      ease: "power3.inOut",
      duration: 1,
      delay: 0.5,
    });

    gsap.to(".hero-img", {
      duration: 1,
      delay: 0.5,
      ease: "power4.inOut",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });

    gsap.to(".header .col p", {
      left: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="w-full relative py-[20px] px-4 md:px-13.5 max-w-[100vw] min-w-0">
      {/* <Navbar /> */}
      <div className="w-full flex flex-col gap-[30px] pt-[max(5.5rem,8vh)] sm:pt-[8vh] overflow-hidden">
        <div className="header w-full flex flex-col gap-8 md:flex-row md:gap-[30px] md:justify-between md:items-start min-w-0">
          <div className="col min-w-0 md:flex-1">
            <h1 className="ml12 inline-block font-bold leading-none tracking-tight uppercase break-words text-[clamp(1.75rem,6.5vw,4.375rem)] md:text-[50px] lg:text-[60px] xl:text-[70px]">
              Shahariar Bhuiyan Full Stack Web Developer.
            </h1>
          </div>

          <div className="col flex min-w-0 w-full flex-col gap-[10px] md:flex-1 md:max-w-[48%] lg:max-w-none">
            <p className="relative opacity-0 text-[15px] sm:text-[16px] md:text-[18px] inline-block leading-normal tracking-wide">
              <TextMask>{phares1}</TextMask>
            </p>
            <p className="relative opacity-0 text-[15px] sm:text-[16px] md:text-[18px] inline-block leading-normal tracking-wide">
              <TextMask>{phares2}</TextMask>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
