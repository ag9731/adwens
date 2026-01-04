import React from "react";
import { FaMoon, FaMicrophoneAlt, FaSmile, FaBrain } from "react-icons/fa";

const ContentPageEntertainment = () => {
  const entertainment = [
    {
      name: "After Hours",
      description:
        "A space for conversations beyond job titles and resumes. This series features honest discussions, opinions, and reflections on careers, money, and life in a relaxed and relatable format.",
      icon: <FaMoon size={40} />,
    },
    {
      name: "Career Stories",
      description:
        "Real career journeys shared through personal experiences. It highlights turning points, challenges, and lessons learned, showing that growth rarely follows a straight or predictable path.",
      icon: <FaMicrophoneAlt size={40} />,
    },
    {
      name: "Fun Finance",
      description:
        "Finance content presented in a lighter and more engaging way. It explores money habits, work culture, and common finance myths through simple explanations and relatable examples.",
      icon: <FaSmile size={40} />,
    },
    {
      name: "Life Lessons",
      description:
        "Reflections on growth beyond professional success. This content focuses on failures, decisions, and learning moments that shape long-term perspective and personal maturity.",
      icon: <FaBrain size={40} />,
    },
  ];

  return (
    <div className="bg-black py-4">
      {/* Top section */}
      <div className="container mx-auto flex mt-8 justify-between items-center">
        <div className="w-1/2 flex gap-6 flex-col items-start">
          <h1 className="text-white font-inter-tight text-7xl font-bold leading-[80px] tracking-[4px]">
            Conversations Beyond the Job
          </h1>
        </div>

        <div className="w-1/2 flex justify-end">
          <h1 className="text-white font-inter-tight tracking-[4px] max-w-md">
            Stories, reflections, and lighter conversations that explore
            careers, money, and life beyond professional labels.
          </h1>
        </div>
      </div>

      {/* Bottom Section */}
      <section className="container mx-auto py-20 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {entertainment.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center gap-6 p-8 rounded-2xl 
                         bg-[#161616] border border-[#2a2a2a]
                         hover:border-[#4a4a4a] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-[#fb5831] group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="font-inter-tight text-2xl font-semibold text-white">
                {item.name}
              </h3>

              <p className="font-inter-tight text-[16px] leading-relaxed text-[#bdbdbd]">
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
