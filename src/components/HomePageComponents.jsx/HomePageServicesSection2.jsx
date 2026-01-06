"use client";

import React, { useState } from "react";
import Image from "next/image";
import image1 from "@/components/HomePageComponents.jsx/assets/HomeAboutBg.png";
import image2 from "@/components/HomePageComponents.jsx/assets/HomeAboutUsSection.webp";

const HomePageServicesSection2 = () => {
  const services = [
    {
      name: "Media",
      description: "Where conversations and ideas are created.",
      image: image1,
    },
    {
      name: "Mentorship",
      description: "Guided journeys led by experience.",
      image: image2,
    },
    {
      name: "Learning",
      description: "Structured learning for long-term mastery.",
      image: image1,
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16
      items-center"
    >
      {/* Left Content */}
      <div className="flex flex-col gap-6">
        <h3 className="text-white font-inter-tight text-xl sm:text-2xl max-w-md">
          {selectedService.description}
        </h3>

        <Image
          src={selectedService.image}
          alt={selectedService.name}
          width={400}
          height={300}
          className="w-full max-w-xs sm:max-w-sm rounded-xl
          transition-all duration-300"
        />
      </div>

      {/* Right List */}
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelectedService(service)}
            className={`cursor-pointer border-b border-[#3d4c56] pb-6
              transition ${
                selectedService.name === service.name
                  ? "text-white"
                  : "text-white/60"
              }`}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-inter-tight text-xl sm:text-2xl tracking-wide">
                {service.name}
              </h2>
              <span className="text-2xl">
                {selectedService.name === service.name ? "−" : "+"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageServicesSection2;
