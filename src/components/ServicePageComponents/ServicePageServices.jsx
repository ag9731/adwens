import React from "react";
import Image from "next/image";

import media from "@/components/ServicePageComponents/assets/media.webp";
import mentorship from "@/components/ServicePageComponents/assets/mentorship.webp";
import learning from "@/components/ServicePageComponents/assets/Learning.webp";

const ServicePageServices = () => {
  const services = [
    {
      image: media,
      name: "MEDIA",
      tagline: "Where conversations, ideas, and reflections take form.",
      description:
        "Our media initiatives create space for thoughtful dialogue around work, money, identity, and life beyond job titles. Through long-form conversations, reflections, and after-hours discussions, we surface real experiences that help individuals make sense of their professional and personal journeys. Media is not about noise — it is about clarity, context, and meaningful perspectives that stay with you.",
      highlights: ["Career Compass", "Money & Meaning", "After Hours"],
    },
    {
      image: mentorship,
      name: "MENTORSHIP",
      tagline: "Guided journeys led by experience, not prescriptions.",
      description:
        "Our mentorship programs support individuals navigating early career uncertainty, role confusion, and real-world transitions. These are structured, guided experiences designed to help participants reflect, decide, and move forward with confidence. Rather than one-size-fits-all advice, mentorship here is contextual, personal, and rooted in lived experience.",
      highlights: [
        "Campus Programs",
        "Guided Programs",
        "Structured Mentorship Tracks",
      ],
    },
    {
      image: learning,
      name: "LEARNING",
      tagline: "Scalable learning built for depth, not overwhelm.",
      description:
        "Learning at Adwens focuses on accessible, practical education delivered in formats that grow with the learner. From self-paced courses to immersive workshops and bootcamps, each format is introduced progressively — allowing individuals to learn at their own pace while building real understanding and capability.",
      highlights: ["Self-Paced Courses", "Workshops", "Bootcamps"],
    },
  ];

  return (
    <div className="bg-black py-20">
      <div className="container mx-auto flex flex-col gap-24">
        {services.map((service, index) => (
          <div key={index} className="flex gap-12 items-center">
            {/* Left Image */}
            <div className="w-[40%] flex justify-center">
              <Image
                src={service.image}
                alt={service.name}
                width={600}
                height={400}
                className="w-full max-w-[360px]"
              />
            </div>

            {/* Right Content */}
            <div className="w-[60%] flex flex-col gap-6">
              <h1 className="font-inter-tight text-6xl font-bold tracking-wide">
                {service.name}
              </h1>

              <p className="text-2xl italic font-inter-tight tracking-wide text-gray-300">
                {service.tagline}
              </p>

              <p className="text-lg leading-8 text-gray-400">
                {service.description}
              </p>

              {/* Highlights */}
              <ul className="flex flex-wrap gap-3 mt-2">
                {service.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="border border-gray-600 px-4 py-1 rounded-full text-sm text-gray-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <button className="border border-white px-8 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition">
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePageServices;
