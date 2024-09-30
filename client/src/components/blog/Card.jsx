import React from "react";

const Card = () => {
  return (
    <div className="w-full  md:w-[200px] bg-gray-300 p-2 rounded-md space-y-1">
      <img
        className="rounded-md w-full h-[200px]"
        src="https://cdn.pixabay.com/photo/2023/12/11/12/51/lynx-8443540_640.jpg"
        alt="img"
      />
      <h1>title</h1>
    </div>
  );
};

export default Card;
