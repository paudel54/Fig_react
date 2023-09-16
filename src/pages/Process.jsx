import ProcessCard from "../components/cards/ProcessCard.jsx";
import { ProcessInfo } from "../data.js";

const Process = () => {
  return (
    <div className="mt-12 lg:mt-0 bg-gradient-to-r from-[#35D3FF] to-[#A963FB] h-110vh w-screen">
      <div className="py-[2rem] lg:py-[10rem] text-white flex flex-col items-center justify-center">
        <h2 className="opacity-50 mb-4  text-[0.6rem] lg:text-xs">
          HOW IT WORKS
        </h2>
        <h1 className="text-4xl lg:text-5xl font-medium mb-4 lg:mb-8">
          Our Process
        </h1>
        <p className="leading-normal lg:leading-[2rem] mb-6 lg:mb-2 text-center">
          We know the best solution for all of your business ideas and we can
          help you <br /> solve all business problems
        </p>
        {/* <ProcessCard /> */}
        <div>
          {ProcessInfo.map((item, index) => {
            return (
              <ProcessCard
                image={item.image}
                icon={item.icon}
                heading={item.heading}
                description={item.description}
                color={item.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Process;
