import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:8005/api" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Blog"],
  endpoints: () => ({}),
});
