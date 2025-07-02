"use client";
import { assets } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import navbar from "@/constants/navbar";
import { GoArrowUpRight } from "react-icons/go";
import { SiEnvato } from "react-icons/si";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  // const handleClick = () => {
  //   const section = document.getElementById("top-features");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <nav className=" backdrop-blur-sm z-50 fixed top-0 w-full">
      <div className="flex  justify-between max-w-7xl w-full mx-auto items-center px-[clamp(20px,2.5vw,40px)] py-4">
        <div className="flex items-center gap-x-2">
          <span className="md:hidden block">
            <BiMenu className="size-6" />
          </span>
          <Image
            src={assets.eliteCommerece}
            alt="logo"
            className="w-[clamp(94px,10vw,152px)]"
          />
        </div>
        <div>
          <div className="md:flex gap-4 hidden ">
            {navbar?.map(
              (item: { href: string; label: string }, index: number) => (
                <Link
                  href={item.href}
                  // onClick={handleClick}
                  key={index}
                  className="text-[clamp(14px,2.5vw,16px)]"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="flex gap-x-3.5 lg:gap-9">
          <Button
            className="py-2 px-[18px]  !hidden md:!flex outline-1 outline-gray-200 rounded-full"
            label="Support"
            type="button"
            icon={<GoArrowUpRight />}
            iconPosition="right"
          />
          <Button
            className="py-2 px-[clamp(14px,10vw,18px)] outline-1 outline-gray-200 rounded-full bg-gradient-to-br from-[#01904D] text-white   to-[#0CE47F]"
            label="Purchase"
            type="button"
            icon={<SiEnvato />}
            iconPosition="left"
          />
        </div>
      </div>
      <div className="w-full absolute top-0 backdrop-blur-2xl h-screen z-50 hidden">
        <div className="flex flex-col outline-2 h-screen top-0 bg-white w-fit">
          {navbar?.map(
            (item: { href: string; label: string }, index: number) => (
              <Link
                href={item.href}
                key={index}
                className="text-[clamp(14px,2.5vw,16px)]"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
