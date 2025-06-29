import React from "react";

const LightGreenShadow = () => {
  return (
    <div className="flex justify-center">
      <div
        className="w-24 h-24 rounded-full bg-[#ccffe0]"
        style={{
          boxShadow: `
            0 0 20px 10px #ccffe0,
            0 0 40px 20px #ccffe0,
            0 0 60px 30px #ccffe0,
            0 0 80px 40px #ccffe0
          `,
        }}
      ></div>
    </div>
  );
};

export default LightGreenShadow;
