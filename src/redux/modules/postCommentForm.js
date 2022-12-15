import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useParams } from "react-router-dom";

const initialState = {
  meme: {
    id: "",
    title: "",
    url: "",
    comments: [],
  },
  //isLoading : 서버에서 todos를 가져오는 상태를 나타내는 값.
  // 서버 통신이 시작되면 true 였다가 통신이 끝나면 false로 변경되도록 구현하기.
  isLoading: false,
  error: null, //서버 통신이 실패한 경우 서버에서 어떤 에러메시지를 보내줄 때 그것을 담아놓는 값.
};

//thunk함수 액션 크리에이터 (리듀서 밖에서 만든다.)
export const __getComment = createAsyncThunk(
  "getComment", //Action Value
  async (payload, thunkAPI) => {
    try {
      //axios에 의해서 네트워크 요청을 시작한다.
      const data = await axios.get(
        `https://deserted-workable-olive.glitch.me//memes/${payload}`
      );
      console.log(data);
      //axios는 promise 객체를 반환한다. 따라서 data는 promise를 반환한다.
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//submit thunk 함수로 만드는 패치
export const __submitComment = createAsyncThunk(
  "submitComment", //Action Value
  async (payload, thunkAPI) => {
    // console.log(payload);
    try {
      //axios에 의해서 네트워크 요청을 시작한다.
      const data = await axios.patch(
        `https://deserted-workable-olive.glitch.me/memes/${payload.id}`,
        payload.data
        //업데이트할 데이터
      );
      console.log(data);
      //axios는 promise 객체를 반환한다. 따라서 data는 promise를 반환한다.
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postCommentForm = createSlice({
  name: "postComment",
  initialState,
  reducers: {},
  extraReducers: {
    //__getComment
    [__getComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.meme = action.payload; // Store에 있는 memes에 서버에서 가져온 memes를 넣습니다.
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    //__submitComment
    [__submitComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__submitComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.meme = action.payload; // Store에 있는 meme에 서버에서 가져온 meme를 넣습니다.
    },
    [__submitComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const { postComment } = postCommentForm.actions;
export default postCommentForm.reducer;
