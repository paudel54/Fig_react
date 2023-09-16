import React from "react";

const Button = ({ text }) => {
  return (
    <button className="px-4 lg:px-8 py-[10px] bg-white font-bold text-[#57B3FE] hover:bg-gray-50 rounded-full text-sm lg:text-base">
      {text}
    </button>
  );
};

export default Button;
