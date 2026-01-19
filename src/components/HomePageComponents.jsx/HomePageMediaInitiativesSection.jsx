import React from "react";
import Image from "next/image";
import career from "@/components/HomePageComponents.jsx/assets/career.png";
import afterhoures from "@/components/HomePageComponents.jsx/assets/afterhoures.png";
import money from "@/components/HomePageComponents.jsx/assets/money.png";

const HomePageMediaInitiativesSection = () => {
  const services = [
    {
      image: career,
      name: "Career Compass",
      tagline: "Where careers are understood, not guessed",
      topics: [
        "Corporate finance roles (FP&A, Controlling, Analyst paths)",
        "Skill-building & interview readiness",
        "Campus-to-corporate transition",
        "Workplace realities (what no one tells you)",
      ],
    },
    {
      image: money,
      name: "Money & Meaning",
      tagline: "Building wealth with clarity and purpose",
      topics: [
        "Retirement planning basics (simplified)",
        "Long-term investing mindset",
        "Financial independence concepts (without hype)",
        "Aligning money decisions with life goals",
      ],
    },
    {
      image: afterhoures,
      name: "After Hours",
      tagline: "Conversations beyond the job title",
      topics: [
        "Career stories & real experiences",
        "Fun takes on finance and work",
        "Life lessons, failures & reflections",
        "Perspectives beyond resumes and roles",
      ],
    },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex items-center gap-4 mb-12">
          <h4 className="text-white uppercase font-inter-tight tracking-[4px] text-sm sm:text-base">
            Media Initiatives
          </h4>
          <div className="bg-white h-[1px] w-16" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-14">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-6 w-full"
            >
              {/* Image */}
              <div className="w-full flex justify-center">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={250}
                  className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[400px] rounded-xl"
                />
              </div>

              {/* Title */}
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider font-inter-tight">
                {service.name}
              </h2>

              {/* Tagline */}
              <p className="text-blue-300 text-sm sm:text-base md:text-lg tracking-wide font-inter-tight max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
                {service.tagline}
              </p>

              {/* Topics */}
              <div className="w-full border border-[#3d4c56] rounded-2xl p-5">
                <ul className="flex flex-col gap-2 sm:gap-3 text-left">
                  {service.topics.map((item, i) => (
                    <li
                      key={i}
                      className="text-white/80 text-xs sm:text-sm md:text-base font-inter-tight tracking-wide"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageMediaInitiativesSection;
