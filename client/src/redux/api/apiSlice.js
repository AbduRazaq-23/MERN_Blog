import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const query = fetchBaseQuery({ baseUrl: "http://localhost:5173/" });

export const apiSlice = createApi({
  query,
  tagTypes: ["User", "Blog"],
  endpoints: () => ({}),
});
