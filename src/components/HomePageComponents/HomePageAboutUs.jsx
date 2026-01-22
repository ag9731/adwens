"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/components/HomePageComponents/assets/HomeAboutBg.png";
import image2 from "@/components/HomePageComponents/assets/HomeAboutUsSection.webp";

const HomePageAboutUs = () => {
  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Center Background Shape */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src={image2}
          alt="Background shape"
          width={600}
          height={400}
          className="opacity-10 w-full max-w-[600px]"
        />
      </div>

      {/* Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 xl:px-6">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-10 justify-center lg:justify-start">
          <h4 className="text-white font-inter-tight tracking-[4px] text-sm sm:text-base">
            WHO WE ARE
          </h4>
          <div className="bg-white h-[1px] w-16" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src={image1}
              alt="About us"
              width={400}
              height={300}
              className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] rounded-xl"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h2 className="text-white font-inter-tight font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight tracking-[2px]">
              Clarity for Careers,
              <span className="block bg-gradient-to-t from-blue-400 to-white bg-clip-text text-transparent">
                Money & Life
              </span>
            </h2>

            <p className="font-roboto text-white/90 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              ADWENS exists to support individuals at critical transition points
              early careers, financial independence, and personal growth. We
              combine thoughtful conversations, guided mentorship, and
              structured learning to help people make informed decisions without
              pressure or confusion.
            </p>

            <div className="pt-4 flex justify-center lg:justify-start">
              <Link href="/aboutus">
                <button className="inline-flex cursor-pointer items-center justify-center bg-gradient-to-t from-[#0b0d10] to-[#0e1316] text-white px-8 py-3 rounded-full border border-[#3d4c56] font-inter-tight tracking-[1px]  hover:border-white transition">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageAboutUs;
