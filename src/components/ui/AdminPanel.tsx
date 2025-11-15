import React, { useEffect } from "react";
import customerFeatures from "@/constants/elid-commerce-feature";
import Button from "./Button";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion"; motion

const AdminPanel = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  useEffect(() => {
    if (customerFeatures.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % customerFeatures.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [customerFeatures.length]);
  return (

    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: false }}
    >

      <div className=" flex flex-col md:flex-row gap-y-5 md:gap-x-5">
        {/* Left Button List */}
        <div className="md:bg-gradient-to-tl from-[#0CE47F]/10 md:block to-[#01904D]/10 rounded-xl md:flex-1 w-full">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-tl from-[#0CE47F] to-[#01904D] pl-4 pt-4 text-lg md:text-xl md:text-left text-center">
            All Feature
          </h1>
          <div className=" md:p-8 space-y-3.5 flex md:flex-col flex-row overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:space-x-0 space-x-3.5">
            {customerFeatures?.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Button
                  key={index}
                  className={`py-2 md:px-5 px-3 h-fit  w-full text-[clamp(12px,2.5vw,16px)]  font-medium rounded-full cursor-pointer whitespace-nowrap  ${
                    activeIndex === index
                      ? "bg-gradient-to-br from-[#0CE47F] to-[#01904D] text-white"
                      : "bg-[#119F5B]/5 outline-1 outline-white"
                  }`}
                  label={item.title}
                  onClick={() => setActiveIndex(index)}
                  icon={<IconComponent className="md:block hidden" />}
                  iconPosition="left"
                />
              );
            })}
          </div>
        </div>

        {/* Right Feature Boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}

          transition={{ duration: 0.35, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-x-12 bg-gradient-to-tl from-[#0CE47F]/10 to-[#01904D]/10 rounded-xl py-8 px-4 md:px-12">
          <AnimatePresence mode="wait">
          {[1, 2].map((_, i) => {
            const data =
              i === 0
                ? customerFeatures[activeIndex].image1
                : customerFeatures[activeIndex].image2;
            const heading =
              i === 0
                ? customerFeatures[activeIndex].heading1
                : customerFeatures[activeIndex].heading2;
            const desc =
              i === 0
                ? customerFeatures[activeIndex].description1
                : customerFeatures[activeIndex].description2;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                key={`${activeIndex}-${i}`}
                className={`bg-white relative p-4 sm:p-5 overflow-hidden rounded-xl w-full max-w-[350px] ${
                  i === 0
                    ? "transform -translate-y-3"
                    : "transform translate-y-3"
                }`}
              >
                {/* Shadow circles */}
                <div className="h-20 w-20 absolute rounded-full bg-gradient-to-tl from-[#0CE47F] shadow-[0_20px_50px_#0CE47F] top-0 left-0 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="h-20 w-20 absolute rounded-full bg-gradient-to-tl from-[#FF9153] shadow-[0_20px_50px_#FF9153] top-0 right-0 transform translate-x-1/2 -translate-y-1/2" />

                {/* Image */}
                <div className="w-full max-w-[300px] mx-auto">
                  <Image
                    src={data}
                    alt="feature image"
                    sizes="100vw"
                    width={0}
                    height={0}
                    priority
                    className="w-full h-auto relative z-10 aspect-auto object-cover"
                  />
                </div>

                {/* Text */}
                <h1 className="flex flex-wrap gap-x-1 mt-4 text-sm md:text-base font-semibold">
                  {heading}
                  <span className="text-red-600 underline">
                    {customerFeatures[activeIndex].highlight}
                  </span>
                </h1>
                <p className="text-xs md:text-sm text-gray-700 mt-1 line-clamp-2">
                  {desc}
                </p>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>
        </div>
    </motion.div> 
  );
};

export default AdminPanel;
