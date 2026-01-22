import ContentPageEducation from "@/components/ContentPageComponents/ContentPageEducation";
import ContentPageEntertainment from "@/components/ContentPageComponents/ContentPageEntertainment";
import ContentPageHero from "@/components/ContentPageComponents/ContentPageHero";
import HomePageContactUsSection from "@/components/HomePageComponents/HomePageContactUsSection";
import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <ContentPageHero />
      <ContentPageEducation />
      <ContentPageEntertainment />
      <HomePageContactUsSection />
    </div>
  );
};

export default page;
