import React from "react";
import TextCircleAndSpin from "../ui/TextCircelAndSpin";
import { assets } from "@/assets";

const OurFeature = () => {
  return (
    <div className="pt-[clamp(32px,4vw,42px)] pb-[clamp(54px,10vw,123px)] text-center bg-[radial-gradient(#C6F2DC_5px,transparent_0)] [background-size:30px_30px] relative bg-[#D0FFE8] rounded-2xl mt-12">
      <div className="z-30 lg:space-y-8 md:space-y-6 space-y-4">
        <h1 className="text-orange-500 relative z-40 text-[clamp(12px,2.5vw,26px)] fotn-semibold ">
          Our Feature
        </h1>
        <h1 className="text-[clamp(18px,2.5vw,44px)] font-bold">
          Powerful Must-Have <br />
          <span className="text-green-500"> Features for</span> Mega Business
        </h1>
        <p className="text-[clamp(12px,2.5vw,18px)] ">
          Enhance your digital venture with top-tier performance, smart <br />
          recommendations, & limitless settings.
        </p>

        <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
          <TextCircleAndSpin
            text="Elite Commerce - expert squad"
            logoSrc={assets.spineLogo3.src}
            fromColor="#4ADE80"
            toColor="#16A34A"
            spinDuration="15s"
            size="clamp(60px,12vw,110px)"
            padding="clamp(5px,1.5vw,10px)"
            paddingLogo="clamp(5px,1.5vw,10px)"
            textSize="clamp(5px,2.5vw,12px)"
            letterSpacing="2px"
          />
        </div>
      </div>
    </div>
  );
};

export default OurFeature;
