import React from "react";
import { FaMoon, FaMicrophoneAlt, FaSmile, FaBrain } from "react-icons/fa";

const ContentPageEntertainment = () => {
  const entertainment = [
    {
      name: "After Hours",
      description:
        "A space for conversations beyond job titles and resumes. This series features honest discussions, opinions, and reflections on careers, money, and life in a relaxed and relatable format.",
      icon: <FaMoon />,
    },
    {
      name: "Career Stories",
      description:
        "Real career journeys shared through personal experiences. It highlights turning points, challenges, and lessons learned, showing that growth rarely follows a straight or predictable path.",
      icon: <FaMicrophoneAlt />,
    },
    {
      name: "Fun Finance",
      description:
        "Finance content presented in a lighter and more engaging way. It explores money habits, work culture, and common finance myths through simple explanations and relatable examples.",
      icon: <FaSmile />,
    },
    {
      name: "Life Lessons",
      description:
        "Reflections on growth beyond professional success. This content focuses on failures, decisions, and learning moments that shape long-term perspective and personal maturity.",
      icon: <FaBrain />,
    },
  ];

  return (
    <div className="bg-black">
      {/* ---------- Top Section ---------- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div
          className="
            flex flex-col lg:flex-row
            gap-8 lg:gap-16
            items-start lg:items-center
          "
        >
          {/* Left */}
          <div className="w-full lg:w-1/2">
            <h1
              className="
                text-white font-inter-tight font-bold
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                leading-tight sm:leading-snug
                tracking-wide
              "
            >
              Conversations Beyond the Job
            </h1>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2">
            <p
              className="
                text-white font-inter-tight
                text-sm sm:text-base lg:text-lg
                tracking-wide
                max-w-lg
              "
            >
              Stories, reflections, and lighter conversations that explore
              careers, money, and life beyond professional labels.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Cards Section ---------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-24">
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8 sm:gap-10 lg:gap-12
          "
        >
          {entertainment.map((item, index) => (
            <div
              key={index}
              className="
                group flex flex-col items-center text-center gap-5
                p-6 sm:p-8
                rounded-2xl
                bg-[#161616] border border-[#2a2a2a]
                hover:border-[#4a4a4a]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Icon */}
              <div
                className="
                  text-[#fb5831]
                  text-3xl sm:text-4xl
                  group-hover:scale-110
                  transition-transform duration-300
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  font-inter-tight font-semibold text-white
                  text-lg sm:text-xl lg:text-2xl
                "
              >
                {item.name}
              </h3>

              {/* Description */}
              <p
                className="
                  font-inter-tight
                  text-sm sm:text-base
                  leading-relaxed
                  text-[#bdbdbd]
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContentPageEntertainment;
