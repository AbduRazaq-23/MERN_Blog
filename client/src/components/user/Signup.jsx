import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../../redux/api/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const fileHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const [signUp, { isError, isLoading, error }] = useSignUpMutation();
  const submitUserData = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await signUp(formData).unwrap();
      navigate("/");
      toast.success(res?.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-300 rounded-md  w-full h-full  md:w-[30%] mx-auto p-7 text-sm mt-32 mb-12 space-y-5">
      <h1 className="text-center font-bold text-xl">SignUp</h1>
      <form
        onSubmit={submitUserData}
        className="flex flex-col space-y-4 rounded-md "
      >
        <input type="file" name="file" onChange={fileHandler} />
        <input
          className="p-1 rounded-md"
          type="text"
          name="name"
          placeholder="name"
          value={userData.name || ""}
          onChange={changeHandler}
        />
        <input
          className="p-1 rounded-md"
          type="text"
          name="email"
          placeholder="email"
          value={userData.email || ""}
          onChange={changeHandler}
        />
        <input
          className="p-1 rounded-md"
          type="text"
          name="password"
          placeholder="password"
          value={userData.password || ""}
          onChange={changeHandler}
        />

        <button
          type="submit"
          className="bg-white rounded-md p-1 hover:font-semibold"
          disabled={isLoading}
        >
          {isLoading ? "SignUp..." : "SignUp"}
        </button>
        <p className="text-center">
          if u have already an account{" "}
          <Link to={"/signin"}>
            {" "}
            <span className="text-blue-600 underline">singin</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
