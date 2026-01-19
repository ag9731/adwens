import React from "react";

const HomePageBanner = () => {
  return (
    <div className="relative min-h-screen lg:h-[70vh] bg-black flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/herovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* Content inside container */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Heading */}
          <h1
            className="
            text-white font-inter-tight font-bold
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            leading-tight lg:leading-[80px]
            tracking-wide
            text-left
            max-w-full
          "
          >
            We create things worth your time.
          </h1>

          {/* Description */}
          <p
            className="
            font-roboto text-white
            text-base sm:text-lg md:text-xl
            opacity-90
            text-left
            max-w-full
          "
          >
            Thoughtful stories, conversations, and ideas. Built for people who
            think.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <button
              className="
              bg-gradient-to-t from-[#0b0d10] to-[#0e1316]
              py-3 sm:py-4 px-6 sm:px-8
              text-white rounded-full
              border border-[#3d4c56]
              font-inter-tight tracking-wide
              hover:border-white transition
            "
            >
              Explore What We Do
            </button>

            <button
              className="
              bg-gradient-to-t from-[#0b0d10] to-[#0e1316]
              py-3 sm:py-4 px-6 sm:px-8
              text-white rounded-full
              border border-[#3d4c56]
              font-inter-tight tracking-wide
              hover:border-white transition
            "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
