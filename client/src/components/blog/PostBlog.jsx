import React, { useState } from "react";
import { usePostBlogMutation } from "../../redux/api/blogSlice";
import { toast } from "react-toastify";

const PostBlog = () => {
  const [image, setImage] = useState(null);
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,

      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const [post, { isError, isLoading, error }] = usePostBlogMutation();
  const postBlog = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("description", blogData.description);
    if (image) {
      formData.append("image", image);
    }
    try {
      const res = await post(formData).unwrap();
      toast.success(res?.message, { autoClose: 1000 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-300 rounded-md w-full mx-auto p-7 text-sm">
      <h1 className="text-center font-bold text-xl">PostBlog</h1>
      <form onSubmit={postBlog} className="flex flex-col space-y-4 rounded-md ">
        <input type="file" name="file" onChange={handleFileChange} />
        <input
          className="p-1 rounded-md"
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          placeholder="title"
        />
        <textarea
          className="p-1 rounded-md"
          name="description"
          value={blogData.description}
          onChange={handleChange}
          placeholder="Enter your blog here..."
          rows="4"
          cols="50"
        />
        <button
          type="submit"
          className="bg-white rounded-md p-1 hover:font-semibold"
        >
          PostBlog
        </button>
      </form>
    </div>
  );
};

export default PostBlog;
