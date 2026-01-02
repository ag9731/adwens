import React from "react";
import Image from "next/image";
import career from "@/components/HomePageComponents.jsx/assets/career.png";
import afterhoures from "@/components/HomePageComponents.jsx/assets/afterhoures.png";
import money from "@/components/HomePageComponents.jsx/assets/money.png";

const HomePageMediaInitiativesSection = () => {
  const services = [
    {
      image: career,
      name: "Career Compass",
      tagline: "Where careers are understood, not guessed",
      benefitted: ["Commerce Graduates", "Early Finance Professionals"],
      topics: [
        "Corporate finance roles (FP&A, Controlling, Analyst paths)",
        "Skill-building & interview readiness",
        "Campus-to-corporate transition",
        "Workplace realities (what no one tells you)",
      ],
      link: "#",
    },
    {
      image: money,
      name: "Money & Meaning",
      tagline: "Building wealth with clarity and purpose",
      benefitted: ["Early Professionals", "First-time Long-term Planners"],
      topics: [
        "Retirement planning basics (simplified)",
        "Long-term investing mindset",
        "Financial independence concepts (without hype)",
        "Aligning money decisions with life goals",
      ],
      link: "#",
    },
    {
      image: afterhoures,
      name: "After Hours",
      tagline: "Conversations beyond the job title",
      benefitted: ["Working Professionals", "Curious Minds"],
      topics: [
        "Career stories & real experiences",
        "Fun takes on finance and work",
        "Life lessons, failures & reflections",
        "Perspectives beyond resumes and roles",
      ],
      link: "#",
    },
  ];

  return (
    <div className="bg-black py-15 ">
      {/* Top Section */}
      <div className="container mx-auto flex gap-5 items-center">
        <h1 className="text-white uppercase font-inter-tight tracking-[4px] font-semibold">
          Media Initiatives
        </h1>
        <div className="bg-[#ffff] h-[1px] w-[70px]"></div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto grid grid-cols-3 gap-25 items-center mt-14 items-center">
        {services.map((service, index) => {
          return (
            <React.Fragment key={index}>
              <div className=" flex flex-col justify-center items-center gap-5 ">
                <div className="flex">
                  <Image
                    src={service.image}
                    alt="image1"
                    width={400}
                    height={200}
                    className="w-[100%] max-w-[600px] rounded-lg"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-inter-tight uppercase tracking-wider font-bold">
                    {service.name}
                  </h1>
                </div>
                <div>
                  <p className="text-blue-300 text-xl tracking-wider font-inter-tight ">
                    {service.tagline}
                  </p>
                </div>
                <div className="rounded-2xl border border-[#3d4c56] p-4 rounded-lg mt-5">
                  {service.topics.map((items, index) => (
                    <ul key={index}>
                      <li className="p-2 font-inter-tight tracking-wider text-md m-2 rounded-b-sm">
                        {items}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </React.Fragment>
          );
        })}
        {/* <div>
          <button className="className='bg-gradient-to-t from-[#0b0d10] to-[#0e1316]-600 py-4 px-8 text-white rounded-full border border-[#3d4c56] font-inter-tight tracking-[1px]'">
            Explore More
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HomePageMediaInitiativesSection;
