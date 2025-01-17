"use client";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const data = [
  "Apply with a form ",
  "Screening ( Phaze 1 ) ",
  "Screening ( Phaze 2 ) ",
  "Orientation program ( goal, purpose, numbers, included in program ),The story behind ( Finding the why )and sharing culture ",
  "Sharing their own stories ( Hardships and the wins )",
  "Bi Weekly workshops for 20 weeks straight",
  "Milestone Tracking and progress Evalutation ",
  "Feedback and mentor support",
  "Elimination and Bonus Tasks",
  "Valuation and Pitch Deck ( Exception Agencies )",
  "Investors Presentation and Pitch day",
  "Continued Suppport ( If startups hit their milestones )",
];

export const ProgressScroll = () => {
  const divRef = useRef(null);

  return (
    <>
      <div
        className="relative w-full flex justify-center items-center  flex-col "
        ref={divRef}
      >
        {/* reason section */}
        {data.map((title, index) => {
          return <Boxes title={title} index={index} key={index} />;
        })}
      </div>
    </>
  );
};

interface props {
  index: number;

  title: string;
}

const Boxes = ({ index, title }: props) => {
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start 0.7", "center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const lineOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.div
        className={`w-full flex items-start justify-start flex-row-reverse px-8 gap-4 md:p-0 ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } md:gap-8 ${index == 0 ? "mt-[30vh]" : "mt-0"} mb-4`}
        ref={divRef}
        key={index}
      >
        {/* text */}
        <motion.div
          className="w-full h-full md:w-1/2 mt-[-2rem] md:mt-[-4rem] "
          style={{ opacity }}
        >
          <div className=" w-full min-h-full rounded-xl flex justify-center items-center p-4 lg:p-8 transition-all duration-300 flex-col gap-4">
            <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white text-center">
              {title}
            </h2>
          </div>
        </motion.div>
        {/* line */}
        <div className="flex justify-center items-center  flex-col gap-4">
          <motion.div
            style={{ opacity }}
            className="w-5 h-5 rounded-full bg-white"
          ></motion.div>

          <motion.div
            // ref={lineRef}
            className={`bg-white h-[25vh] w-1 origin-top pb-3 ${
              index == data.length - 1 ? "hidden" : ""
            }`}
            style={{
              scaleY: lineScaleY,
              opacity: lineOpacity,
            }}
          />
        </div>

        {/* text section */}
        <div className="hidden md:block md:w-1/2" />
      </motion.div>
    </>
  );
};
