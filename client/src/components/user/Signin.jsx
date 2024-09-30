import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="bg-gray-300 rounded-md  w-full h-full  md:w-[30%] mx-auto p-7 text-sm mt-32 mb-12 space-y-5">
      <h1 className="text-center font-bold text-xl">SignIn</h1>
      <form onSubmit={""} className="flex flex-col space-y-4 rounded-md ">
        <input className="p-1 rounded-md" type="text" placeholder="email" />
        <input className="p-1 rounded-md" type="text" placeholder="password" />
        <button className="bg-white rounded-md p-1 hover:font-semibold">
          SignIn
        </button>
      </form>
      <p className="text-center">
        if u don't have an account{" "}
        <Link to={"/signup"}>
          {" "}
          <span className="text-blue-600 underline">singup</span>
        </Link>
      </p>
    </div>
  );
};

export default Signin;
