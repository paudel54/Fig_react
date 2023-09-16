import ProcessCard from "../components/cards/ProcessCard.jsx";
import Line from "../assets/img/Line.png";
import { ProcessInfo } from "../data.js";
import V1 from "../assets/img/V1.png";
import V2 from "../assets/img/V2.png";
import V3 from "../assets/img/V3.png";
import V4 from "../assets/img/V4.png";
import V5 from "../assets/img/V5.png";

const Process = () => {
  return (
    <div className="mt-12 lg:mt-0 bg-gradient-to-r from-[#35D3FF] to-[#A963FB] h-110vh w-screen relative">
      <div className=" lg:visible">
        <img src={V2} alt="decor" className="absolute z-10" draggable={false} />
        <img
          src={V1}
          alt="decor"
          className="absolute -right-20 top-[75vh] scale-90 z-10"
          draggable={false}
        />
        <img
          src={V3}
          alt="decor"
          className="absolute right-0 z-10"
          draggable={false}
        />
        <img
          src={V4}
          alt="decor"
          className="absolute top-[99vh] z-10"
          draggable={false}
        />
        <img
          src={V5}
          alt="decor"
          className="absolute top-[97.5vh] lg:top-[89.5vh] lg:right-[35vw] z-10"
          draggable={false}
        />
      </div>

      <div className="py-[2rem] lg:py-[10rem] text-white flex flex-col items-center justify-center z-20">
        <h2 className="opacity-50 mb-4  text-[0.6rem] lg:text-xs z-30">
          HOW IT WORKS
        </h2>
        <h1 className="text-4xl lg:text-5xl font-medium mb-4 lg:mb-8 z-30">
          Our Process
        </h1>
        <p className="leading-normal lg:leading-[2rem] mb-6 lg:mb-2 text-center z-30">
          We know the best solution for all of your business ideas and we can
          help you <br /> solve all business problems
        </p>

        {/* <ProcessCard /> */}
        <div className="z-20">
          {/* Need to add line behind using zindex bug fix */}
          <img
            src={Line}
            alt="line"
            className="z-10 absolute right-[50vw] h-[1/2]"
          />
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
