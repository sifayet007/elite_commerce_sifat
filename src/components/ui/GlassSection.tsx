import React from "react";
import Button from "./Button";
import { IoIosCheckmarkCircle } from "react-icons/io";
import TextCircleAndSpin from "./TextCircelAndSpin";
import { assets } from "@/assets";
import { IoBagHandleOutline } from "react-icons/io5";

const GlassSection = () => {
  return (
    <div className="max-w-4xl h-fit md:rounded-3xl rounded-xl mx-auto p-[clamp(10px,2.5vw,35px)]  bg-white/35 backdrop-blur-2xl">
      <nav className="flex justify-around outline-2 outline-white bg-white/30 rounded-full md:py-4 md:px-6 py-2 px-3">
        <div className="flex justify-center md:gap-x-2 gap-x-1 items-center text-sm">
          <span>
            {" "}
            <IoIosCheckmarkCircle className="text-green-600 text-[clamp(10px,1.5vw,24px)]" />
          </span>
          <span className="text-[clamp(5px,1.5vw,14px)]">
            No Coding required
          </span>
        </div>
        <div className="flex justify-center md:gap-x-2 gap-x-1 items-center">
          <span>
            {" "}
            <IoIosCheckmarkCircle className="text-green-600 text-[clamp(10px,1.5vw,24px)]" />
          </span>
          <span className="text-[clamp(5px,1.5vw,14px)]">
            1-time charge for lifetime use
          </span>
        </div>
        <div className="flex justify-center md:gap-x-2 gap-x-1 items-center">
          <span>
            {" "}
            <IoIosCheckmarkCircle className="text-green-500 text-[clamp(10px,1.5vw,24px)]" />
          </span>
          <span className="text-[clamp(5px,1.5vw,14px)]">
            Easy to use & intuitive
          </span>
        </div>
        <div className="flex justify-center md:gap-x-2 gap-x-1 items-center">
          <span>
            {" "}
            <IoIosCheckmarkCircle className="text-green-500 text-[clamp(10px,1.5vw,24px)]" />
          </span>
          <span className="text-[clamp(5px,1.5vw,14px)]">
            24/7 Premium support
          </span>
        </div>
      </nav>
      <div className="py-5">
        <TextCircleAndSpin
          text="Elite commerce - Export square"
          logoSrc={assets.orangColorLogo}
          spinDuration="10s"
          size="clamp(100px,10vw,160px)"
          padding="clamp(5px,1.5vw,20px)"
          textSize="clamp(10px,1.5vw,10px)"
          paddingLogo="clamp(5px,1.5vw,20px)"
          letterSpacing="clamp(1px,0.5vw,4px)"
          fontColor="black"
        />
      </div>
      <div className="text-center space-y-2.5">
        <h1 className="text-[clamp(16px,2.5vw,45px)] font-semibold">
          Grab Elite Commerce now before
        </h1>
        <p className="text-[clamp(14px,2.5vw,54px)] font-semibold">
          Price increase
        </p>
        <Button
          label="Purchase Now $90"
          icon={<IoBagHandleOutline />}
          iconPosition="left"
          className="bg-gradient-to-l from-[#FF1810] to-[#FF9153] md:py-2 py-1 md:text-base text-sm md:px-5 px-3 rounded-full cursor-pointer text-white"
        />
      </div>
    </div>
  );
};

export default GlassSection;
