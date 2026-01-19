import React from "react";
import Image from "next/image";
import banner from "@/components/MentorshipPageComponents/assets/mentorshipbanner.webp";

const MentorshipBanner = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Title Section - left aligned */}
        {/* <div className="w-full flex flex-col sm:flex-row sm:items-start items-center gap-6">
          <h1 className="text-white font-inter-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-snug md:leading-[70px] lg:leading-[80px] text-left sm:text-left tracking-[1px] sm:tracking-[2px] md:tracking-[3px] lg:tracking-[4px]">
            MENTORSHIP PROGRAMS
          </h1>
        </div> */}

        {/* Banner Image */}
        {/* <div className="w-full">
          <Image
            src={banner}
            alt="Mentorship Banner"
            width={1200}
            height={600}
            className="w-full rounded-lg object-cover"
          />
        </div> */}

        {/* Description Section */}
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-white font-inter-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-left">
            Mentorship Designed for Clarity, Not Confusion
          </h2>

          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-inter-tight leading-relaxed sm:leading-relaxed md:leading-8 lg:leading-10">
            Our mentorship programs are built for commerce graduates and early
            professionals who want direction before making long-term career
            decisions.
          </p>

          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-inter-tight leading-relaxed sm:leading-relaxed md:leading-8 lg:leading-10">
            Instead of generic advice, we focus on guided thinking, real-world
            perspective, and structured conversations. The goal is not to tell
            you what to do, but to help you understand your options clearly — so
            your decisions are informed, confident, and aligned with your
            long-term growth.
          </p>

          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-inter-tight leading-relaxed sm:leading-relaxed md:leading-8 lg:leading-10">
            This program is ideal for those navigating early career uncertainty,
            role selection, or the transition from academic learning to
            professional reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorshipBanner;
