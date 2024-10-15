import React, { useEffect, useState } from "react";
import { useGetAllBlogQuery } from "../../redux/api/blogSlice";
import PostBlog from "./PostBlog";
import Card from "./Card";

const Home = () => {
  const [blogs, setBlogs] = useState();
  const { data } = useGetAllBlogQuery();

  useEffect(() => {
    data && setBlogs(data);
  }, [data, blogs]);

  return (
    <div className="flex flex-col space-y-6 my-28 mb-8  w-[80%] mx-auto">
      <PostBlog />
      <div className="md:grid grid-cols-4 gap-5">
        {blogs?.map((blog) => (
          <Card key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
