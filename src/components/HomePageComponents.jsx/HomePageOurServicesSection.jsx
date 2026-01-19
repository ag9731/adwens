"use client";

import React from "react";
import HomePageServicesSection2 from "./HomePageServicesSection2";

const HomePageOurServicesSection = () => {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-6">
        {/* Top Section */}
        <div className="flex items-center gap-4 mb-10 justify-center lg:justify-start">
          <h4 className="text-white uppercase font-inter-tight tracking-[4px] text-sm sm:text-base">
            Our Initiatives
          </h4>
          <div className="bg-white h-[1px] w-16" />
        </div>

        {/* Heading Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          {/* Left */}
          <div>
            <h1
              className="text-white font-inter-tight font-bold
              text-3xl sm:text-4xl md:text-5xl xl:text-6xl
              leading-tight tracking-[2px] max-w-full lg:max-w-xl text-center lg:text-left mx-auto lg:mx-0"
            >
              Crafting authentic content in an AI-driven world
            </h1>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
            <p className="text-white/80 font-inter-tight tracking-[2px] text-base sm:text-lg md:text-xl max-w-full lg:max-w-md text-center lg:text-left">
              Designed for speed, clarity, and a seamless user journey.
            </p>
          </div>
        </div>

        {/* Services Component */}
        <HomePageServicesSection2 />
      </div>
    </section>
  );
};

export default HomePageOurServicesSection;
