import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { createAction, handleActions } from "redux-actions";
import axios from "axios";
// import { pender } from "redux-pender";
// import * as WebAPI from "../lib/web-api";

const initialState = {
  memes: [],
  isLoading: false,
  error: null,
};

export const __getContents = createAsyncThunk(
  "getContents",
  async (payload, thunkAPI) => {
    try {
      const customAxios = axios.create({});
      const data = await customAxios.get("http://localhost:3001/memes");
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const detailMod = createSlice({
  name: "contents",
  initialState,
  reducers: {
    // postComment: (state, action) => {
    //   state.number = state.number + action.payload;
    // },
    // deleteComment: (state, action) => {
    //   state.number = state.number - action.payload;
    // },
    // editComment: (state, action) => {
    //   state;
    // },
  },
  extraReducers: {
    [__getContents.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getContents.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.memes = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getContents.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { postComment, deleteComment } = detailMod.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default detailMod.reducer;

// // src/redux/modules/counterSlice.js

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   number: 0,
// };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     addNumber: (state, action) => {
//       state.number = state.number + action.payload;
//     },

//     minusNumber: (state, action) => {
//       state.number = state.number - action.payload;
//     },
//   },
// });

// // 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const { addNumber, minusNumber } = counterSlice.actions;
// // reducer 는 configStore에 등록하기 위해 export default 합니다.
// export default counterSlice.reducer;
