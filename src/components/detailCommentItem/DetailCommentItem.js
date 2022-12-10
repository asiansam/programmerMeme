import React from "react";
import styled from "styled-components";

const DetailCommentItem = (comment, commentId) => {
  console.log(comment);
  return (
    <div>
      <div>{comment.comment}</div>
      <button>수정하기</button>
      <button>삭제하기</button>
    </div>
  );
};

const Buttons = styled.button``;

export default DetailCommentItem;
