import React from "react";
import Image from "next/image";
import banner from "@/components/MentorshipPageComponents/assets/mentorshipbanner.webp";

const MentorshipBanner = () => {
  return (
    <div className="bg-black py-4">
      {/* Top section */}
      <div className="container mx-auto  mt-8 justify-between items-center">
        <div className="w-1/2 flex gap-6 flex-col items-start">
          <h1 className="text-white font-inter-tight text-7xl font-bold leading-[80px] tracking-[4px]">
            MENTORSHIP PROGRAMS
          </h1>
        </div>

        {/* <div className="w-1/2 flex justify-end">
          <h1 className="text-white font-inter-tight tracking-[4px] max-w-md">
            Stories, reflections, and lighter conversations that explore
            careers, money, and life beyond professional labels.
          </h1>
        </div> */}

        <div className="mt-20">
          <Image
            src={banner}
            alt="image1"
            width={400}
            height={200}
            className="w-[100%] rounded-lg"
          />
        </div>

        <div className="mt-32 flex flex-col gap-6">
          <div>
            <h1 className="text-white font-inter-tight text-6xl  font-bold  leading-[70px] text-center tracking-[1px]">
              Mentorship Designed for Clarity, Not Confusion
            </h1>
          </div>
          <div>
            <p className="text-2xl font-inter-tight text-center leading-10">
              Our mentorship programs are built for commerce graduates and early
              professionals who want direction before making long-term career
              decisions.
            </p>
            <p className="text-2xl font-inter-tight text-center leading-10">
              Instead of generic advice, we focus on guided thinking, real-world
              perspective, and structured conversations. The goal is not to tell
              you what to do, but to help you understand your options clearly —
              so your decisions are informed, confident, and aligned with your
              long-term growth.
            </p>
            <p className="text-2xl font-inter-tight text-center leading-10">
              This program is ideal for those navigating early career
              uncertainty, role selection, or the transition from academic
              learning to professional reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipBanner;
