// import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
// import { deleteComment } from "../../redux/modules/detailMod";
import { __deleteComment } from "../../redux/modules/detailMod";
import { useParams } from "react-router-dom";
import { __getContents } from "../../redux/modules/detailMod";

const DetailCommentItem = (comment) => {
  const dispatch = useDispatch();
  const param = useParams();
  const { meme } = useSelector((state) => state.contents);
  const [newMeme, setNewMeme] = useState(null);

  useEffect(() => {
    try {
      dispatch(__getContents(param.id));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  console.log(meme);
  console.log(newMeme);

  const deleteCommentItem = (meme, commentId) => {
    setNewMeme({
      ...meme,
      comments: meme.comments.filter(
        (comment) => comment.commentId !== commentId
      ),
    });
    dispatch(__deleteComment(newMeme, param.id));
  };

  return (
    <CommentItem>
      <div>{comment.comment}⏎</div>
      <Buttons>수정하기⏎</Buttons>
      <Buttons
        type="button"
        onClick={() => {
          deleteCommentItem(meme, comment.commentId, param.id, newMeme);
        }}
      >
        삭제하기⏎
      </Buttons>
    </CommentItem>
  );
};

const Buttons = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

const CommentItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

export default DetailCommentItem;

// // src/App.jsx

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [todo, setTodo] = useState({
//     title: "",
//   });
//   const [todos, setTodos] = useState(null);

//   // patch에서 사용할 id, 수정값의 state를 추가
//   const [targetId, setTargetId] = useState(null);
//   const [editTodo, setEditTodo] = useState({
//     title: "",
//   });

//   const fetchTodos = async () => {
//     const { data } = await axios.get("http://localhost:3001/todos");
//     setTodos(data);
//   };

//   const onSubmitHandler = (todo) => {
//     axios.post("http://localhost:3001/todos", todo);
//   };

//   const onClickDeleteButtonHandler = (todoId) => {
//     axios.delete(`http://localhost:3001/todos/${todoId}`);
//   };

//   // 수정버튼 이벤트 핸들러 추가 👇
//   const onClickEditButtonHandler = (todoId, edit) => {
//     axios.patch(`http://localhost:3001/todos/${todoId}`, edit);
//   };

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   return (
//     <>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           onSubmitHandler(todo);
//         }}
//       >
//         {/* 👇 수정기능에 필요한 id, 수정값 input2개와 수정하기 버튼을 추가 */}
//         <div>
//           <input
//             type="text"
//             placeholder="수정하고싶은 Todo ID"
//             onChange={(ev) => {
//               setTargetId(ev.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="수정값 입력"
//             onChange={(ev) => {
//               setEditTodo({
//                 ...editTodo,
//                 title: ev.target.value,
//               });
//             }}
//           />
//           <button
// 						// type='button' 을 추가해야 form의 영향에서 벗어남
//             type="button"
//             onClick={() => onClickEditButtonHandler(targetId, editTodo)}
//           >
//             수정하기
//           </button>
//         </div>
//         <input
//           type="text"
//           onChange={(ev) => {
//             const { value } = ev.target;
//             setTodo({
//               ...todo,
//               title: value,
//             });
//           }}
//         />
//         <button>추가하기</button>
//       </form>
//       <div>
//         {todos?.map((todo) => (
//           <div key={todo.id}>
// 						{/* todo의 아이디를 화면에 표시 */}
//             {todo.id} :{todo.title}
//             <button
//               type="button"
//               onClick={() => onClickDeleteButtonHandler(todo.id)}
//             >
//               삭제하기
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;
