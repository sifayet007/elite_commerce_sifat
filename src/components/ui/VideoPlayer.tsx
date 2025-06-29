import React from "react";

const VideoPlayer = () => {
  return (
    <div className=" aspect-auto w-[clamp(800px,10vw,350px)] h-[clamp(400px,10vw,190px)]">
      <iframe
        className="w-full h-full rounded-2xl"
        src="https://www.youtube.com/embed/O5TJYsqwR94?si=lY7yoV4AzVl1637m&start=15"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
