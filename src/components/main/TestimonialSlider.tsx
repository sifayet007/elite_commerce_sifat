"use client";
import testimonials from "@/constants/testimonials";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { FaLocationPin, FaStar } from "react-icons/fa6";

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const total = testimonials?.length;

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (testimonials?.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleAvatars = () => {
    const visibleCount = isLargeScreen ? 9 : 7;
    const half = Math.floor(visibleCount / 2);
    const visible = [];

    for (let i = -half; i <= half; i++) {
      const index = (activeIndex + i + total) % total;
      visible.push({ ...testimonials[index], relativeIndex: i });
    }

    return visible;
  };

  const visibleAvatars = getVisibleAvatars();

  return (
    <div className="w-full px-2 overflow-hidden">
      {/* Avatar Slider Row (Responsive + Scrollable) */}
      <div className="flex items-center gap-2 sm:gap-4 py-6 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 sm:gap-4 mx-auto px-2 min-w-fit">
          {visibleAvatars.map((item, i: number) => {
            const distance = Math.abs(item.relativeIndex);

            let sizeClass = "";
            let opacity = "opacity-30";
            let border = "";

            if (distance === 0) {
              sizeClass =
                "w-[clamp(56px,16vw,135px)] h-[clamp(56px,16vw,135px)]";
              opacity = "opacity-100";
              border = "border-4 border-red-500";
            } else if (distance === 1) {
              sizeClass =
                "w-[clamp(48px,13vw,114px)] h-[clamp(48px,13vw,114px)]";
              opacity = "opacity-80";
            } else if (distance === 2) {
              sizeClass = "w-[clamp(40px,10vw,94px)] h-[clamp(40px,10vw,94px)]";
              opacity = "opacity-60";
            } else if (distance === 3) {
              sizeClass = "w-[clamp(32px,8vw,74px)] h-[clamp(32px,8vw,74px)]";
              opacity = "opacity-40";
            } else if (distance === 4) {
              sizeClass = "w-[clamp(24px,6vw,54px)] h-[clamp(24px,6vw,54px)]";
              opacity = "opacity-20";
            }

            return (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${sizeClass} ${opacity} ${border} shrink-0`}
              >
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={135}
                  height={135}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 sm:gap-5 mb-4">
        <Button label="←" onClick={handlePrev} />
        <Button label="→" onClick={handleNext} />
      </div>

      {/* Testimonial Content */}
      <div className="text-center max-w-3xl mx-auto p-4 sm:p-6 bg-white/70 backdrop-blur rounded-xl shadow-md">
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < testimonials[activeIndex].rating
                  ? "text-orange-500"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Location */}
        <p className="flex items-center justify-center gap-2 text-black/70 mb-2 text-sm sm:text-base">
          <FaLocationPin /> {testimonials[activeIndex].location}
        </p>

        <hr className="my-4 border-black/10" />

        {/* Comment */}
        <p className="text-black/60 mb-2 text-sm sm:text-base">
          {testimonials[activeIndex].comment}
        </p>

        {/* Name */}
        <h2 className="font-semibold text-black text-base sm:text-lg">
          — {testimonials[activeIndex].name}
        </h2>
      </div>
    </div>
  );
};

export default TestimonialSlider;
