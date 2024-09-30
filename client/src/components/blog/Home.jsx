import React from "react";
import PostBlog from "./PostBlog";
import Card from "./Card";

const Home = () => {
  return (
    <div className="flex flex-col space-y-6 my-28 mb-8  w-[80%] mx-auto">
      <PostBlog />
      <Card />
    </div>
  );
};

export default Home;
