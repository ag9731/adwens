import React from "react";
import Image from "next/image";
import career from "@/components/ServicePageComponents/assets/career.webp";
import money from "@/components/ServicePageComponents/assets/money.webp";
import afterhoures from "@/components/ServicePageComponents/assets/afterhoures.webp";

const ServicePageServices = () => {
  const services = [
    {
      image: career,
      name: "Career Compass",
      tagline: "Lorem Ipsum Lorem Ipusm Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, vel facilisis urna ultrices non. Integer ac sem sed sapien tempor consequat. Vivamus id quam nec neque fermentum cursus non ut ligula.",
    },
    {
      image: money,
      name: "Money & Meaning",
      tagline: "Lorem Ipsum Lorem Ipusm Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, vel facilisis urna ultrices non. Integer ac sem sed sapien tempor consequat. Vivamus id quam nec neque fermentum cursus non ut ligula.",
    },
    {
      image: afterhoures,
      name: "After Hours",
      tagline: "Lorem Ipsum Lorem Ipusm Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, vel facilisis urna ultrices non. Integer ac sem sed sapien tempor consequat. Vivamus id quam nec neque fermentum cursus non ut ligula.",
    },
  ];

  return (
    <div className="bg-black py-10">
      <div className="container mx-auto flex mt-8 justify-between items-center">
        <div className="flex justify-between w-[100%] flex-col ">
          {services.map((service, index) => {
            return (
              <React.Fragment key={index}>
                {/* Right */}
                <div className="flex">
                  <div className=" flex gap-10 w-[40%] items-center p-5">
                    <div className="flex-1">
                      <Image
                        src={service.image}
                        alt="Background shape"
                        width={600}
                        height={400}
                        className="w-[100%] max-w-[350px]"
                      />
                    </div>
                  </div>

                  {/* Left */}
                  <div className="w-[60%] flex flex-col gap-5 justify-center">
                    <div>
                      <h1 className="font-inter-tight text-6xl  tracking-[1px] font-bold">
                        {service.name}
                      </h1>
                    </div>
                    <div>
                      <p className="text-2xl font-inter-tight italic tracking-[1px]">
                        {service.tagline}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg leading-8">{service.description}</p>
                    </div>
                    <div>
                      <button className="border px-8 py-3">Know More</button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ServicePageServices;
