import React from "react";
import RightToLeft from "../ui/LeftToRight";
import LeftToRight from "../ui/RightToLeft";
import GlassSection from "../ui/GlassSection";
import { assets } from "@/assets";

const Screenshot = () => {
  return (
    <div>
      <div className="bg-[#37393A]">
        <div className="text-center space-y-[clamp(10px,2.5vw,20px)] py-[clamp(20px,2.5vw,30px)]">
          <h1
            className="text-[clamp(12px,2.5vw,16px)] text-white"
            style={{
              backgroundImage: `url(${assets.screenshoteTextBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            Screenshot
          </h1>
          <p className="text-[clamp(18px,2.5vw,40px)] font-bold text-white">
            Explore Our Software Beautiful{" "}
            <span className="text-green-500">Screenshot.</span>
          </p>
          <p className="text-[clamp(12px,2.5vw,18px)] text-white font-medium">
            You deserve real flexibility while building your website and we are
            giving it!
          </p>
        </div>
        <div className="relative ">
          <div className="absolute p-5 left-0 right-0 bottom-0 z-10">
            <GlassSection />
          </div>
          <RightToLeft />
          <LeftToRight />
          <RightToLeft />
          <LeftToRight />
        </div>
      </div>
    </div>
  );
};

export default Screenshot;
