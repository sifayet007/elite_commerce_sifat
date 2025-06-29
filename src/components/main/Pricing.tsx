import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../ui/Button";
import { BiSolidPurchaseTag } from "react-icons/bi";

const Pricing = () => {
  return (
    <div className="my-10 ">
      <div className="text-center">
        <div className="relative inline-block group mt-[30px]">
          <div className="absolute group-hover:translate-y-2 group-hover:-translate-x-2 w-full h-full group-hover:outline-2 group-hover:outline-green-500 duration-300 rounded-[6px] shadow-md "></div>
          <Button
            label="Pricing"
            className="relative z-10 px-6 py-2 text-white text-lg font-semibold bg-gradient-to-br from-[#0CE47F] to-[#01904D] rounded-[6px]  shadow-lg"
          />
        </div>
        <h1 className=" text-center mt-3.5 mb-2.5 md:mt-5 md:mb-5">
          <span className=" text-[clamp(18px,2.5vw,26px)] font-bold">
            Elite Commerce{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#01904D] to-[#0CE47F]">
              {" "}
              Pricing
            </span>
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9153] to-[#FF1810] text-sm font-medium">
            (Life Time Deals)
          </span>
        </h1>
        <p>
          Choose the right package that fits your eCommerce business and dive
          into the action right now. personal and Commercial packages Enjoy!
        </p>
      </div>
      {/* card section  */}
      <div className=" flex md:flex-row flex-col items-center md:gap-y-0 gap-y-5 justify-center mt-10">
        {/* card 1 */}
        <div className="outline-2 outline-black/10 p-[30px] w-[300px] rounded-2xl">
          <h1>
            <span className="text-4xl font-bold"> $95</span>
            <span className="line-through">$110</span>
          </h1>
          <h1 className="text-[28px]">Personal</h1>
          <p className="mt-[15px] mb-[10px] text-sm">
            For most businesses that want to otpimize web queries
          </p>
          <div className="space-y-5">
            <p className="flex gap-x-2.5 items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#01904D] to-[#0CE47F]">
                <IoIosCheckmarkCircle className="text-green-500 text-lg" />
              </span>
              <span>Customer Panel</span>
            </p>
            <p className="flex gap-x-2.5 items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#01904D] to-[#0CE47F]">
                <IoIosCheckmarkCircle className="text-green-500 text-lg" />
              </span>
              <span>Admin Panel</span>
            </p>
            <p className="flex gap-x-2.5 items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#01904D] to-[#0CE47F]">
                <IoIosCheckmarkCircle className="text-green-500 text-lg" />
              </span>
              <span>Mega Menu</span>
            </p>
            <p className="flex gap-x-2.5 items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#01904D] to-[#0CE47F]">
                <IoIosCheckmarkCircle className="text-green-500 text-lg" />
              </span>
              <span>Quick View</span>
            </p>
            <p className="flex gap-x-2.5 items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#01904D] to-[#0CE47F]">
                <IoIosCheckmarkCircle className="text-green-500 text-lg" />
              </span>
              <span> Quick Order </span>
            </p>
            <p className="flex gap-x-2.5 items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#01904D] to-[#0CE47F]">
                <IoIosCheckmarkCircle className="text-green-500 text-lg" />
              </span>
              <span>Live Massage</span>
            </p>
            <Button
              label="Include"
              className="text-white py-1 px-2  bg-gradient-to-tl  from-[#0CE47F] to-[#01904D] rounded-full"
            />
            <p className="flex gap-x-2.5 items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#01904D] to-[#0CE47F]">
                <IoIosCheckmarkCircle className="text-green-500 text-lg" />
              </span>
              <span>Commercial use permission</span>
            </p>
            <Button
              className="py-2 px-9 bg-gradient-to-tl  from-[#0CE47F] to-[#01904D] text-white font-medium rounded-full cursor-pointer"
              label="Purchase Now"
              icon={<BiSolidPurchaseTag />}
              iconPosition="left"
            />
          </div>
        </div>
        {/* card 2 */}
        <div className="outline-2 outline-black/10 p-[30px] w-[300px] rounded-2xl h-fit md:transform md:-translate-x-[25px]  bg-gradient-to-br from-[#01904D] to-[#0CE47F]">
          <h1>
            <span className="text-4xl font-bold text-white"> $50</span>
            <span className="line-through text-white">$60</span>
          </h1>
          <h1 className="text-[28px] text-white">Personal</h1>
          <p className="mt-[15px] mb-[10px] text-sm text-white">
            For most businesses that want to otpimize web queries
          </p>
          <div className="space-y-5">
            <p className="flex gap-x-2.5 items-center">
              <span className="">
                <IoIosCheckmarkCircle className="text-white text-lg" />
              </span>
              <span className="text-white">Customer Panel</span>
            </p>
            <p className="flex gap-x-2.5 items-center">
              <span className="">
                <IoIosCheckmarkCircle className="text-white text-lg" />
              </span>
              <span className="text-white">Admin Panel</span>
            </p>
            <p className="flex gap-x-2.5 items-center">
              <span className="">
                <IoIosCheckmarkCircle className="text-white text-lg" />
              </span>
              <span className="text-white">Mega Menu</span>
            </p>
            <p className="flex gap-x-2.5 items-center">
              <span className="">
                <IoIosCheckmarkCircle className="text-white text-lg" />
              </span>
              <span className="text-white">Quick View</span>
            </p>
            <p className="flex gap-x-2.5 items-center">
              <span className="">
                <IoIosCheckmarkCircle className="text-white text-lg" />
              </span>
              <span className="text-white"> Quick Order </span>
            </p>
            <p className="flex gap-x-2.5 items-center">
              <span className="">
                <IoIosCheckmarkCircle className="text-white text-lg" />
              </span>
              <span className="text-white">Live Message</span>
            </p>

            <div className=" rounded-full bg-white w-fit h-fit mt-7">
              <Button
                className="py-2 px-9 text-transparent bg-clip-text  bg-gradient-to-br from-[#01904D] to-[#0CE47F] font-medium  cursor-pointer "
                label="Purchase Now"
                icon={<BiSolidPurchaseTag className="text-green-600" />}
                iconPosition="left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
