const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {},
});

export default store;

export const server = `http://localhost:4000`;
