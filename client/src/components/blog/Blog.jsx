import React, { useEffect, useState } from "react";
import { useGetBlogQuery } from "../../redux/api/blogSlice";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { blogId } = useParams();

  const { data } = useGetBlogQuery(blogId);
  const [blog, setBlog] = useState();

  useEffect(() => {
    try {
      data && setBlog(data);
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  console.log(blog);

  return (
    <div className="flex justify-center items-center min-h-screen mt-20 text-gray-300">
      <div className="w-[80%] my-10 rounded-md overflow-hidden space-y-5">
        <img className="w-full h-72" src={blog?.image} alt="image" />
        <h1 className="font-bold">{blog?.title}</h1>
        <hr />
        <p>{blog?.description}</p>
      </div>
    </div>
  );
};

export default Blog;
