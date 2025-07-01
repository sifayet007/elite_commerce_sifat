"use client";
import React, { act } from "react";
import Button from "../ui/Button";
import CustomerPanel from "../ui/CustomerPanel";
import AdminPanel from "../ui/AdminPanel";

const FeatureOfElideCommerce = () => {
  const [activeIndex, setActiveIndex] =
    React.useState<string>("customer-panel");
  return (
    <div className="mt-24">
      <div className="text-center">
        <h1 className="text-[clamp(16px,2.5vw,30px)] font-semibold">
          Solution-wise Features of{" "}
          <span className="text-green-600">Elite Commerce</span>
        </h1>
        <p className="md:text-sm lg:text-base text-xs">
          Meet the dynamic features of{" "}
          <span className="text-green-600">Elite Commerce</span> that comes with
          Customer Panel, admin panel, and other solutions.
        </p>
        <div className="flex gap-x-5 justify-center">
          <div className="relative inline-block group mt-[30px]">
            <div
              className={`absolute group-hover:translate-y-2 group-hover:-translate-x-2 w-full h-full group-hover:outline-2 group-hover:outline-green-500 duration-300 rounded-[6px] shadow-md`}
            ></div>
            <Button
              onClick={() => setActiveIndex("customer-panel")}
              label="Customer Panel"
              className={`relative z-10 md:px-6 px-3 py-2 whitespace-nowrap md:text-lg text-xs  font-semibold  hover:bg-gradient-to-tr hover:text-white text-green-500  hover:shadow-sm hover:shadow-green-500 from-[#0CE47F] to-[#01904D] rounded-[6px] cursor-pointer  shadow-lg ${
                activeIndex === "customer-panel" &&
                "text-white bg-gradient-to-tr shadow-sm shadow-green-500 from-[#0CE47F] to-[#01904D]"
              }`}
            />
          </div>
          <div className="relative inline-block group mt-[30px]">
            <div
              className={`absolute group-hover:translate-y-2 group-hover:translate-x-2 w-full h-full group-hover:outline-2 group-hover:outline-green-500 duration-300 rounded-[6px] shadow-md `}
            ></div>
            <Button
              onClick={() => setActiveIndex("admin-panel")}
              label="Customer Panel"
              className={`relative z-10 md:px-6 px-3 py-2 whitespace-nowrap md:text-lg text-xs hover:bg-gradient-to-tr hover:text-white text-green-500  hover:shadow-sm hover:shadow-green-500 from-[#01904D] to-[#0CE47F] rounded-[6px] cursor-pointer  shadow-lg ${
                activeIndex === "admin-panel" &&
                "text-white bg-gradient-to-tr shadow-sm shadow-green-500 from-[#01904D] to-[#0CE47F]"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        {activeIndex === "customer-panel" && <CustomerPanel />}
        {activeIndex === "admin-panel" && <AdminPanel />}
      </div>
    </div>
  );
};

export default FeatureOfElideCommerce;
