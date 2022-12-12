// Detail-comment-list.js
import React from "react";
import styled from "styled-components";
import DetailCommentForm from "../detailCmmentForm/DetailCommentForm";
import DetailCommentItem from "../detailCommentItem/DetailCommentItem";
import { useSelector } from "react-redux";

const DetailCommentList = () => {
  // const comments = useSelector((state) => state.comments.contents);

  // const CommentList = comments.comments.map((comment) => {
  //   return (
  //     <DetailCommentItem
  //       comment={comment.comment}
  //       commentId={comment.commentId}
  //       key={comment.commentId}
  //     />
  //   );
  // });

  return (
    <div>
      {/* <ContentsTitle>{comments[0].title}</ContentsTitle> */}
      {/* <CommentListBox>{CommentList}</CommentListBox> */}
      <div>
        <DetailCommentForm />
      </div>
    </div>
  );
};

const ContentsTitle = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: float;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommentListBox = styled.div`
  border: 1px solid;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default DetailCommentList;

// // src/App.js

// import React from "react";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addNumber, minusNumber } from "./redux/modules/counterSlice";

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const globalNumber = useSelector((state) => state.counter.number);
//   const dispatch = useDispatch();

//   const onChangeHandler = (event) => {
//     const { value } = event.target;
//     setNumber(+value);
//   };
//   const onClickAddNumberHandler = () => {
//     dispatch(addNumber(number));
//   };
//   const onClickMinusNumberHandler = () => {
//     dispatch(minusNumber(number));
//   };
//   console.log(number);
//   return (
//     <div>
//       {globalNumber}
//       <input type="number" onChange={onChangeHandler} />
//       <button onClick={onClickAddNumberHandler}>더하기</button>
//       <button onClick={onClickMinusNumberHandler}>빼기</button>
//     </div>
//   );
// };

// export default App;
