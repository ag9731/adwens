import React from "react";

const AboutWhyUs = () => {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20">
      {/* Heading Row */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
        <h2 className="text-white font-inter-tight font-semibold tracking-[3px] text-sm sm:text-base">
          WHY US
        </h2>
        <div className="bg-white h-[1px] w-12 sm:w-16 lg:w-20" />
      </div>

      {/* Content */}
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 lg:mt-18">
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="
        text-white font-inter-tight font-bold
        tracking-[1px]
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
        leading-relaxed sm:leading-snug lg:leading-[1.25]
      "
          >
            We are a multidisciplinary creative agency specializing in digital
            design, brand development, and user-centered experience strategies.
            Our mission is to transform ideas into meaningful solutions that
            elevate brands and drive measurable impact. With a team of
            designers, strategists, and technologists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyUs;
