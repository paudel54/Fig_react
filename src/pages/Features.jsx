import Card from "../components/cards/Card";
import { cardInfo } from "../data";

const Features = () => {
  return (
    <div className="w-screen h-screen bg-feature  bg-[length:100%_80%] bg-no-repeat">
      <div className="container mx-auto justify-start text-left">
        <h1 className="text-[#00A077] text-md font-bold text-xl mb-10">
          FEATURES
        </h1>
        <h1 className="font-medium text-5xl leading-normal text-[#3B3E43] mb-5">
          We are here to help <br /> you with
        </h1>
        <div className="flex items-center justify-center gap-10 flex-wrap">
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
