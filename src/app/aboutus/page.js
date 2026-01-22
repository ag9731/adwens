import AbousWhyUs from "@/components/AboutPageComponents/AbousWhyUs";
import AboutUsBanner from "@/components/AboutPageComponents/AboutUsBanner";
import AboutUsHowWeAreDifferent from "@/components/AboutPageComponents/AboutUsHowWeAreDifferent";
import AboutUsMissionVision from "@/components/AboutPageComponents/AboutUsMissionVision";
import HomePageContactUsSection from "@/components/HomePageComponents/HomePageContactUsSection";
import HomePageThirdSection from "@/components/HomePageComponents/HomePageThirdSection";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutUsBanner />
      <AbousWhyUs />
      <HomePageThirdSection />
      {/* <AboutUsMissionVision/> */}
      {/* <AboutUsHowWeAreDifferent/> */}
      <HomePageContactUsSection />
    </div>
  );
};

export default page;
