'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";


const VideoPlayer = () => {
  const rafContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rafContainer,
    offset: ["center start", "start end"]
  })
  // transform values
  const scale = useTransform(scrollYProgress, [0, 1], [1.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["50vh", "0vh"]);

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.95, 1]);


  return (
    <section className="w-full flex justify-center items-center">
      <motion.div
        ref={rafContainer}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}

        style={{ scale, y, opacity, }}
        transition={{
          scale: {
            type: 'spring',
            stiffness: 50,
            damping: 25
          },
          y: {
            type: 'spring',
            stiffness: 50,
            damping: 25
          },
        }}

        className=" aspect-auto  w-[clamp(800px,10vw,350px)] h-[clamp(400px,10vw,190px)]">
      <iframe
        className="w-full h-full rounded-2xl"
        src="https://www.youtube.com/embed/O5TJYsqwR94?si=lY7yoV4AzVl1637m&start=15"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </motion.div>
    </section>
  );
};

export default VideoPlayer;

// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from "react";

// const VideoPlayer = () => {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["center start", "start end"],
//   });

//   // width grows with scroll (no overflow)
//   const width = useTransform(scrollYProgress, [0, 1], ["60%", "100%"]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

//   return (
//     <motion.section
//       style={{ width, opacity }}
//       transition={{
//         width: { type: "spring", stiffness: 60, damping: 20 },
//       }}
//       ref={containerRef}
//       className="w-full flex justify-center items-center py-[200px]"
//     >
//       <motion.div

//         className="aspect-video rounded-2xl overflow-hidden"
//       >
//         <iframe
//           className="w-full h-full rounded-2xl"
//           src="https://www.youtube.com/embed/O5TJYsqwR94?start=15"
//           title="YouTube video player"
//           allowFullScreen
//         />
//       </motion.div>
//     </motion.section>
//   );
// };

// export default VideoPlayer;
