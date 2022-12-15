import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "../modules/homeMod";
import contents from "../modules/detailMod";

const store = configureStore({
  reducer: {
    contents: contents,
    memeReducer: memeReducer,
  },
});

export default store;
