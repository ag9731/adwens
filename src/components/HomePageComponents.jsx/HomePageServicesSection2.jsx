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

  const handleClick = () => {
    console.log("All Services ", services);
    console.log("Selected Service ", selectedService);
  };

  handleClick();
  return (
    <div className="flex">
      <div className="flex-1">
        <h1>{selectedService.description}</h1>
        <Image
          src={selectedService.image}
          alt={selectedService.name}
          width={400}
          height={200}
          className="w-full max-w-[200px] rounded-lg transition-all duration-300"
        />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        {services.map((service, index) => {
          return (
            <React.Fragment key={index}>
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                className="border-b-2"
              >
                <div className="cursor-pointer flex items-center justify-between">
                  <h1 className="text-3xl pb-8 ">{service.name}</h1>
                  <p>+</p>
                </div>

                <div>
                    {/* <p>{service.description}</p> */}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageServicesSection2;
