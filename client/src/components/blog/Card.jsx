import React from "react";

const Card = ({ blog }) => {
  return (
    <div className="w-full bg-gray-300 p-2 rounded-md space-y-1">
      <img
        className="rounded-md w-full h-[200px]"
        src={blog?.image}
        alt="img"
      />
      <h1>{blog?.title}</h1>
    </div>
  );
};

export default Card;
