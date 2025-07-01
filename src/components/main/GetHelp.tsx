import React from "react";
import Input from "../ui/Input";
import Image from "next/image";
import { assets } from "@/assets";

const GetHelp = () => {
  return (
    <div className="flex justify-center relative ">
      <div className=" bg-gradient-to-br from-[#01904D] to-[#0CE47F] rounded-3xl w-fit -rotate-[8deg] relative  group">
        <div className="absolute  w-[130] h-[87px] -left-16 group-hover:-rotate-y-[360deg]  duration-700  -top-10">
          <Image src={assets.coin} alt="coin" />
        </div>
        <div>
          <Image src={""} alt="" />
        </div>
        <div className="max-w-[454px] md:p-7 bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-3xl p-5 rotate-[8deg] ">
          <h1>
            <span className="text-[34px] text-green-500 font-bold">
              Get Help ?
            </span>
            <span className="text-[20px] font-medium">
              Please Write Your Subject, Massage & Notify Your Email.
            </span>
          </h1>
          <div className="flex flex-col gap-y-5 mt-5">
            <div className="flex flex-col gap-y-2.5">
              <label htmlFor="" className="text-sm">
                First name*
              </label>
              <Input
                placeholder="Type Name"
                type="text"
                name="name"
                className="outline-1 outline-black/10 w-full py-3 px-5 rounded-md placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-y-2.5">
              <label htmlFor="" className="text-sm">
                Last Name*
              </label>
              <Input
                placeholder="Type Name"
                type="text"
                name="name"
                className="outline-1 outline-black/10 w-full py-3 px-5 rounded-md placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-y-2.5">
              <label htmlFor="" className="text-sm">
                Email*
              </label>
              <Input
                placeholder="Type Email"
                type="email"
                name="email"
                className="outline-1 outline-black/10 w-full py-3 px-5 rounded-md placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-y-2.5">
              <label htmlFor="" className="text-sm">
                Subject*
              </label>
              <Input
                placeholder="Type Hear"
                type="text"
                name="subject"
                className="outline-1 outline-black/10 w-full py-3 px-5 placeholder:text-sm rounded-md"
              />
            </div>
            <div className="flex flex-col gap-y-2.5">
              <label htmlFor="" className="text-sm">
                Your message*
              </label>
              <textarea
                placeholder="Type here"
                name="massage"
                className="outline-1 outline-black/10 w-full py-3 px-5 rounded-md placeholder:text-sm"
                id=""
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetHelp;
