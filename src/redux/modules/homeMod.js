import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  memes: [],
  isLoading: false,
  error: null,
};

export const __getmemes = createAsyncThunk(
  "memes",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/memes");
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __memeAdd = createAsyncThunk(
  "memeAdd",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/memes", payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const memeSlice = createSlice({
  name: "memes",
  initialState,
  reducers: {},
  extraReducers: {
    [__getmemes.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getmemes.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.memes = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getmemes.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__memeAdd.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__memeAdd.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.memes = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__memeAdd.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { memeAdd } = memeSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default memeSlice.reducer;
