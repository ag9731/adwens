import React from "react";
import Image from "next/image";
import image from "@/components/HomePageComponents.jsx/assets/line2.svg";

const HomePageThirdSection = () => {
  const data = [
    {
      number: "200",
      name: "Projects",
      description: "Components to build fast layout",
    },
    {
      number: "200",
      name: "Clients",
      description: "Components to build fast layout",
    },
    {
      number: "100",
      name: "Thousand",
      description: "Components to build fast layout",
    },
  ];

  return (
    <>
      <div className="bg-black py-15">
        {/* Top Section */}
        <div className="container mx-auto flex gap-5 items-center">
          <h1 className="text-white font-inter-tight tracking-[4px] font-semibold">
            OUR INSIGHTS
          </h1>
          <div className="bg-[#ffff] h-[1px] w-[70px]"></div>
        </div>

        <div className="container mx-auto flex mt-8 justify-between items-center">
          {/* Left Section */}
          <div className="w-1/2  flex gap-6 flex-col items-start">
            <h1 className="text-white font-inter-tight text-7xl font-bold  leading-[80px] tracking-[4px]">
              Driven by Structure. Built for Results
            </h1>
          </div>

          {/* Right Section */}
          <div className="w-1/2 flex justify-end">
            <h1 className="text-white font-inter-tight tracking-[4px]">
              Designed for speed, clarity, and a seamless user journey.
            </h1>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto mt-15">
          <div className=" grid grid-cols-3 gap-10">
            {data.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    key={index}
                    className="relative  flex gap-2 flex-col items-center bg-[#090909]  rounded-2xl border border-[#3d4c56] py-20 "
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[200px]">
                      <Image
                        src={image}
                        alt="image1"
                        width={400}
                        height={200}
                        className="w-[100%] max-w-[300px] rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col items-center z-9 gap-4">
                      <div className="flex flex-col items-center">
                        <h1 className="font-inter-tight text-7xl font-bold leading-[80px] tracking-[4px] bg-linear-to-t from-[#2a2a2a] to-[#ffff] bg-clip-text text-transparent">
                          {item.number}
                        </h1>
                        <h2 className="text-2xl font-bold tracking-[1px]">
                          {item.name}
                        </h2>
                      </div>
                      <div>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageThirdSection;
