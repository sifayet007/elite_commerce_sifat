import { assets } from "@/assets";
import leftToRightImg from "@/constants/left-to-right";
import Image from "next/image";
import React from "react";

const RightToLeft = () => {
  return (
    <div className="transition ">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="flex gap-x-4 [animation:marquee_20s_linear_infinite] ">
          {[...leftToRightImg, ...leftToRightImg]?.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              className="h-[clamp(100px,25vw,200px)]"
              alt="screenshot"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightToLeft;
