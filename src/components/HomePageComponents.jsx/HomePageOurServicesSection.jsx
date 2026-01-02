"use client";

import React from "react";
import { useState } from "react";
import HomePageServicesSection2 from "./HomePageServicesSection2";

const HomePageOurServicesSection = () => {
  return (
    <div className="bg-black py-15 ">
      {/* Top Section */}
      <div className="container mx-auto flex gap-5 items-center">
        <h1 className="text-white font-inter-tight tracking-[4px] font-semibold">
          OUR SERVICES
        </h1>
        <div className="bg-[#ffff] h-[1px] w-[70px]"></div>
      </div>

      {/* Bottom 1st Section */}
      <div className="container mx-auto flex mt-8 justify-between items-center">
        {/* Left Section */}
        <div className="w-1/2  flex gap-6 flex-col items-start">
          <h1 className="text-white font-inter-tight text-7xl font-bold  leading-[80px] tracking-[4px]">
            Empowering Brands Through Solutions.
          </h1>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex justify-end">
          <h1 className="text-white font-inter-tight tracking-[4px] ">
            Designed for speed, clarity, and a seamless user journey.
          </h1>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-20">
        <HomePageServicesSection2 />
      </div>
    </div>
  );
};

export default HomePageOurServicesSection;
