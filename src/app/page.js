import HomePageAboutUs from "@/components/HomePageComponents/HomePageAboutUs";
import HomePageBanner from "@/components/HomePageComponents/HomePageBanner";
import HomePageContactUsSection from "@/components/HomePageComponents/HomePageContactUsSection";
import HomePageMediaInitiativesSection from "@/components/HomePageComponents/HomePageMediaInitiativesSection";
import HomePageOurProjects from "@/components/HomePageComponents/HomePageOurProjects";
import HomePageOurServicesSection from "@/components/HomePageComponents/HomePageOurServicesSection";
import HomePageThirdSection from "@/components/HomePageComponents/HomePageThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <HomePageBanner />
        <HomePageAboutUs />
        <HomePageThirdSection />
        <HomePageOurServicesSection />
        <HomePageMediaInitiativesSection />
        <HomePageContactUsSection />
        {/* <HomePageOurProjects/> */}
      </div>
    </>
  );
}
