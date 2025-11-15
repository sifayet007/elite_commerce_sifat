"use client";

import { assets } from "@/assets";
import TextCircleAndSpin from "../ui/TextCircelAndSpin";
import { PiStarFourFill } from "react-icons/pi";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FeatureCard from "../card/FeatureCard";

const PremiumFeaturesSection = () => {
  const sectionRef = useRef(null);

  // Scroll Animation: scroll Y based motion values
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "start end"],
  });


  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <motion.div className="space-y-5 mt-[500px]" id="demo">

      {/* Header Section */}
      <div ref={sectionRef} className="md:flex justify-between items-center">

        {/* LEFT TEXT */}
        <motion.div
          style={{ x: xLeft }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 15,
          }}
        >
          <h1 className="text-orange-500 font-semibold flex items-center gap-2">
            <PiStarFourFill />
            Why Choose Elite Commerce?
          </h1>

          <p className="text-[clamp(18px,2.5vw,32px)] font-bold">
            Stand Out From The Crowd <br />
            With <span className="text-green-500">Premium Features.</span>
          </p>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          style={{ x: xRight }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 15,
          }}
          className="md:mt-0 mt-5"
        >
          <p className="capitalize text-[clamp(12px,2.5vw,20px)]">
            Enjoy the exclusive features that make your web page building joyful.
            <br className="md:flex hidden" />
            All in one theme!
          </p>
        </motion.div>
      </div>

      {/* Card section */}
      <div className="md:flex gap-x-5 md:space-y-0 space-y-5">

        {/* First Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex md:flex-col justify-between items-center bg-gradient-to-tr from-orange-200 to-[#57feb0] via-white p-5"
        >
          <div>
            <h1 className="text-[clamp(22px,2.5vw,50px)] font-bold text-orange-500">
              Explore
            </h1>
            <p className="text-[clamp(14px,2.5vw,30px)]">Our High-Quality Demos</p>
          </div>

          <TextCircleAndSpin
            text="Elite Commerce - expert squad"
            logoSrc={assets.expertSquteLogo.src}
            fromColor="#FF9153"
            toColor="#FF1810"
            spinDuration="15s"
            size="clamp(120px,12vw,180px)"
            padding="clamp(5px,1.5vw,10px)"
            textSize="clamp(8px,2.5vw,12px)"
            letterSpacing="2px"
            fontColor="#ffffff"
          />
        </motion.div>

        {/* Right Side Cards */}
        <FeatureCard delay={0.5} image={assets.premiumCardImg1} label="Customer Panel" />
        <FeatureCard delay={0.8} image={assets.premiumCardImg1} label="Admin Panel" />
      </div>
    </motion.div>
  );
};

export default PremiumFeaturesSection;
