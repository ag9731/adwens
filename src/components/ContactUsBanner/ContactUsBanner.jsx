import React from 'react'
import Image from "next/image";
import banner from "@/components/ContactUsBanner/assets/contactUsBanner.webp";

const ContactUsBanner = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto flex mt-8 justify-between items-center">
        {/* Left Section */}
        <div className="w-1/2  flex gap-6 flex-col items-start">
          <h1 className="text-white font-inter-tight text-7xl font-bold  leading-[80px] tracking-[4px]">
            Get in touch With us.
          </h1>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex justify-end">
          <h1 className="text-white font-inter-tight tracking-[4px]">
            We’d love to hear from you. Whether you have a project in mind, a
            question, or just want to say hi—reach out and let’s start the
            conversation.
          </h1>
        </div>
      </div>
      <div className="mt-20">
        <Image
          src={banner}
          alt="image1"
          width={400}
          height={200}
          className="w-[100%] rounded-lg"
        />
      </div>
    </div>
  );
}

export default ContactUsBanner
