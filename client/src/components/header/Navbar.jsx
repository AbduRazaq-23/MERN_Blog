import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { profile, setProfile } = useState(true);
  return (
    <div className="w-full h-20 bg-gray-300 flex items-center justify-between px-5 fixed top-0 ">
      <div className="w-10 h-12">
        <img
          src="https://cdn.pixabay.com/photo/2021/02/08/10/15/man-5994279_1280.png"
          alt="logo"
        />
      </div>
      {!profile ? (
        <div className="space-x-2">
          <Link to={"/signup"}>
            <Button text={"SignUp"} />
          </Link>
          <Link to={"/signin"}>
            <Button text={"SignIn"} />
          </Link>
        </div>
      ) : (
        <div className="w-10 h-12 ">
          <img
            className="rounded full"
            src="https://cdn.pixabay.com/photo/2021/02/08/10/15/man-5994279_1280.png"
            alt="image"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
