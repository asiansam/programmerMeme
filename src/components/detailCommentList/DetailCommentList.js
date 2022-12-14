// Detail-comment-list.js
import React from "react";
import styled from "styled-components";
import DetailCommentForm from "../detailCmmentForm/DetailCommentForm";
import DetailCommentItem from "../detailCommentItem/DetailCommentItem";

const DetailCommentList = ({ meme }) => {
  // list에서 같은 component를 반복사용하도록 하는 메소드 map을 사용
  const CommentList = meme.comments.map((comment) => {
    return (
      <DetailCommentItem
        comment={comment.comment}
        commentId={comment.commentId}
        key={comment.commentId}
      />
    );
  });

  return (
    <div>
      <ContentsTitle>{meme.title /*props로 받아온 data를 사용*/}</ContentsTitle>
      <CommentListBox>{CommentList}</CommentListBox>
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
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default DetailCommentList;
