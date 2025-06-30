import { assets } from "@/assets";
import navbar from "@/constants/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import TextCircleAndSpin from "../ui/TextCircelAndSpin";
import {
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#171717]  ">
      <div className="max-w-7xl mx-auto px-[clamp(20px,2.5vw,40px)]">
        <div className=" bg-[url('/footerbgimg.png')] bg-cover bg-no-repeat bg-center md:py-10 py-7 md:flex md:gap-x-[clamp(150px,5vw,240px)] ">
          <div className="md:space-y-7 space-y-4">
            <div className="flex md:justify-start justify-center">
              <Image src={assets.footerLogoImg} alt="footer logo" />
            </div>
            <div className="flex gap-x-5 md:justify-start justify-center *:underline *:cursor-pointer">
              {navbar?.map(
                (item: { href: string; label: string }, index: number) => (
                  <Link href={item.href} key={index} className="text-white">
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <p className="text-[#DDDDDD] text-[clamp(12px,2.5vw,18px)] text-center md:text-left">
              Expert Squad is a leader in innovative eCommerce solutions,
              offering Elite Commerce, an all-in-one platform designed to
              simplify online business operations. Our mission is to empower
              businesses to grow, streamline processes, and succeed in the
              digital marketplace with powerful, user-friendly tools.
            </p>

            <div className="flex md:justify-start justify-center">
              <Button
                className="text-white"
                label="Visit Expert Squad.net"
                icon={
                  <Image
                    src={assets.eliteCommerceLogo}
                    alt="Elite Commerce Logo"
                  />
                }
                iconPosition="left"
              />
            </div>
          </div>
          <div>
            <TextCircleAndSpin
              text=" - expert squad, elite commerce"
              size="clamp(100px,12vw,150px)"
              fromColor=""
              toColor=""
              spinDuration="20s"
              padding="clamp(5px,1.5vw,10px)"
              logoSrc={assets.footerSpineLogo.src}
              textSize="clamp(12px,2.5vw,12px)"
            />
            <h1 className="text-white font-semibold text-[clamp(16px,2.5vw,24px)] whitespace-nowrap flex justify-center  md:justify-start">
              Elite-Commerce
            </h1>
          </div>
        </div>
        <div className=" py-[18px] md:space-y-0 space-y-4 flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="order-2 md:order-1">
            <p className="text-white bg-[#242424] text-[clamp(12px,2.5vw,18px)]">
              © 2024 Elite Commerce x Exertsquad.net
            </p>
          </div>
          <div className="flex gap-x-2 order-3 md:order-2 justify-center md:justify-start">
            <span className="outline-2 outline-white/50 p-1.5 rounded-full flex justify-center items-center w-6 h-6">
              <FaInstagram className="text-white" />
            </span>
            <span className="outline-2 outline-white/50 p-1.5 rounded-full flex justify-center items-center w-6 h-6">
              <FaYoutube className="text-white" />
            </span>
            <span className="outline-2 outline-white/50 p-1.5 rounded-full flex justify-center items-center w-6 h-6">
              <FaLinkedin className="text-white" />
            </span>
            <span className="outline-2 outline-white/50 p-1.5 rounded-full flex justify-center items-center w-6 h-6">
              <FaXTwitter className="text-white" />
            </span>
            <span className="outline-2 outline-white/50 p-1.5 rounded-full flex justify-center items-center w-6 h-6">
              <FaPinterest className="text-white" />
            </span>
          </div>
          <div className="flex gap-x-3.5 text-white  order-2 md:order-3">
            <span className="text-[clamp(12px,2.5vw,18px)]">
              Privacy Policy
            </span>
            <span className="text-[clamp(12px,2.5vw,18px)]">Refund Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
