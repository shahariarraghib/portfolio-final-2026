import React from "react";
import Hero from "./Hero";
import AboutSection from "../uiComponent/AboutSection";
import ProjectShowcase from "../uiComponent/ProjectShowcase";

const Home = () => {
  return (
    <>
      <div className=" ">
        <Hero />
        <div className="hero-img w-full py-10 md:py-20">
          <AboutSection />
        </div>
        <ProjectShowcase />
      </div>
    </>
  );
};

export default Home;
