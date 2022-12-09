import React from "react";
import "./detail-style.css";
import Detail_comment_list from "../components/detail_comment_list/Detail_comment_list";
// import { Link, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

function Detail() {
  const data = [
    {
      id: 0,
      imageUrl:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsEpyc%2FbtqPKvdyrOg%2FfMnGHWHSEknLe2TbsUD620%2Fimg.png",
      title: "이.왜.진",
      commets: [
        { commentId: 0, comment: "ㅋㅋㅋ진짜 이게 왜 되냐." },
        { commentId: 1, comment: "ㅋㅋㅋㅋㅋㅋㅋㅋ" },
        { commentId: 2, comment: "구현 first" },
      ],
    },
  ];

  return (
    <div>
      <div>
        <h1>isWhere: 상세 보기</h1>
      </div>
      <div>
        <img className="imgCard" src={data[0].imageUrl} alt="meme" />
      </div>
      <div>
        <Detail_comment_list />
      </div>
    </div>
  );
}
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
