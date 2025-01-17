const data = [
  {
    title: "Give",
    subTitle: "what you",
    keysPoints: [
      "Focus",
      "Commitment",
      "Adaptability",
      "willingness to do",
      "6% Stake and a revenue percentage",
    ],
  },
  {
    title: "Get",
    subTitle: "what you",
    keysPoints: [
      "94% equity - Ownership",
      "Thought-provoking leader - Visionary",
      "Accountable and motivator - Inspiring",
      "Learner - Curious",
      "Figure-out person - Resourceful",
      "Problem solver - Innovative",
      "Agile - Adaptable",
      "Startup founder - Entrepreneur",
      "To follow your passion - Driven",
      "Freedom - Autonomy",
      "Growth - Progress",
      "Connections - Networking",
      "Advisors and mentors - Guidance",
      "Great connect - Collaboration",
    ],
  },
];

const WhatUGiveSection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center md:flex-row md:gap-16 p-4">
      {data.map(({ keysPoints, subTitle, title }, index) => (
        <div
          key={index}
          className="flex w-full flex-col items-center justify-start gap-8 md:w-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-center my-4">
            <span className="text-lg font-medium text-muted-foreground text-gray-200 md:text-2xl">
              {subTitle}
            </span>
            <h2 className="text-6xl font-bold tracking-tight md:text-8xl">
              {title}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {keysPoints.map((text, idx) => (
              <span
                key={idx}
                className="rounded-full px-4 py-2 text-xl backdrop-blur-sm inline-flex items-center borderfont-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-bold boxesbg text-center"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatUGiveSection;
