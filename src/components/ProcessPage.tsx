"use client";
import { useRef } from "react";

const ProcessPage = () => {
  const videoTag = useRef<HTMLVideoElement | null>(null);

  if (videoTag.current) {
    videoTag.current.play();
    // videoTag.current.setAttribute("autoplay", "autoplay");
    // videoTag.current.autoplay = true;
    // videoTag.current.controls = false;
    // videoTag.current.loop = true;
    // videoTag.current.muted = true;
  }
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden">
      <video
        ref={videoTag}
        src="/process.webM"
        // autoPlay
        loop
        muted
        // controls={false}
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1] blur-[1px]"
      ></video>
      <span className="flex justify-center items-center gap-8 flex-col ">
        <h1 className="md:text-7xl text-3xl font-bold bg-clip-text bg-gradient-to-r from-white via-green-600 to-white text-center">
          Start your <span className="text-color">Company</span> from scratch
        </h1>
        <p className="md:text-3xl text-xl text-center font-semibold">
          Give your best shot !
        </p>
      </span>
    </div>
  );
};

export default ProcessPage;
