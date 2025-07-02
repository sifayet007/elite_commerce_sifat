import { assets } from "@/assets";
import leftToRightImg from "@/constants/left-to-right";
import Image from "next/image";
import React from "react";

const LeftToRight = () => {
  return (
    <div className="">
      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="flex  gap-x-4 [animation:marqueeLeftToRight_30s_linear_infinite]">
          {[...leftToRightImg, ...leftToRightImg]?.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              className=" h-[clamp(100px,25vw,200px)]"
              alt="screenshot"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftToRight;
