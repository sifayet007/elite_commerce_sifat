"use client";
import { assets } from "@/assets";
import desktopMobileData from "@/constants/dasktop-mobile-ptimized";
import Image from "next/image";
import React from "react";

const DasktopMobileOptimized = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div>
      <div className="text-center">
        <h1
          className="text-[clamp(10px,2.5vw,16px)] text-white bg-no-repeat bg-center bg-cover  w-[250px] md:w-[300px] px-3 md:py-3 py-2  mx-auto  rounded-l-full"
          style={{
            backgroundImage: `url(${assets.mobileOptimiziedTextBg.src})`,
          }}
        >
          Desktop Mobile Optimized
        </h1>
        <p className="text-[clamp(20px,2.5vw,40px)] font-bold">
          Furthermore, The Elite Commerce is <br /> Mobile-friendly{" "}
          <span className="text-green-500">Design</span>
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-y-5 lg:gap-x-5 items-center  md:bg-gradient-to-tl md:from-[#0CE47F]/5 md:to-[#01904D]/5  md:py-10 md:px-7 ">
        <div className="w-full max-h-[504px] overflow-auto flex flex-row md:flex-col p-5 gap-x-4 gap-y-5">
          {desktopMobileData?.map((item, index) => (
            <div
              key={index}
              className={`md:py-4 py-2 md:px-5 px-2 bg-white group hover:outline-green-500 hover:outline-2 rounded-md outline-black/10 duration-300 min-w-[200px] ${
                activeIndex === index && "outline-green-500 outline-2 "
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h1
                className={`mb-2.5 group-hover:text-green-500 text-[clamp(14px,2.5vw,18px)] duration-300  ${
                  activeIndex === index && "text-green-500 "
                }`}
              >
                {item.title}
              </h1>
              <p
                className={`md:line-clamp-none line-clamp-3 group-hover:text-green-500 text-[clamp(12px,2.5vw,16px)] duration-300 ${
                  activeIndex === index && "text-green-500  "
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-ful md:bg-none md:p-0 p-5 md:rounded-none rounded-md bg-gradient-to-tl from-[#0CE47F]/5 to-[#01904D]/5">
          <Image
            src={desktopMobileData[activeIndex].image}
            alt="desktop mobile image"
          />
        </div>
      </div>
    </div>
  );
};

export default DasktopMobileOptimized;
