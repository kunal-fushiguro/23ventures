import FaqSection from "@/components/FaqSection";
import NichesHeroSection from "@/components/NichesHeroSection";
import NichesStart from "@/components/NichesStart";

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col bgGradient">
        <NichesStart />
      </div>
      <div className="w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col bgGradient">
        <NichesHeroSection />
      </div>
      <FaqSection />
    </>
  );
};

export default page;
