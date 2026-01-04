import React from "react";

const AbousWhyUs = () => {
  return (
    <div className="bg-black py-10">
      {/* Top Section */}
      <div className="container mx-auto flex gap-5 items-center">
        <h1 className="text-white font-inter-tight tracking-[4px] font-semibold">
          WHY US
        </h1>
        <div className="bg-[#ffff] h-[1px] w-[70px]"></div>
      </div>

      <div className="container mx-auto flex mt-8 justify-between items-center">
        {/* Left Section */}
        <div className="flex gap-6 flex-col items-start">
          <h1 className="text-white font-inter-tight text-5xl font-bold  leading-[70px] text-center tracking-[1px]">
            We are a multidisciplinary creative agency specializing in digital
            design, brand development, and user-centered experience strategies.
            Our mission is to transform ideas into meaningful solutions that
            elevate brands and drive measurable impact. With a team of
            designers, strategists, and technologists.
          </h1>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default AbousWhyUs;
