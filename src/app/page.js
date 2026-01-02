import HomePageAboutUs from "@/components/HomePageComponents.jsx/HomePageAboutUs";
import HomePageBanner from "@/components/HomePageComponents.jsx/HomePageBanner";
import HomePageContactUsSection from "@/components/HomePageComponents.jsx/HomePageContactUsSection";
import HomePageMediaInitiativesSection from "@/components/HomePageComponents.jsx/HomePageMediaInitiativesSection";
import HomePageOurProjects from "@/components/HomePageComponents.jsx/HomePageOurProjects";
import HomePageOurServicesSection from "@/components/HomePageComponents.jsx/HomePageOurServicesSection";
import HomePageThirdSection from "@/components/HomePageComponents.jsx/HomePageThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <div>
       <HomePageBanner/>
       <HomePageAboutUs/>
       <HomePageThirdSection/>
       <HomePageOurServicesSection/>
       <HomePageMediaInitiativesSection/>
       <HomePageContactUsSection/>
       {/* <HomePageOurProjects/> */}
     </div>
    </>
  );
}
