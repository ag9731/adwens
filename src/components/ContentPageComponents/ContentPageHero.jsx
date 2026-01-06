import React from "react";

const ContentPageHero = () => {
  return (
    <div className="bg-black py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex flex-col lg:flex-row
            gap-8 lg:gap-16
            items-start lg:items-center
          "
        >
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h1
              className="
                text-white font-inter-tight font-bold
                tracking-[1px] sm:tracking-[2px] lg:tracking-[4px]
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                leading-tight sm:leading-snug lg:leading-[1.2]
              "
            >
              EDUCATIONAL CONTENT
            </h1>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <p
              className="
                text-gray-300 font-inter-tight
                tracking-wide
                text-base sm:text-lg md:text-xl
                leading-relaxed
                max-w-xl
              "
            >
              An educational content series designed for commerce graduates and
              early finance professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPageHero;
