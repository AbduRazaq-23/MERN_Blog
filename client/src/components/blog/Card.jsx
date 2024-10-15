import React from "react";
import { useDeleteBlogMutation } from "../../redux/api/blogSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  const [deleteBlog] = useDeleteBlogMutation();
  const DeleteBlog = async (id) => {
    try {
      const res = await deleteBlog(id);
      console.log(res?.data);
      toast.success(res?.data, { autoClose: 1000 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Link to={`/blog/${blog?._id}`}>
      {" "}
      <div className="w-full bg-gray-800 text-gray-300 p-2 rounded-md space-y-1 hover:scale-105">
        <img
          className="rounded-md w-full h-[200px]"
          src={blog?.image}
          alt="img"
        />
        <h1 className="font-semibold">{blog?.title}</h1>

        <button
          onClick={() => DeleteBlog(blog?._id)}
          className="w-full hover:bg-red-400 rounded-md px-1 border"
        >
          delete
        </button>
      </div>
    </Link>
  );
};

export default Card;
