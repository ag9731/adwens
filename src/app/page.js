import HomePageAboutUs from "@/components/HomePageComponents.jsx/HomePageAboutUs";
import HomePageBanner from "@/components/HomePageComponents.jsx/HomePageBanner";
import HomePageThirdSection from "@/components/HomePageComponents.jsx/HomePageThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <div>
       <HomePageBanner/>
       <HomePageAboutUs/>
       <HomePageThirdSection/>
     </div>
    </>
  );
}
