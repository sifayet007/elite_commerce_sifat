import InnovativeSolutionsSection from "@/components/main/InnovativeSolutionsSection";
import Marquee from "@/components/main/Marquee";
import OurFeature from "@/components/main/OurFeature";
import PremiumFeaturesSection from "@/components/main/PremiumFeaturesSection";
import Pricing from "@/components/main/Pricing";
import TopFeature from "@/components/main/TopFeature";
// import LightGreenShadow from "@/components/ui/LightGreenShadow";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <LightGreenShadow /> */}
      <div className="max-w-7xl w-full mx-auto pt-24 px-[clamp(20px,2.5vw,40px)]">
        <InnovativeSolutionsSection />
        <PremiumFeaturesSection />
        <OurFeature />
        <TopFeature />
      </div>
      <Marquee />
      <div className="max-w-7xl w-full mx-auto  px-[clamp(20px,2.5vw,40px)]">
        <Pricing />
      </div>
    </div>
  );
}
