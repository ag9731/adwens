import React from "react";

const ContentPageHero = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto flex mt-8 justify-between items-center">
        {/* Left Section */}
        <div className="w-1/2  flex gap-6 flex-col items-start">
          <h1 className="text-white font-inter-tight text-7xl font-bold  leading-[80px] tracking-[4px]">
            EDUCATIONAL CONTENT
          </h1>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex justify-end">
          <h1 className="text-white font-inter-tight tracking-[4px]">
            An educational content series designed for commerce graduates and
            early finance professionals.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContentPageHero;
