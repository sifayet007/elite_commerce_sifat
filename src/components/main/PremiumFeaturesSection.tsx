import { assets } from "@/assets";
import Image from "next/image";
import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import Button from "../ui/Button";
import TextCircleAndSpin from "../ui/TextCircelAndSpin";

const PremiumFeaturesSection = () => {
  return (
    <div className=" space-y-5" id="#demo">
      <div className="md:flex justify-between items-center ">
        <div>
          <h1 className="text-orange-500 font-semibold flex items-center gap-2">
            <span>
              <PiStarFourFill />
            </span>
            Why Choose Elite Commerce ?
          </h1>
          <p className="text-[clamp(18px,2.5vw,32px)] font-bold">
            Stand Out From The Crowd <br /> With
            <span className="text-green-500"> Premium Features.</span>
          </p>
        </div>
        <div>
          <p className="capitalize text-[clamp(12px,2.5vw,20px)] ">
            Enjoy the exclusive features that make <br /> building your web
            pages a joyful moment. <br />
            All in one theme!
          </p>
        </div>
      </div>
      {/* card section  */}
      <div className="md:flex gap-x-5 md:space-y-0 space-y-5">
        <div className="flex md:flex-col justify-between items-center bg-gradient-to-tr from-orange-200 to-[#57feb0]   via-white to-100% from-0%  p-5">
          <div>
            <h1 className="text-[clamp(22px,2.5vw,50px)] font-bold text-orange-500">
              Explore
            </h1>
            <p className="text-[clamp(14px,2.5vw,30px)]">
              Our High-Quality Dmos
            </p>
          </div>
          <TextCircleAndSpin
            text="Elite Commerce - expert squad"
            logoSrc={assets.expertSquteLogo.src}
            fromColor="#FF9153"
            toColor="#FF1810"
            spinDuration="15s"
            size="clamp(120px,12vw,180px)"
            padding="clamp(5px,1.5vw,10px)"
            textSize="clamp(8px,2.5vw,12px)"
            letterSpacing="2px"
            fontColor="#ffffff"
          />
        </div>
        <div className="outline-2 outline-[#E6E6E6] p-5 rounded-md flex-1/2">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
            <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
            <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
          </div>
          <div className="py-[14px]">
            <Image
              className="w-full"
              src={assets.premiumCardImg1}
              alt="premium Card image 1"
            />
          </div>
          <div className="flex justify-between items-center">
            <h1>Elite Commerce</h1>
            <Button
              label="Customer Panel"
              className="md:py-2 lg:px-3.5  py-1 px-2.5 whitespace-nowrap  lg:text-base md:text-sm rounded-full outline-2 outline-[#E6E6E6] cursor-pointer"
            />
          </div>
        </div>
        <div className="outline-2 outline-[#E6E6E6] p-5 rounded-md flex-1/2">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
            <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
            <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
          </div>
          <div className="py-[14px]">
            <Image
              className="w-full"
              src={assets.premiumCardImg1}
              alt="premium Card image 1"
            />
          </div>
          <div className="flex justify-between items-center">
            <h1>Elite Commerce</h1>
            <Button
              label="Admin Panel"
              className="md:py-2 lg:px-3.5  py-1 px-2.5 whitespace-nowrap  lg:text-base md:text-sm rounded-full outline-2 outline-[#E6E6E6] cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* text spnin */}
    </div>
  );
};

export default PremiumFeaturesSection;
