import React from "react";

const HomePageContactUsSection = () => {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      {/* Container with mx-auto */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card */}
        <div className="flex items-center justify-center border border-[#3d4c56] rounded-2xl shadow-[inset_0_1px_40px_#ffffff1A] px-6 sm:px-10 py-14 sm:py-16">
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl w-full">
            {/* Heading */}
            <h1 className="text-white font-inter-tight tracking-wider">
              <span className="block text-3xl sm:text-4xl font-semibold">
                Join The
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold mt-1">
                Community
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
              Stay connected with ideas and insights shaping the future of
              digital design. Subscribe to get exclusive updates and practical
              tips.
            </p>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 bg-transparent border border-[#3d4c56] px-6 py-4 rounded-full text-white placeholder-white/60 shadow-[inset_0_1px_30px_#ffffff1A] focus:outline-none focus:border-white/60 transition"
              />

              <button className="w-full sm:w-auto border border-[#3d4c56] px-8 py-4 rounded-full text-white font-inter-tight tracking-wide shadow-[inset_0_1px_30px_#ffffff1A] hover:border-white/70 hover:shadow-[inset_0_1px_40px_#ffffff33] transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageContactUsSection;
