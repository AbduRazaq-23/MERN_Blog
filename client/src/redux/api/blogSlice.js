import { apiSlice } from "./apiSlice";

const blogSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // POST A BLOG
    postBlog: builder.mutation({
      query: (formData) => ({
        url: "/blog",
        method: "POST",
        body: formData,
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
    getBlog: builder.query({
      query: (blogId) => ({
        url: `/blog/${blogId}`,
        method: "GET",
      }),
      providesTags: ["Blog"],
      keepUnusedDataFor: 5,
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
  useGetBlogQuery,
  useDeleteBlogMutation,
} = blogSlice;
