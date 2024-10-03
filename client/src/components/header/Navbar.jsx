import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import {
  useGetCurrentUserQuery,
  useLogOutMutation,
} from "../../redux/api/userSlice";

const Navbar = () => {
  // get user
  const { data, isLoading } = useGetCurrentUserQuery();
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => (await data) && setUser(data))();
  }, [data, user]);

  // logout
  const [logOut] = useLogOutMutation();
  const handleLogOut = async () => {
    try {
      await logOut();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-20 bg-gray-300 flex items-center justify-between px-5 fixed top-0 ">
      <div className="w-10 h-12">
        <img
          src="https://cdn.pixabay.com/photo/2021/02/08/10/15/man-5994279_1280.png"
          alt="logo"
        />
      </div>
      {!user ? (
        <div className="space-x-2">
          <Link to={"/signup"}>
            <Button text={"SignUp"} />
          </Link>
          <Link to={"/signin"}>
            <Button text={"SignIn"} />
          </Link>
        </div>
      ) : (
        <div className="flex space-x-2 items-center">
          {isLoading ? (
            <p>loading...</p>
          ) : (
            <>
              <button
                className="h-8 border border-gray-400 rounded-md px-2 py-0 text-sm hover:scale-105"
                onClick={handleLogOut}
              >
                logOut
              </button>

              <img
                className="w-11 h-11 rounded-full"
                src={user?.image}
                alt="image"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
