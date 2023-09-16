import Line from "../../assets/img/Line.png";
const ProcessCard = ({ image, icon, heading, description, color }) => {
  // w-3/5 h-[20rem] bg-white
  return (
    <div className="w-1/2 h-[16rem] bg-white mx-auto border rounded-lg mb-8 text-black">
      {/* Need to add line behind using zindex bug fix */}
      {/* <img src={Line} alt="line" className="z-10" /> */}
      <div className="flex flex-row items-center justify-between -mt-10 ">
        <img src={image} alt="banner" className="scale-75" />
        <div className="text-left">
          <div>
            <img src={icon} alt="icon" />
            {color}
          </div>
          <h1 className="font-bold">{heading}</h1>
          <p className="text-[#595E64]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
