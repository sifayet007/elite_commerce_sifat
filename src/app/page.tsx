import DasktopMobileOptimized from "@/components/main/DasktopMobileOptimized";
import FeatureOfElideCommerce from "@/components/main/FeatureOfElideCommerce";
import Footer from "@/components/main/Footer";
import GetHelp from "@/components/main/GetHelp";
import InnovativeSolutionsSection from "@/components/main/InnovativeSolutionsSection";
import Marquee from "@/components/main/Marquee";
import MobileExperience from "@/components/main/MobileExperience";
import OurFeature from "@/components/main/OurFeature";
import PremiumFeaturesSection from "@/components/main/PremiumFeaturesSection";
import Pricing from "@/components/main/Pricing";
import SCOSection from "@/components/main/SCOSection";
import Screenshot from "@/components/main/Screenshot";
import TechnologyGetaway from "@/components/main/TechnologyGetaway";
import TestimonialSlider from "@/components/main/TestimonialSlider";
import TopFeature from "@/components/main/TopFeature";
// import LightGreenShadow from "@/components/ui/LightGreenShadow";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <LightGreenShadow /> */}
      <div className="max-w-7xl w-full mx-auto pt-24 px-[clamp(20px,2.5vw,40px)] ">
        <InnovativeSolutionsSection />
        <PremiumFeaturesSection />
        <OurFeature />
        <FeatureOfElideCommerce />
        <TopFeature />
        {/* <TestimonialSlider /> */}
      </div>
      <Marquee />
      <div className="max-w-7xl w-full mx-auto  px-[clamp(20px,2.5vw,40px)]">
        <Pricing />
        <DasktopMobileOptimized />
        <TechnologyGetaway />
        <div className="hidden lg:block">
          <SCOSection />
        </div>
        <TestimonialSlider />
        <MobileExperience />
        <GetHelp />
      </div>
      <div>
        <Screenshot />
        <Footer />
      </div>
    </div>
  );
}
