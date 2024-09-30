import React from "react";

const Button = ({ text }) => {
  return (
    <button className="border border-gray-400 rounded-md p-1 text-sm hover:scale-105">
      {text}
    </button>
  );
};

export default Button;
