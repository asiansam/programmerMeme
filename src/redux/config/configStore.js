import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "../modules/homeMod";
import contents from "../modules/detailMod";
import postComment from "../modules/postCommentForm";

const store = configureStore({
  reducer: {
    contents: contents,
    memeReducer: memeReducer,
  },
});

export default store;
