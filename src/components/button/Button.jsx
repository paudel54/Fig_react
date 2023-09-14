import React from "react";

const Button = ({ text }) => {
  return (
    <button className="px-8 py-[18px] bg-white font-bold text-[#57B3FE] hover:bg-gray-50 rounded-full text-base">
      {text}
    </button>
  );
};

export default Button;
