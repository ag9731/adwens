import React from "react";

const ServicePageBanner = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 items-start">
          <h1 className="text-white font-inter-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-snug md:leading-[70px] lg:leading-[80px] tracking-[1px] sm:tracking-[2px] md:tracking-[3px] lg:tracking-[4px]">
            Service Driven by Design
          </h1>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-start lg:justify-end mt-6 lg:mt-0">
          <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-inter-tight leading-relaxed">
            A design agency passionate about breathing life into brands.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServicePageBanner;
