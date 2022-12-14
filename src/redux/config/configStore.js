// src/redux/modules/config/configStore.js
import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import contents from "../modules/detailMod";

const store = configureStore({
  reducer: { contents: contents },
});

export default store;
