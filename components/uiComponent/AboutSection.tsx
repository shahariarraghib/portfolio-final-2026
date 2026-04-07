"use client";
import React from "react";
import ContactSection from "./ContactSection";
import Image from "next/image";
import Link from "next/link";
import AboutSectionLogo from "./AboutSectionLogo";
import ProfileCard from "./AboutSeectionImag";
import { AboutBulletPointData } from "@/content/marqueeLogoData";

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14.449 13.5h-13.449v-3h13.449l-4.449-4.449 2.121-2.121 7.879 7.879-7.879 7.879-2.121-2.121z" />
  </svg>
);

const AboutSection = () => {
  return (
    <div className="hero-card  md:p-12 max-w-8xl mx-auto ">
      <div className="flex flex-col md:flex-row gap-12 md:items-start">
        {/* Left Column: Profile Image */}
        <div className="flex-2 flex items-center justify-center md:sticky md:top-20">
          <ProfileCard
            name="Shahariar Bhuiyan"
            title="Full Stack Web Developer"
            handle="shahariarbhuiyan"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/images/marqueeLogo/pic1.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            behindGlowColor="hsla(222, 100%, 70%, 0.5)"
            iconUrl="/assets/demo/iconpattern.png"
            behindGlowEnabled
            innerGradient="linear-gradient()"
          />
        </div>

        {/* Center Column: Logo Section */}
        <div className="flex-none w-[200px] flex justify-center items-start">
          <AboutSectionLogo />
        </div>

        {/* Right Column: About Me */}
        <div className="flex-3 space-y-8 ml-0 md:ml-5">
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-6xl font-extrabold tracking-tight uppercase ">
              About Me
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-light leading-snug text-gray-900 dark:text-gray-100">
            I enjoy{" "}
            <span className="relative font-medium after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full">
              transforming ideas into
            </span>{" "}
            user-friendly digital products.
          </h1>

          <p className="text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
            I’m a full-stack developer building fast, scalable, and user-focused
            digital experiences. I specialize in{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              React.js and Next.js
            </span>{" "}
            and craft clean, responsive interfaces with TailwindCSS, Bootstrap,
            and Material UI.
          </p>

          <p className="text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
            On the backend, I use{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Node.js, ExpressJS, MongoDB
            </span>{" "}
            to develop efficient applications. I enjoy turning ideas into
            products while exploring new technologies.
          </p>

          {/* Bullet Points */}
          <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {AboutBulletPointData.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border border-gray-200 dark:border-gray-700 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={point.image}
                  alt={point.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                    {point.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {point.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href="#"
              className="px-6 py-3 rounded-md text-md font-medium bg-black text-white "
            >
              View Projects
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-md font-medium border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
            >
              view resume <ArrowRightIcon />
            </Link>

            {/* Connect */}
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400"></p>
              <ContactSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
