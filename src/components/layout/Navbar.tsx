"use client";
import { assets } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Button from "../ui/Button";
import navbar from "@/constants/navbar";
import { GoArrowUpRight } from "react-icons/go";
import { SiEnvato } from "react-icons/si";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className=" backdrop-blur-sm z-40 fixed top-0 w-full">
      <div className="flex justify-between max-w-7xl w-full mx-auto items-center px-[clamp(20px,2.5vw,40px)] py-4">
        <div className="flex items-center gap-x-2">
          <span className="md:hidden block">
            <BiMenu className="size-8" onClick={() => setIsOpen(true)} />
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
                  key={index}
                  href={item.href}
                  // onClick={handleClick}

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
            className="py-2 px-[clamp(14px,10vw,18px)]  bg-gradient-to-r hover:from-red-500 hover:to-orange-400 from-[#0CE47F] to-[#01904D] duration-300 transform transition-colors  text-white text-[clamp(12px,2.5vw,16px)] cursor-pointer outline-1 outline-gray-200 rounded-full   "
            label="Purchase"
            type="button"
            icon={<SiEnvato />}
            iconPosition="left"
          />
        </div>
      </div>
      {isOpen && (
        <div
          className={`fixed h-screen w-full bg-white/50  top-0 z-50 s transform transition-transform duration-1000 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar */}
          <div
            className={`absolute top-0 left-0 h-full w-64 bg-white p-5 rounded-r-2xl shadow-lg transform transition-transform duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <Image src={assets.eliteCommerece} alt="logo" className="w-20" />
              <RxCross2
                className="text-2xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <hr className="border-black/20 mb-4" />

            {navbar?.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="text-lg block py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
