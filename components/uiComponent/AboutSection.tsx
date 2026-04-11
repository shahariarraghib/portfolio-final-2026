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
    <div
      id="about"
      className="hero-card px-6 sm:px-6 lg:px-12 max-w-8xl mx-auto scroll-mt-[10vh] w-full min-w-0"
    >
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
        {/* Left Column: Profile Image */}
        <div className="w-full flex justify-center mt-2 lg:flex-[2]">
          <div className="w-full max-w-[380px] sm:max-w-[380px] md:max-w-[380px] lg:max-w-[520px] xl:max-w-[500px]">
            <ProfileCard
              name="Shahariar Bhuiyan"
              title="Full Stack Web Developer"
              handle="shahariarbhuiyan"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/images/about/aboutme.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowColor="hsla(222, 100%, 70%, 0.5)"
              iconUrl="/assets/demo/iconpattern.png"
              behindGlowEnabled
              innerGradient="linear-gradient()"
            />
          </div>
        </div>

        {/* Center Column: Logo (Desktop Only) */}
        <div className="hidden lg:flex w-[200px] justify-center items-start">
          <AboutSectionLogo />
        </div>

        {/* Right Column: About Content */}
        <div className="w-full flex-1 space-y-8 lg:flex-[3]">
          {/* Title */}
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight uppercase">
              About Me
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-light leading-snug text-gray-900 dark:text-gray-100">
            I enjoy{" "}
            <span className="relative font-medium after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full">
              transforming ideas into
            </span>{" "}
            user-friendly digital products.
          </h2>

          {/* Paragraphs */}
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
          <div className="max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
            {AboutBulletPointData.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border border-gray-200 dark:border-gray-700 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition duration-300"
              >
                <Image
                  src={point.image}
                  alt={point.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {point.title}
                  </h3>
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
              href="/#contact"
              className="px-6 py-3 rounded-md text-md font-medium bg-black text-white"
            >
              Let’s connect
            </Link>

            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1ZTLOttRQHvrMIgKf2UWXYqCIWQuD5j0b/view"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-md font-medium border border-black text-black hover:bg-black hover:text-white transition duration-300 shadow-md"
            >
              view resume <ArrowRightIcon />
            </Link>

            {/* Contact */}
            <div className="flex items-center">
              <ContactSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
