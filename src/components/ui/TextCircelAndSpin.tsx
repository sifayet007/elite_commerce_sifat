import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

const TextCircelAndSpin = () => {
  return (
    // components/CircularTextSVG.tsx

    <div className="relative">
      <div className=" h-[clamp(100px,10vw,160px)] w-[clamp(100px,10vw,160px)]  [animation:spin_20s_linear_infinite] bg-gradient-to-l from-[#FF9153] to-[#FF1810] rounded-full p-3  mx-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>
          <text
            fill="white"
            className="text-[clamp(12px,2.5vw,13px)]  uppercase"
            fontWeight="semibold"
          >
            <textPath href="#circlePath" startOffset="0%">
              Elite Commerce - expert squate
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute  transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 ">
        <Image src={assets.expertSquteLogo} alt="expertSquteLogo" />
      </div>
    </div>
  );
};

export default TextCircelAndSpin;
