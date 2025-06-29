"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import testimonials from "@/constants/slider";

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center py-10">
      {/* Avatars */}
      <div className="relative flex items-center justify-center h-24">
        {testimonials.map((item, index) => {
          const position = index - activeIndex;

          let translate = "translate-x-0";
          let zIndex = "z-0";
          let opacity = "opacity-40";
          let scale = "scale-90";

          if (position === 0) {
            translate = "translate-x-0";
            zIndex = "z-10";
            opacity = "opacity-100";
            scale = "scale-110";
          } else if (
            position === -1 ||
            (activeIndex === 0 && index === testimonials.length - 1)
          ) {
            translate = "-translate-x-16";
          } else if (
            position === 1 ||
            (activeIndex === testimonials.length - 1 && index === 0)
          ) {
            translate = "translate-x-16";
          }

          return (
            <Image
              key={index}
              src={item.image}
              alt={item.name}
              width={50}
              height={50}
              className={`rounded-full absolute transition-all duration-500 ease-in-out ${translate} ${opacity} ${scale} ${zIndex}`}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="mt-10 text-center max-w-sm">
        <h3 className="text-lg font-semibold">
          {testimonials[activeIndex].name}
        </h3>
        <p className="text-yellow-500">
          {"⭐".repeat(testimonials[activeIndex].rating)}
        </p>
        <p className="text-gray-600 italic mt-2">
          “{testimonials[activeIndex].comment}”
        </p>
      </div>
    </div>
  );
}
