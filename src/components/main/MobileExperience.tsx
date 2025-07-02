import mobileExp from "@/constants/mobile-experience";
import Image from "next/image";
import React from "react";

const MobileExperience = () => {
  return (
    <div className="md:my-10 my-5">
      <div className="text-center ">
        <h4 className="md:text-base text-xs">Mobile Optimized</h4>
        <h1 className="text-[clamp(18px,2.5vw,30px)] font-semibold md:my-8 my-5">
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
