"use client";
import FaqSection from "@/components/FaqSection";
import NichesHeroSection from "@/components/NichesHeroSection";
import NichesStart from "@/components/NichesStart";
import { useRef } from "react";

const page = () => {
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
    <>
      <div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden">
        <video
          ref={videoTag}
          src="/niche.webM"
          // autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1] blur-[1px]"
        ></video>

        <NichesStart />
      </div>
      <div className="w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col">
        <NichesHeroSection />
      </div>
      <FaqSection />
    </>
  );
};

export default page;
