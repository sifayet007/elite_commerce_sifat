import React from "react";
import topFeatureCards from "@/constants/top-feature";
import Image from "next/image";
import { assets } from "@/assets";
import Button from "../ui/Button";

const TopFeature = () => {
  return (
    <div className="mt-28">
      <div className="text-center space-y-6">
        <div className="relative inline-block group mt-[30px]">
          <div className="absolute group-hover:translate-y-2 group-hover:-translate-x-2 w-full h-full group-hover:outline-2 group-hover:outline-orange-500 duration-300 rounded-[6px] shadow-md "></div>
          <Button
            label="Top Feature"
            className="relative z-10 px-6 py-2 text-white text-lg font-semibold bg-gradient-to-r from-red-500 to-orange-400 rounded-[6px]  shadow-lg"
          />
        </div>

        <h1 className="text-[18px,2.5vw,30px] font-bold hidden lg:block ">
          Your All-in-One <span className="text-[#119F5B]">eCommerce</span>{" "}
          Solution
        </h1>
        <h1 className="text-[18px,2.5vw,30px] font-bold lg:hidden">
          Product Design Online feature will help your{" "}
          <span className="text-[#119F5B]">Customer easy</span> customize and
          design product online.
        </h1>
        <Image
          src={assets.OurFeatureCircleImg}
          alt="topFeatureImg1"
          className="mt-10 w-full"
        />
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 gap-4 mt-12 ">
        {topFeatureCards?.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center ${card.textColor} ${card.color} md:px-5 md:py-16 px-2.5 py-6 rounded-2xl`}
          >
            <div
              className={`w-[clamp(50px,10vw,60px)] h-[clamp(50px,10vw,60px)]  bg-white rounded-full flex items-center justify-center ${card.outlineClor} `}
            >
              <Image src={card.icon} alt={card.title} />
            </div>
            <h1
              className={`text-[clamp(12px,2.5vw,18px)] font-bold ${card.textColor} mt-6`}
            >
              {card.title}
            </h1>
            <p
              className={`text-[clamp(12px,2.5vw,18px)] text-gray-500 ${card.textColor} mt-3`}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFeature;
