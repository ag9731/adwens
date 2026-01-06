import React from "react";
import Image from "next/image";
import banner from "@/components/ContactUsBanner/assets/contactUsBanner.webp";

const ContactUsBanner = () => {
  return (
    <div className="bg-black py-10 sm:py-14 lg:py-20">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex flex-col lg:flex-row
            gap-8 lg:gap-16
            items-start lg:items-center
          "
        >
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h1
              className="
                text-white font-inter-tight font-bold tracking-[1px]
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                leading-tight sm:leading-snug lg:leading-[1.2]
              "
            >
              Get in touch with us.
            </h1>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <p
              className="
                text-gray-300 font-inter-tight
                tracking-wide
                text-base sm:text-lg md:text-xl
                leading-relaxed
                max-w-xl
              "
            >
              We’d love to hear from you. Whether you have a project in mind, a
              question, or just want to say hi—reach out and let’s start the
              conversation.
            </p>
          </div>
        </div>

        {/* Banner Image */}
        <div className="mt-10 sm:mt-14 lg:mt-20">
          <Image
            src={banner}
            alt="Contact us banner"
            priority
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsBanner;
