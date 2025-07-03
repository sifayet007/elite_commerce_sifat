import React from "react";
import Input from "../ui/Input";
import Image from "next/image";
import { assets } from "@/assets";

const GetHelp = () => {
  return (
    <section
      className="flex justify-center relative my-[clamp(100px,10vw,200px)]"
      style={{
        backgroundImage: `url(${assets.getHelpBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-10">
        <div className="bg-gradient-to-br from-[#01904D] to-[#0CE47F] rounded-3xl w-fit md:-rotate-[8deg] relative group  ">
          {/* coin image */}
          <div className="absolute  md:w-[130px] md:h-[87px] w-[80px] h-[50px] md:-left-16 -left-9 md:-top-10 -top-6  group-hover:-rotate-y-[360deg]  duration-700   ">
            <Image src={assets.coin} alt="coin" />
          </div>
          {/* love emoji */}
          <div className="absolute w-[clamp(24px,12vw,60px)] h-[clamp(24px,12vw,60px)] -left-[48px] md:top-20 top-20 md:group-hover:translate-y-52 group-hover:translate-y-36    duration-700   ">
            <Image src={assets.love} alt="love emoji" />
          </div>
          {/* bottom emoji */}
          <div className="absolute  w-[clamp(24px,12vw,60px)] h-[clamp(24px,12vw,60px)]  -right-[48px] md:bottom-14 bottom-20 md:group-hover:-translate-y-[210px] group-hover:-translate-y-36    duration-500   ">
            <Image src={assets.emoji2} alt=" emoji" />
          </div>
          {/* bottom coin */}
          <div className="absolute  md:w-[130] md:h-[87px] w-[80px] h-[50px] md:-righy-16 -right-9 md:-bottom-10 -bottom-6  group-hover:-rotate-y-[360deg]  duration-500 z-0  ">
            <Image src={assets.coin} alt="coin" />
          </div>

          {/* full from */}
          <div
            className="max-w-[430px] w-full md:p-7 bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-3xl p-5 md:rotate-[8deg] z-10
           "
          >
            <h1>
              <span className="text-[clamp(18px,5vw,34px)] text-green-500 font-bold">
                Get Help ?
              </span>
              <span className="text-[clamp(12px,2.5vw,20px)] font-medium">
                Please Write Your Subject, Massage & Notify Your Email.
              </span>
            </h1>
            <div className="flex flex-col md:gap-y-5 gap-y-3  mt-5">
              <div className="flex flex-col gap-y-2.5">
                <label htmlFor="" className="text-[clamp(12px,3.5vw,14px)]">
                  First name*
                </label>
                <Input
                  placeholder="Type Name"
                  type="text"
                  name="name"
                  className="outline-1 outline-black/10 w-full py-[clamp(4px,1.5vw,12px)] px-[clamp(10px,2.5vw,20px)] rounded-md placeholder:text-[clamp(12px,3.5vw,14px)]"
                />
              </div>
              <div className="flex flex-col gap-y-2.5">
                <label htmlFor="" className="text-[clamp(12px,3.5vw,14px)]">
                  Last Name*
                </label>
                <Input
                  placeholder="Type Name"
                  type="text"
                  name="name"
                  className="outline-1 outline-black/10 w-full py-[clamp(4px,1.5vw,12px)] px-[clamp(10px,2.5vw,20px)] rounded-md placeholder:text-[clamp(12px,3.5vw,14px)]"
                />
              </div>
              <div className="flex flex-col gap-y-2.5">
                <label htmlFor="" className="text-[clamp(12px,3.5vw,14px)]">
                  Email*
                </label>
                <Input
                  placeholder="Type Email"
                  type="email"
                  name="email"
                  className="outline-1 outline-black/10 w-full py-[clamp(4px,1.5vw,12px)] px-[clamp(10px,2.5vw,20px)] rounded-md placeholder:text-[clamp(12px,3.5vw,14px)]"
                />
              </div>
              <div className="flex flex-col gap-y-2.5">
                <label htmlFor="" className="text-[clamp(12px,3.5vw,14px)]">
                  Subject*
                </label>
                <Input
                  placeholder="Type Hear"
                  type="text"
                  name="subject"
                  className="outline-1 outline-black/10 w-full py-[clamp(4px,1.5vw,12px)] px-[clamp(10px,2.5vw,20px)] placeholder:text-[clamp(12px,3.5vw,14px)] rounded-md"
                />
              </div>
              <div className="flex flex-col gap-y-2.5">
                <label htmlFor="" className="text-[clamp(12px,3.5vw,14px)]">
                  Your message*
                </label>
                <textarea
                  placeholder="Type here"
                  name="massage"
                  className="outline-1 outline-black/10 w-full py-[clamp(4px,1.5vw,12px)] px-[clamp(10px,2.5vw,20px)] rounded-md placeholder:text-[clamp(12px,3.5vw,14px)]"
                  id=""
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetHelp;
