import React from "react";
import Button from "../ui/Button";
import VideoPlayer from "../ui/VideoPlayer";

const InnovativeSolutionsSection = () => {
  return (
    <div className="text-center p-5 bg-[linear-gradient(to_right,#FFE5E5_1px,transparent_1px),linear-gradient(to_bottom,#FFE5E5_1px,transparent_1px)] bg-[size:150px_150px]">
      <h1 className="text-[clamp(16px,2.5vw,50px)] font-bold uppercase">
        Innovative Solutions for Your <br /> E-Commerce{" "}
        <span className="text-green-600">Success.</span>
      </h1>
      <p className="text-[clamp(9px,1.5vw,18px)] text-gray-500 mt-4 font-semibold capitalize">
        the best <span className="text-orange-500"> e-Commerce</span>{" "}
        marketplace solution, You Can operate and{" "}
        <span className="text-green-500">control</span>
        <br /> your businesses in Every place with{" "}
        <span className="text-red-500">Elite Commerce.</span>
      </p>
      <div className="relative inline-block group mt-[clamp(16px,2.5vw,32px)]">
        <div className="absolute group-hover:translate-y-2 group-hover:-translate-x-2 w-full h-full group-hover:outline-2 group-hover:outline-orange-500 duration-300 rounded-[6px] shadow-md "></div>
        <Button
          label="Buy Now $99"
          className="relative z-10 px-6 py-2 text-white text-[clamp(12px,2.5vw,16px)] font-semibold bg-gradient-to-r from-red-500 to-orange-400 rounded-[6px]  shadow-lg"
        />
      </div>
      <div className="flex justify-center mt-[clamp(20px,2.5vw,40px)] w-full md:p-[60px]">
        <VideoPlayer />
      </div>
    </div>
  );
};

export default InnovativeSolutionsSection;
