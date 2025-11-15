"use client";
import React from "react";
import Button from "../ui/Button";
import VideoPlayer from "../ui/VideoPlayer";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="
        text-center p-5 
        bg-[linear-gradient(to_right,#FFE5E5_1px,transparent_1px),
        linear-gradient(to_bottom,#FFE5E5_1px,transparent_1px)]
        bg-[size:150px_150px]
      "
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[clamp(16px,2.5vw,50px)] font-bold uppercase"
      >
        Innovative Solutions for Your <br />
        E-Commerce{" "}
        <span className="text-green-600">Success.</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[clamp(9px,1.5vw,18px)] text-gray-500 mt-4 font-semibold capitalize"
      >
        The best <span className="text-orange-500">E-Commerce</span> marketplace
        solution, You can operate and{" "}
        <span className="text-green-500">control</span>
        <br /> your businesses in every place with{" "}
        <span className="text-red-500">Elite Commerce.</span>
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative inline-block group mt-[clamp(16px,2.5vw,32px)]"
      >
        <div
          className="
            absolute w-full h-full rounded-[6px] shadow-md duration-300
            group-hover:translate-y-2 group-hover:-translate-x-2 
            group-hover:outline-2 group-hover:outline-orange-500
          "
        ></div>

        <Button
          label="Buy Now $99"
          className="
            relative z-10 px-6 py-2 text-white text-[clamp(12px,2.5vw,16px)] 
            font-semibold hover:scale-3d bg-gradient-to-r from-red-500 to-orange-400 
            rounded-[6px] shadow-lg
          "
        />
      </motion.div>

      {/* Video Section */}
      <div className="flex justify-center mt-[clamp(20px,2.5vw,40px)] w-full md:p-[60px]">
        <VideoPlayer />
      </div>
    </motion.section>
  );
};

export default Hero;
