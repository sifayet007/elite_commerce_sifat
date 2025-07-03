import { assets } from "@/assets";
import mobileExp from "@/constants/mobile-experience";
import Image from "next/image";
import React from "react";

const MobileExperience = () => {
  return (
    <div className=" mt-[clamp(30px,5vw,80px)]">
      <div className="text-center ">
        <h4
          className=" text-[clamp(10px,2.5vw,16px)] text-center w-[clamp(100px,25vw,200px)] mx-auto py-2 rounded-l-full text-white"
          style={{
            backgroundImage: `url(${assets.mobileOptimiziedTextBg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          Mobile Optimized
        </h4>

        <h1 className="text-[clamp(18px,2.5vw,30px)] font-semibold my-[clamp(20px,2.5vw,30px)]">
          Elite Commerce Customer Panel & Admin Panel{" "}
          <span className="text-green-500">Responsive</span> Design .
        </h1>
      </div>
      <div className="flex overflow-auto  flex-row gap-x-5 md:gap-x-5">
        {mobileExp?.map((item, index) => (
          <div key={index}>
            <Image
              src={item.image}
              alt={item.title}
              className="min-w-[190px]"
            />
            <h1 className="text-[clamp(14px,2.5vw,18px)] font-semibold text-center mt-2.5 md:mt-3">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileExperience;
