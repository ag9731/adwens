"use client";

import React from "react";
import Image from "next/image";
import lineImage from "@/components/HomePageComponents/assets/line2.svg";

const HomePageThirdSection = () => {
  const data = [
    {
      number: "200",
      name: "Projects",
      description: "Components to build fast layout",
    },
    {
      number: "200",
      name: "Clients",
      description: "Components to build fast layout",
    },
    {
      number: "100",
      name: "Thousand",
      description: "Components to build fast layout",
    },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-6">
        <div className="flex items-center gap-4 mb-10 justify-center lg:justify-start">
          <h4 className="text-white font-inter-tight tracking-[4px] text-sm sm:text-base">
            OUR INSIGHTS
          </h4>
          <div className="bg-white h-[1px] w-16" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          <div>
            <h2 className="text-white font-inter-tight font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight tracking-[2px] max-w-full lg:max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              Perspectives shaped by real experience, not theory.
            </h2>
          </div>

          <div className="flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <p className="text-white/80 font-inter-tight tracking-[2px] text-base sm:text-lg md:text-xl max-w-full lg:max-w-md text-center lg:text-left">
              Built for clarity and creativity, driven by experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#090909] rounded-2xl border border-[#3d4c56] py-12 sm:py-16 px-6 flex flex-col items-center text-center overflow-hidden hover:border-white transition"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                  src={lineImage}
                  alt="decorative line"
                  width={200}
                  height={200}
                  className="opacity-20 w-40 h-40 sm:w-48 sm:h-48"
                />
              </div>

              <div className="relative z-10 flex flex-col gap-4">
                <h1 className="font-inter-tight font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-[3px] bg-gradient-to-t from-[#2a2a2a] to-white bg-clip-text text-transparent">
                  {item.number}
                </h1>

                <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-white">
                  {item.name}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageThirdSection;
