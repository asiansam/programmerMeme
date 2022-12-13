import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  meme: {
    id: "",
    title: "",
    url: "",
    comments: [],
  },
  isLoading: false,
  error: null,
};

export const __getContents = createAsyncThunk(
  "getContents",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://localhost:3001/memes/${payload}`);
      // console.log(data.data);
      // console.log(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      // const data = await axios.patch(`http://localhost:3001/memes/${payload.id}`);
      // console.log(data);
      console.log(payload);
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      // return thunkAPI.rejectWithValue(error);
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
    // 리듀서 안에서는 비동기 요청을 쓰지 않아야 한다. 왜일까?
    // deleteComment: (state, action) => {
    //   console.log(action.payload.commentId);
    //   console.log();
    //   console.log(current(state.meme.comments));
    //   // try {
    //   state.meme = {
    //     ...state.meme,
    //     comments: state.meme.comments.filter(
    //       (comment) => comment.commentId !== action.payload.commentId
    //     ),
    //   };
    //   const data = axios
    //     .patch(`http://localhost:3001/memes/${action.payload.id}`, state.meme)
    //     .then((response) => {
    //       console.log(data.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    // } catch (error) {
    //     console.log(error);
    //   }
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
      state.meme = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
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
