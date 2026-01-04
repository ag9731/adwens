import React from "react";

const ServicePageBanner = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto flex mt-8 justify-between items-center">

        {/* Left Section */}
        <div className="w-1/2  flex gap-6 flex-col items-start">
          <h1 className="text-white font-inter-tight text-7xl font-bold  leading-[80px] tracking-[4px]">
            Service Driven by Design
          </h1>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex justify-end">
          <h1 className="text-white font-inter-tight tracking-[4px]">
            A design agency passionate about breathing life into brands.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServicePageBanner;
