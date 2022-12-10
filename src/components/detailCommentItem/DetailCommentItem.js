import React from "react";
import styled from "styled-components";

const DetailCommentItem = (comment, commentId) => {
  return (
    <CommentItem>
      <div>{comment.comment}⏎</div>
      <Buttons>수정하기⏎</Buttons>
      <Buttons>삭제하기⏎</Buttons>
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
