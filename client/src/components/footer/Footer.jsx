import React from "react";

const Footer = () => {
  return (
    <div className="w-full min-h-24 bg-gray-300 md:flex justify-between items-center  bottom-0 p-4 text-sm font-bold">
      <img
        className="w-12 h-14 mx-auto"
        src="https://cdn.pixabay.com/photo/2021/02/08/10/15/man-5994279_1280.png"
        alt="logo"
      />
      <div className="mx-auto">
        <p>email: abdurazaq.dev23@gmail.com</p>
        <p>phone: +923065011190</p>
      </div>
    </div>
  );
};

export default Footer;
