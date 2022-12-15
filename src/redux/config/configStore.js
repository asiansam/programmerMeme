// src/redux/modules/config/configStore.js
import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import contents from "../modules/detailMod";
import postComment from "../modules/postCommentForm";

const store = configureStore({
  reducer: { contents: contents, postComment: postComment },
});

export default store;
