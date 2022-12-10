import React from "react";
import styled from "styled-components";

const DetailCommentItem = () => {
  const data = [
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
  ];

  return <div>{data[0].comments[0]}</div>;
};

export default DetailCommentItem;
