import Image from "next/image";

const features = [
  {
    title: "Community",
    description:
      "This community will help you grow, collaborate, and support each other's journey, balancing healthy competition with a sense of belonging for lasting success.",
    imgUrl: "/img5.jpeg",
  },
  {
    title: "Milestones Tracking (20 weeks)",
    description:
      "We'll help you stay on track by setting and tracking key milestones over 20 weeks, making sure you're always moving forward.",
    imgUrl: "/img6.webp",
  },
  {
    title: "Quick Investments",
    description:
      "Get access to investment opportunities that help you scale your business faster, with no unnecessary delays.",
    imgUrl: "/img7.webp",
  },
  {
    title: "Equal Opportunity for All",
    description:
      "Everyone gets a fair chance to succeed here, no matter your background—success is about your vision and hustle.",
    imgUrl: "/img8.jpeg",
  },
  {
    title: "Global Networking",
    description:
      "Expand your horizons by connecting with a worldwide community of founders and professionals, all eager to collaborate.",
    imgUrl: "/img9.webp",
  },
  {
    title: "Expert Mentors",
    description:
      "Tap into the knowledge of experienced mentors who've been through it all and are ready to guide you through the ups and downs.",
    imgUrl: "/img10.webp",
  },
  {
    title: "Founder's Branding",
    description:
      "We'll help you shape and strengthen your personal brand, making you stand out as a thought leader and visionary.",
    imgUrl: "/img11.webp",
  },
];

const GridBoxes = () => {
  return (
    // <div className="w-screen h-auto min-h-screen  justify-center items-center flex py-8">
    //   <div className="w-[70%] mx-auto grid grid-cols-2 grid-rows-4 gap-8">
    //     {features.map(({ description, imgUrl, title }, index) => {
    //       return (
    //         <Boxes
    //           description={description}
    //           imgUrl={imgUrl}
    //           title={title}
    //           key={index}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="w-full h-auto min-h-screen flex justify-center items-center py-8 flex-col">
      <span className="w-full  text-center text-2xl md:text-7xl font-bold mb-16 mt-10">
        Real Value Proposition
      </span>
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ description, imgUrl, title }, index) => {
          return (
            <Boxes
              description={description}
              imgUrl={imgUrl}
              title={title}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

interface BoxesProps {
  title: string;
  description: string;
  imgUrl: string;
}

const Boxes = ({ description, imgUrl, title }: BoxesProps) => {
  return (
    <>
      {/* <div className="w-auto h-auto rounded-3xl col-span-1 boxesbg p-8 flex justify-center items-center flex-col gap-4 ">
        <Image
          alt="img"
          src={imgUrl}
          width={1000}
          height={1000}
          style={{ objectFit: "contain" }}
          className="rounded-3xl"
        />
        <span className="flex justify-center items-center gap-4 flex-col">
          <h2 className="md:text-3xl font-bold text-xl text-center">{title}</h2>
          <p className="text-lg md:text-xl font-semibold text-center">
            {description}
          </p>
        </span>
      </div> */}
      <div className="w-full h-auto boxesbg rounded-3xl  p-6 flex flex-col items-center gap-6">
        <Image
          alt="Feature image"
          src={imgUrl}
          width={450}
          height={500}
          className="rounded-xl"
          style={{ objectFit: "cover" }}
        />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-md text-gray-300 mt-2">{description}</p>
        </div>
      </div>
    </>
  );
};

export default GridBoxes;
