"use client";
import { assets } from "@/assets";
import content from "@/constants/sco-contain";
import { ISCOContainType } from "@/interfaces/sco-contain";
import Image from "next/image";
import React, { useState } from "react";

const SCOSection = () => {
  const [active3, setActive3] = useState<number>(0);

  return (
    <div className="my-10">
      <h1 className="text-[44px] font-bold">
        Optimum Online Impact <br /> with Precision{" "}
        <span className="text-green-600">SEO</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-5 items-center">
        <div className="w-full flex flex-col gap-y-5">
          {content?.map((item, index: number) => {
            return (
              <div
                key={index}
                onClick={() => setActive3(index)}
                className={`p-3  rounded-xl outline outline-gray-300 bg-white cursor-pointer ${
                  active3 === index &&
                  "bg-gradient-to-tl from-[#0CE47F] to-[#01904D] text-white p-5 outline-0  "
                }`}
              >
                <h1 className="flex gap-x-1 items-center ">
                  <span>{<item.icon />}</span>
                  <span className="">{item.title}</span>
                </h1>
                {active3 === index && (
                  <p className={`pl-5 text-white`}>{item.description}</p>
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <Image src={assets.SCO} alt="SCO" />
        </div>
      </div>
    </div>
  );
};

export default SCOSection;
