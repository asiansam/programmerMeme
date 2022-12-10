import React from "react";
import "./detail-style.css";
import DetailCommentList from "../components/detailCommentList/DetailCommentList";
import styled from "styled-components";
import { useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

function Detail() {
  const comments = useSelector((state) => state.comments.contents);

  return (
    <DetailBox>
      <TitleBox>
        <h1> &#123;isWhere: 상세 보기 &#125;</h1>
      </TitleBox>
      <ContentsBox>
        <ImageBox>
          <img className="imgCard" src={comments[0].imageUrl} alt="meme" />
        </ImageBox>
        <CommentBox>
          <DetailCommentList />
        </CommentBox>
      </ContentsBox>
    </DetailBox>
  );
}

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
//   const param = useParams();
//   const todosStore = useSelector((state) => state.todos.lists);
//   const list = todosStore.find((list) => list.id === parseInt(param.id));
//   console.log(list);
//   return (
//     <div className="detailStyles">
//       <div className="detailCard">
//         <div>
//           <div className="cardHeader">
//             <div>
//               <span>ID:{list.id}</span>
//             </div>
//             <div>
//               {
//                 <div>
//                   <Link to={`/`}>
//                     <button className="prevButton">이전으로</button>
//                   </Link>
//                 </div>
//               }
//             </div>
//           </div>
//           <div className="cardTitle">
//             <h1>{list.title}</h1>
//           </div>
//           <div className="cardDesc">
//             <span>{list.desc}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

export default Detail;
