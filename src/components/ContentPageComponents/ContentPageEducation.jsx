import React from "react";
import { FaCompass, FaChartLine, FaBriefcase, FaTools } from "react-icons/fa";

const ContentPageEducation = () => {
  const array = [
    {
      name: "Career Compass",
      description:
        "Where careers are understood, not guessed. This series helps commerce graduates and early professionals explore finance career paths with clarity. It covers roles, required skills, interviews, and real workplace expectations.",
      icon: <FaCompass size={40} />,
    },
    {
      name: "Corporate Finance Explained",
      description:
        "A clear and practical breakdown of how corporate finance actually works. It simplifies concepts like FP&A, controlling, and analyst responsibilities using real-world context instead of theory-heavy explanations.",
      icon: <FaChartLine size={40} />,
    },
    {
      name: "Career Readiness",
      description:
        "Designed to prepare individuals for the professional world with confidence. This content focuses on interviews, workplace behaviour, and early career decisions to support a smooth campus-to-corporate transition.",
      icon: <FaBriefcase size={40} />,
    },
    {
      name: "Skill Building",
      description:
        "Focused on skills that matter over the long term. This series explains what skills are required for finance and professional growth, why they matter, and how to build them gradually without overwhelm.",
      icon: <FaTools size={40} />,
    },
  ];

  return (
    <section className="container mx-auto py-20 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {array.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center gap-6 p-8 rounded-2xl 
                       bg-[#161616] border border-[#2a2a2a]
                       hover:border-[#4a4a4a] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-[#fb5831] group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            <h3 className="font-inter-tight text-2xl font-semibold">
              {item.name}
            </h3>

            <p className="font-inter-tight text-[16px] leading-relaxed text-[#bdbdbd]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentPageEducation;
