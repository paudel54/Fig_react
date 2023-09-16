import ProcessCard from "../components/cards/ProcessCard.jsx";
import { ProcessInfo } from "../data.js";

const Process = () => {
  return (
    <div className="bg-gradient-to-r from-[#35D3FF] to-[#A963FB] h-110vh w-screen">
      <div className="py-[10rem] text-white ">
        <h2 className="opacity-50 mb-4">HOW IT WORKS</h2>
        <h1 className="text-5xl font-medium mb-8">Our Process</h1>
        <p className="leading-[2rem] mb-2">
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
