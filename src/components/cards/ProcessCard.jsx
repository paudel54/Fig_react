const ProcessCard = ({ image, icon, heading, description, color }) => {
  // w-3/5 h-[20rem] bg-white
  return (
    <div className="w-1/2 h-[16rem] bg-white mx-auto border rounded-lg mb-8 text-black">
      <div className="flex  justify-between py-10">
        <img src={image} alt="banner" className="scale-75 -mt-20 -mr-16" />
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
