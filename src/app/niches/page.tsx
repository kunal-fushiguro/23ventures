"use client";
import FaqSection from "@/components/FaqSection";
import NichesHeroSection from "@/components/NichesHeroSection";
import NichesStart from "@/components/NichesStart";
import { motion } from "motion/react";

const Page = () => {
  return (
    <>
      <motion.div className="relative w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col overflow-hidden">
        <video
          src="/niche.webM"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1] blur-[1px]"
        ></video>

        <NichesStart />
      </motion.div>
      <div className="w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col">
        <NichesHeroSection />
      </div>
      <FaqSection />
    </>
  );
};

export default Page;
