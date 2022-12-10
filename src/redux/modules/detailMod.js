import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contents: [
    {
      id: 0,
      imageUrl:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsEpyc%2FbtqPKvdyrOg%2FfMnGHWHSEknLe2TbsUD620%2Fimg.png",
      title: "내가 짠 코드.jpg",
      comments: [
        { commentId: 0, comment: "ㅋㅋㅋ진짜 이게 왜 되냐." },
        { commentId: 1, comment: "ㅋㅋㅋㅋㅋㅋㅋㅋ" },
        { commentId: 2, comment: "기능구현 first" },
      ],
    },
  ],
};

const detailMod = createSlice({
  name: "comments",
  initialState,
  reducers: {
    postComment: (state, action) => {
      state.number = state.number + action.payload;
    },

    deleteComment: (state, action) => {
      state.number = state.number - action.payload;
    },

    // editComment: (state, action) => {
    //   state;
    // },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = detailMod.actions;
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
