import React from "react";
import Image from "next/image";
import ourmission from "@/components/AboutPageComponents/assets/aboutusmission.webp";
import ourvision from "@/components/AboutPageComponents/assets/aboutusvision.webp";

const AboutUsMissionVision = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="relative h-[320px] md:h-[380px] rounded-xl overflow-hidden border border-[#3d4c56]">
            {/* Background Image */}
            <Image
              src={ourmission}
              alt="Our Mission"
              fill
              className="object-cover"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h2 className="text-white text-6xl font-semibold mb-2">
                Our Mission
              </h2>
              <p className="text-gray-300 text-2xl leading-relaxed">
                To guide individuals with clarity and honesty as they navigate
                careers, finances, and life decisions without hype or guesswork.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="relative h-[320px] md:h-[380px] rounded-xl overflow-hidden border border-[#3d4c56]">
            {/* Background Image */}
            <Image
              src={ourvision}
              alt="Our Vision"
              fill
              className="object-cover"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h2 className="text-white text-6xl font-inter-tight font-semibold mb-2">
                Our Vision
              </h2>
              <p className="text-gray-300 text-2xl font-inter-tight leading-relaxed">
                To create a thoughtful space where careers are understood, money
                is approached with meaning, and conversations go beyond job
                titles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMissionVision;
