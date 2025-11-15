'use client'
import React from "react";
import TextCircleAndSpin from "../ui/TextCircelAndSpin";
import { assets } from "@/assets";
import Button from "../ui/Button";
import { motion } from "framer-motion";


const OurFeature = () => {
  return (
    <div className="pt-[clamp(32px,4vw,42px)] pb-[clamp(54px,10vw,100px)] text-center bg-[radial-gradient(#cdf6e1_3px,transparent_0)] [background-size:30px_30px] relative bg-[#D0FFE8]    rounded-2xl mt-12">
      <div className="absolute  left-0 top-0 w-56 h-56 bg-[#119F5B]/15 rounded-full overflow-hidden blur-2xl z-0"></div>
      <div className="absolute   bottom-0 right-0 w-56 h-56 bg-[#119F5B]/15 rounded-full overflow-hidden blur-2xl z-0"></div>

      <div className="z-30 lg:space-y-8 md:space-y-6 space-y-4">
        <div className="relative inline-block group mt-[30px]">
          <motion.div

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}

          >
            <div

              className="absolute group-hover:translate-y-2 group-hover:-translate-x-2 w-full h-full group-hover:outline-2 group-hover:outline-orange-500 duration-300 rounded-[6px] shadow-md "></div>
            <Button
              label="Our Feature"
              className="relative z-10 px-6 py-2 text-white text-lg font-semibold bg-gradient-to-r from-red-500 to-orange-400 rounded-[6px]  shadow-lg"
            />
          </motion.div>
        </div>
        <div
          className="w-full relative overflow-hidden"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
            className="text-[clamp(18px,2.5vw,44px)] font-bold uppercase"
          >
            Powerful Must-Have <br />
            <span className="text-green-500"> Features for</span> Mega Business
          </motion.h1>

        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[clamp(12px,2.5vw,18px)] ">
          Enhance your digital venture with top-tier performance, smart <br />
          recommendations, & limitless settings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}

          className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
          <TextCircleAndSpin
            text="Elite Commerce - expert squad"
            logoSrc={assets.spineLogo3.src}
            fromColor="#4ADE80"
            toColor="#16A34A"
            spinDuration="15s"
            size="clamp(60px,12vw,110px)"
            padding="clamp(5px,1.5vw,10px)"
            paddingLogo="clamp(5px,1.5vw,10px)"
            textSize="clamp(5px,2.5vw,12px)"
            letterSpacing="2px"
            fontColor="#ffffff"
          />
        </motion.div>
      </div>
    </div>


  );

};

export default OurFeature;
