// Detail-comment-list.js
import React from "react";
import styled from "styled-components";
import DetailCommentForm from "../detailCmmentForm/DetailCommentForm";
import DetailCommentItem from "../detailCommentItem/DetailCommentItem";

const DetailCommentList = () => {
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

  const CommentList = data[0].comments.map((comment) => {
    return <DetailCommentItem />;
  });

  return (
    <div>
      <ContentsTitle>{data[0].title}</ContentsTitle>
      <CommentListBox>{CommentList}</CommentListBox>
      <div>
        <DetailCommentForm />
      </div>
    </div>
  );
};

const ContentsTitle = styled.div`
  border: 1px solid;
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
  display: float;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default DetailCommentList;
