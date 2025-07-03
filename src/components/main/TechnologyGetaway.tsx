import { assets } from "@/assets";
import paymentPlatforms from "@/constants/technology-payment";
import techonicsPlatforms from "@/constants/technologyplatform";
import Image, { StaticImageData } from "next/image";
import React from "react";

const TechnologyGetaway = () => {
  return (
    <div className="mt-[clamp(20px,5vw,80px)]">
      div
      <div className="mt-10">
        <h1></h1>
      </div>
      <div className="shadow-md  rounded-md">
        <h1 className="text-center text-[clamp(16px,2.5vw,24px)] font-semibold text-green-600 pt-7">
          Technologies & platforms
        </h1>
        <div>
          <div className="flex md:flex-nowrap gap-y-5 flex-wrap py-9 md:px-10 p-5  justify-items-center justify-center -space-x-5   ">
            {techonicsPlatforms?.map(
              (
                item: { title: string; image: StaticImageData },
                index: number
              ) => (
                <div
                  key={index}
                  className="outline-1 outline-gray-200 rounded-full hover:bg-gray-100  duration-300  h-[clamp(111px,14vw,180px)]  w-[clamp(111px,14vw,180px)] flex flex-col items-center justify-center gap-y-1"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50} /*  */
                    height={50}
                    className="object-cover"
                  />
                  <p className="text-[clamp(12px,1.5vw,18px)]">{item.title}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="shadow-md  rounded-md mt-5 md:mt-7">
        <h1 className="text-center text-[clamp(16px,2.5vw,24px)] font-semibold text-green-600 pt-7">
          Payment Getaways
        </h1>
        <div>
          <div className="flex md:flex-nowrap gap-y-5 flex-wrap py-9 md:px-10 p-5  justify-items-center justify-center -space-x-5   ">
            {paymentPlatforms?.map(
              (
                item: { title: string; image: StaticImageData },
                index: number
              ) => (
                <div
                  key={index}
                  className="outline-1 outline-gray-200 rounded-full hover:bg-gray-100  duration-300  h-[clamp(111px,14vw,180px)]  w-[clamp(111px,14vw,180px)] flex flex-col items-center justify-center gap-y-1"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50} /*  */
                    height={50}
                    className="object-cover"
                  />
                  <p className="text-[clamp(12px,1.5vw,18px)]">{item.title}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyGetaway;
