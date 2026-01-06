import React from "react";
import { FaCompass, FaChartLine, FaBriefcase, FaTools } from "react-icons/fa";

const ContentPageEducation = () => {
  const array = [
    {
      name: "Career Compass",
      description:
        "Where careers are understood, not guessed. This series helps commerce graduates and early professionals explore finance career paths with clarity. It covers roles, required skills, interviews, and real workplace expectations.",
      icon: <FaCompass />,
    },
    {
      name: "Corporate Finance Explained",
      description:
        "A clear and practical breakdown of how corporate finance actually works. It simplifies concepts like FP&A, controlling, and analyst responsibilities using real-world context instead of theory-heavy explanations.",
      icon: <FaChartLine />,
    },
    {
      name: "Career Readiness",
      description:
        "Designed to prepare individuals for the professional world with confidence. This content focuses on interviews, workplace behaviour, and early career decisions to support a smooth campus-to-corporate transition.",
      icon: <FaBriefcase />,
    },
    {
      name: "Skill Building",
      description:
        "Focused on skills that matter over the long term. This series explains what skills are required for finance and professional growth, why they matter, and how to build them gradually without overwhelm.",
      icon: <FaTools />,
    },
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {array.map((item, index) => (
            <div
              key={index}
              className="
                group flex flex-col items-center text-center gap-4
                p-4 sm:p-6
                rounded-2xl
                bg-[#161616] border border-[#2a2a2a]
                hover:border-[#4a4a4a] hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              {/* Icon */}
              <div className="text-[#fb5831] text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-inter-tight font-semibold text-lg sm:text-xl lg:text-xl text-white">
                {item.name}
              </h3>

              {/* Description */}
              <p className="font-inter-tight text-sm sm:text-base lg:text-base leading-relaxed text-[#bdbdbd]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentPageEducation;
