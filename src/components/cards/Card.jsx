import React from "react";

const Card = ({ icon, heading, desc, color }) => {
  return (
    <div className="w-[23rem] h-[18rem] bg-gray-50 hover:drop-shadow-lg transition ease-in-out transition-duration:150ms  rounded-xl px-10 py-10 ">
      {/* error color hex needed fix for variable */}
      <div
        className={`mb-4 w-[3rem] h-[3rem] bg-[#E7F2EF] rounded-full items-center justify-center flex `}
      >
        <img src={icon} alt="icons" />
      </div>
      <h1 className="font-bold text-xl mb-4">{heading}</h1>
      <p className=" lg:font-[2rem] text-[#595E64] ">{desc}</p>

      {/* {color} */}
    </div>
  );
};

export default Card;
