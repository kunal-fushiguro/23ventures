import CultureStart from "@/components/CultureStart";
import HomeEnd from "@/components/HomeEnd";
import PurposeSection from "@/components/PurposeSection";
import WorkSpace from "@/components/WorkSpace";

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center gap-4 p-8 flex-col bgGradient">
        <CultureStart />
      </div>
      <WorkSpace />
      <PurposeSection />
      <HomeEnd />
    </>
  );
};

export default page;
