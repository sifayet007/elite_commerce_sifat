import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="font-medium">Pricing</h1>
        <h1 className=" text-center">
          <span className=" text-[26px] font-bold">
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
      <div>
        <div>
          <h1>
            $50
            <span>$60</span>
          </h1>
          <h1>Personal</h1>
          <p>For most businesses that want to otpimize web queries</p>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
