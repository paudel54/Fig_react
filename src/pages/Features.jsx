import Card from "../components/cards/Card";
import { cardInfo } from "../data";

const Features = () => {
  return (
    <div className="w-screen  lg:h-screen bg-feature  bg-[length:100%_80%] bg-no-repeat">
      <div className="container mx-auto justify-start text-left">
        <h1 className="text-[#00A077] text-md font-bold text-sm md:text-lg lg:text-xl ml-2 lg:ml-0 mb-4 lg:mb-10">
          FEATURES
        </h1>
        <h1 className="text-center lg:text-left font-medium text-3xl md:text-4xl lg:text-5xl leading-normal ml-2 lg:ml-0 text-[#3B3E43] mb-5">
          We are here to help <br className="hidden md:inline" /> you with
        </h1>
        <div className="flex items-center justify-center gap-10 flex-wrap ">
          {cardInfo.map((item, index) => {
            return (
              <Card
                icon={item.image}
                heading={item.heading}
                desc={item.description}
                color={item.color}
              />
            );
          })}
          {/* <Card icon={"icon1"} heading={"heading1"} desc={" description"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
