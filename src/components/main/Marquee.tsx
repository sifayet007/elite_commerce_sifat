import React from "react";

const marqueeStyle: React.CSSProperties = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "relative",
};

const marqueeInnerStyle: React.CSSProperties = {
  animation: "marquee 30s linear infinite",
  display: "flex",
};

const Marquee = () => {
  const text =
    "Digital SERVICE AGENCY UI/UX Design Web Development Mobile app Graphic Design";

  return (
    <div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div
        className="bg-gradient-to-r from-[#FF9153] to-[#FF1810] text-white py-3.5 md:mt-12 mt-7 "
        style={marqueeStyle}
      >
        <div
          style={marqueeInnerStyle}
          className="flex w-max animate-marquee gap-x-8"
        >
          {/* Repeat the text at least twice for seamless effect */}
          <div className="text-[clamp(18px,2.5vw,36px)]">{text}</div>
          <div className="text-[clamp(18px,2.5vw,36px)]">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
