import React from "react";
import Image from "next/image";
import banner from "@/components/AboutPageComponents/assets/aboutusbanner.webp";

const AboutUsBanner = () => {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h1
              className="text-white font-inter-tight font-bold tracking-[2px] sm:tracking-[3px] lg:tracking-[4px]
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              leading-tight lg:leading-[1.1]"
            >
              About Us Driven by Design
            </h1>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <p
              className="text-white/80 font-inter-tight tracking-wide
              text-sm sm:text-base md:text-lg lg:text-xl
              max-w-xl"
            >
              A design agency passionate about breathing life into brands.
            </p>
          </div>
        </div>

        {/* Banner Image */}
        <div className="mt-10 sm:mt-14 lg:mt-20">
          <Image
            src={banner}
            alt="About Us Banner"
            priority
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBanner;
