import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export default store;

export const server = `https://foodstore-backend.onrender.com`;
