import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./detail-style.css";
import DetailCommentList from "../components/detailCommentList/DetailCommentList";
import styled from "styled-components";
import { __getContents } from "../redux/modules/detailMod";
// import { useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(__getContents());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const { isLoading, error, memes } = useSelector((state) => state.contents);

  try {
    return (
      <DetailBox>
        <TitleBox>
          <h1> &#123;isWhere: 상세 보기 &#125;</h1>
        </TitleBox>
        <ContentsBox>
          <ImageBox>
            <img className="imgCard" src={memes[0].url} alt="meme" />
          </ImageBox>
          <CommentBox>
            <DetailCommentList />
          </CommentBox>
        </ContentsBox>
      </DetailBox>
    );
  } catch (error) {
    console.log(error);
  }
};

const DetailBox = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentsBox = styled.div`
  border: 1px solid;
  display: flex;
`;

const TitleBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const CommentBox = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  display: float;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  text-align: center;
  border: 1px solid;
  width: 50%;
  height: 100%;
  padding: 10px;
`;

export default Detail;

//   const [todos, setTodos] = useState(null);

//         // axios를 통해서 get 요청을 하는 함수를 생성합니다.
//         // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
//   const fetchTodos = async () => {
//     const { data } = await axios.get("http://localhost:3001/todos");
//     setTodos(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
//   };

//         // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
//   useEffect(() => {
//                 // effect 구문에 생성한 함수를 넣어 실행합니다.
//     fetchTodos();
//   }, []);

//         // data fetching이 정상적으로 되었는지 콘솔을 통해 확인합니다.
//   console.log(todos); // App.js:16

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

// if (isLoading) {
//   return <div>로딩 중....</div>;
// }

// if (error) {
//   return <div>{error.message}</div>;
// }

// const comments = useSelector((state) => state.comments.contents);

// const [contents, setContents] = useState(null);

// //axios를 통해서 get 요청을 하는 함수를 생성합니다.
// // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
// const fetchContents = async () => {
//   const { data } = await axios.get("http://localhost:3001/memes");
//   setContents(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
// };

// // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
// useEffect(() => {
//   // effect 구문에 생성한 함수를 넣어 실행합니다.
//   fetchContents();
// }, []);

// console.log(contents[0]);

// // data fetching이 정상적으로 되었는지 콘솔을 통해 확인합니다.
// console.log(
//   contents
//   // contents.filter ((content) => {
//   //   return content.id === 1;
//   // }).comments
// );
