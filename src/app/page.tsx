"use client";
import FaqSection from "@/components/FaqSection";
import HomePage from "../components/HomePage";
import HeroSection from "@/components/HeroSection";
import OffersBoxs from "@/components/OffersBoxs";
import HomeEnd from "@/components/HomeEnd";
import GridBoxes from "@/components/GridBoxes";
import { useRef } from "react";

export default function Home() {
  const videoTag = useRef<HTMLVideoElement | null>(null);

  if (videoTag.current) {
    // videoTag.current.setAttribute("autoplay", "autoplay");
    videoTag.current.play();
    // videoTag.current.autoplay = true;
    // videoTag.current.controls = false;
    // videoTag.current.loop = true;
    // videoTag.current.muted = true;
  }

  return (
    <>
      <div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden">
        {/* Video background */}
        <video
          ref={videoTag}
          src="/home.webM"
          // autoPlay
          loop
          muted
          // controls={false}
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1] blur-[1px]"
        ></video>

        {/* Content */}
        <HomePage />
      </div>

      <HeroSection />
      <OffersBoxs />
      <GridBoxes />
      <div className="w-full h-auto flex justify-center items-center py-14">
        <FaqSection />
      </div>
      <HomeEnd />
    </>
  );
}
