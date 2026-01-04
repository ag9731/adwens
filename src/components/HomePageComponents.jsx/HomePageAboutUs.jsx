import React from "react";
import Image from "next/image";
import image from "@/components/HomePageComponents.jsx/assets/HomeAboutUsSection.webp";
import bgImg from "@/components/HomePageComponents.jsx/assets/HomeAboutBg.png";

const HomePageAboutUs = () => {
  return (
    <>
      <div className="relative py-30 bg-black items-center">
        {/* CENTER BACKGROUND IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src={bgImg}
            alt="Background shape"
            width={600}
            height={400}
            className="opacity-8"
          />
        </div>

        <div className="container mx-auto items-center">
          {/* top */}
          <div className="flex gap-5 items-center">
            {/* <button className='bg-gradient-to-t from-[#0b0d10] to-[#0e1316]-600 py-4 px-8 text-white rounded-full border border-[#3d4c56] font-inter-tight tracking-[1px]'>
                  About Us
            </button> */}
            <h1 className="text-white font-inter-tight tracking-[4px] font-semibold">
              WHO WE ARE
            </h1>
            <div className="bg-[#ffff] h-[1px] w-[70px]"></div>
          </div>
          <div className="container mx-auto flex items-center mt-12">
            {/* Left */}
            <div className="flex-1">
              <Image
                src={image}
                alt="image1"
                width={400}
                height={200}
                className="w-[100%] max-w-[300px] rounded-lg"
              />
            </div>

            {/* Right */}
            <div className="flex-1 flex flex-col items-start gap-7">
              <h1 className="text-white font-inter-tight text-7xl font-bold leading-[80px] tracking-[4px]">
                Clarity for Careers,
                <span
                  className="bg-linear-to-t from-blue-400 to-[#ffff] bg-clip-text
    text-transparent"
                >
                  {" "}
                  Money & Life
                </span>
              </h1>
              <p className="font-roboto text-white text-xl">
                ADWENS exists to support individuals at critical transition
                points — early careers, financial independence, and personal
                growth. We combine thoughtful conversations, guided mentorship,
                and structured learning to help people make informed decisions
                without pressure or confusion.
              </p>
              <button className="bg-gradient-to-t from-[#0b0d10] to-[#0e1316]-600 py-4 px-8 text-white rounded-full border border-[#3d4c56] font-inter-tight tracking-[1px]">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageAboutUs;
