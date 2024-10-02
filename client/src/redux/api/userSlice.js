import { apiSlice } from "./apiSlice";

const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // singUp
    signUp: builder.mutation({
      query: (formData) => ({
        url: "/users/register",
        method: "POST",
        body: formData,
      }),
    }),
    // signIn
    signIn: builder.mutation({
      query: (data) => ({
        url: "users/logIn",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    // logOut
    logOut: builder.mutation({
      query: () => ({
        url: "/users/logOut",
        method: "POST",
        credentials: "include",
      }),
    }),
    // getCurrentUser
    getCurrentUser: builder.query({
      query: (userId) => ({
        url: `/users/getcurrentuser/${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useLogOutMutation,
  useGetCurrentUserQuery,
} = userSlice;
