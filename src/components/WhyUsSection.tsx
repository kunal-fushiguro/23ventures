const data = [
  `If you prefer a stable, traditional career path without the risks and uncertainties of groundbreaking ventures, this isn’t the right fit.`,
  `If questioning the status quo or pushing boundaries feels uncomfortable, this space of disruptive thinking may not align with your mindset.`,
  `If you prefer staying within your comfort zone and avoid embracing challenges or setbacks, the dynamic environment of 23 Ventures might not suit you.`,
];

const WhyUsSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-12 mb-16">
      <span className="w-full text-center text-4xl md:text-7xl font-bold mb-16 mt-10 px-8">
        23 Ventures is for you if
      </span>
      <div className="grid md:grid-cols-2 w-3/4 md:w-[70%] justify-center items-center gap-4">
        {data.map((text, index) => (
          <span
            key={index}
            className="h-[100%] w-[100%] rounded-3xl bg-cover bg-center bg-no-repeat text-xl md:text-3xl font-bold text-white flex items-center justify-center px-12 boxesbg p-8"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WhyUsSection;
