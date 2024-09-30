import React from "react";

const PostBlog = () => {
  return (
    <div className="bg-gray-300 rounded-md w-full mx-auto p-7 text-sm">
      <h1 className="text-center font-bold text-xl">PostBlog</h1>
      <form onSubmit={""} className="flex flex-col space-y-4 rounded-md ">
        <input type="file" />
        <input className="p-1 rounded-md" type="text" placeholder="title" />
        <textarea
          className="p-1 rounded-md"
          id="message"
          // value={text}
          // onChange={handleChange}
          placeholder="Enter your blog here..."
          rows="4"
          cols="50"
        />
        <button className="bg-white rounded-md p-1 hover:font-semibold">
          PostBlog
        </button>
      </form>
    </div>
  );
};

export default PostBlog;
