import { apiSlice } from "./apiSlice";

const blogSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // POST A BLOG
    postBlog: builder.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        body: data,
      }),
    }),
    // GET ALL BLOG
    getAllBlog: builder.query({
      query: () => ({
        url: "/blog",
        method: "GET",
      }),
    }),
    // GET A BLOG
    getBlog: builder.mutation({
      query: (blogId) => ({
        url: `/blog/${blogId}`,
        method: "GET",
      }),
    }),
    // DELETE BLOG
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `/blog/${blogId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  usePostBlogMutation,
  useGetAllBlogQuery,
  useGetBlogMutation,
  useDeleteBlogMutation,
} = blogSlice;
