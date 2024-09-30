import { configureStore } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query/react";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
export default store;
