import Image from "next/image";
import React from "react";

type TextCircleAndSpinProps = {
  text: string;
  logoSrc: string;
  fromColor?: string;
  toColor?: string;
  spinDuration?: string; // e.g., "20s", "10s"
  size?: string; // e.g., "clamp(100px,10vw,160px)"
  padding?: string; // e.g., "10px"
  anmationLogo?: string;
  textSize?: string;
  paddingLogo?: string;
  letterSpacing?: string; // e.g., ""
};

const TextCircleAndSpin = ({
  text,
  logoSrc,
  fromColor,
  toColor,

  spinDuration = "20s",
  size = "clamp(100px,10vw,160px)",
  padding = "clamp(10px,2.5vw,20px)",
  textSize,
  paddingLogo,
  letterSpacing,
}: TextCircleAndSpinProps) => {
  return (
    <div className="relative">
      <div
        className={`rounded-full   mx-auto`}
        style={{
          height: size,
          width: size,
          background: `linear-gradient(to left, ${fromColor}, ${toColor})`,
          animation: `spin ${spinDuration} linear infinite`,
          padding: `${padding}`,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>
          <text
            fill="white"
            className="tracking-widest uppercase"
            fontWeight="semibold"
            fontSize={textSize}
            style={{
              letterSpacing: `${letterSpacing}`,
            }}
          >
            <textPath href="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 `}
        style={{
          padding: paddingLogo,
        }}
      >
        <Image src={logoSrc} alt="Center Logo" width={50} height={50} />
      </div>
    </div>
  );
};

export default TextCircleAndSpin;
