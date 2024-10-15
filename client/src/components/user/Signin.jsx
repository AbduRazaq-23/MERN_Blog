import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignInMutation } from "../../redux/api/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };

  const [data, { isLoading, isError, error }] = useSignInMutation();
  const submitSingInData = async (e) => {
    e.preventDefault();
    try {
      const res = await data(signInData);
      console.log(res?.data?.message);
      toast.success(res?.data?.message, { autoClose: 1000 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-800 text-gray-300 rounded-md  w-full h-full  md:w-[30%] mx-auto p-7 text-sm mt-32 mb-12 space-y-5">
      <h1 className="text-center font-bold text-xl">SignIn</h1>
      <form
        onSubmit={submitSingInData}
        className="flex flex-col space-y-4 rounded-md "
      >
        <input
          className="p-1 rounded-md bg-gray-900"
          type="text"
          placeholder="email"
          name="email"
          value={signInData.email || ""}
          onChange={changeHandler}
        />
        <input
          className="p-1 rounded-md bg-gray-900"
          type="text"
          placeholder="password"
          name="password"
          value={signInData.password || ""}
          onChange={changeHandler}
        />
        <button
          type="submit"
          className=" rounded-md p-1 hover:font-semibold bg-gray-900"
          disabled={isLoading}
        >
          {isLoading ? "SignIn..." : "SignIn"}
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
