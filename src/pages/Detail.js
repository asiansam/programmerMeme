import React, { useEffect, useState } from "react";
import axios from "axios";
import "./detail-style.css";
import DetailCommentList from "../components/detailCommentList/DetailCommentList";
import styled from "styled-components";
// import { useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";

const Detail = () => {
  // const comments = useSelector((state) => state.comments.contents);

  const [contents, setContents] = useState(null);

  //axios를 통해서 get 요청을 하는 함수를 생성합니다.
  // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
  const fetchContents = async () => {
    const { data } = await axios.get("http://localhost:3001/memes");
    setContents(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchContents();
  }, []);

  // data fetching이 정상적으로 되었는지 콘솔을 통해 확인합니다.
  console.log(contents);

  return (
    <DetailBox>
      <TitleBox>
        <h1> &#123;isWhere: 상세 보기 &#125;</h1>
      </TitleBox>
      <ContentsBox>
        <ImageBox>
          {/* <img className="imgCard" src={contents[id].imageUrl} alt="meme" /> */}
        </ImageBox>
        <CommentBox>
          <DetailCommentList />
        </CommentBox>
      </ContentsBox>
    </DetailBox>
  );
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

// src/App.js

// const App = () => {
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
//   return <div>App</div>;
// };

// export default App;
