import FaqSection from "@/components/FaqSection";
import HomePage from "../components/HomePage";
import HeroSection from "@/components/HeroSection";
import OffersBoxs from "@/components/OffersBoxs";
import HomeEnd from "@/components/HomeEnd";
import GridBoxes from "@/components/GridBoxes";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col bgGradient">
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
