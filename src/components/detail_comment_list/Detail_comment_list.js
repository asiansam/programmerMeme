// Detail-comment-list.js
import React from "react";
import Detail_comment_form from "../detail_comment_form/Detail_comment_form";

const Detail_comment_list = () => {
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
      <div>{data[0].title}</div>
      <div>
        {data[0].commets.map((comment) => {
          return comment.comment;
        })}
      </div>
      <div>
        <Detail_comment_form />
      </div>
    </div>
  );
};

export default Detail_comment_list;
