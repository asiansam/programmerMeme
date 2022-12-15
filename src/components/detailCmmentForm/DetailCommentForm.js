import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __submitComment } from "../../redux/modules/detailMod";

const DetailCommentForm = () => {
  const [contents, setContents] = useState(null);
  const [comment, setComment] = useState("");

  const meme = useSelector((state) => state.contents.meme);
  const param = useParams();
  // id 값은 param에서 useParams를 이용해서 각 컴포넌트 안에서 조회할 수 있다.
  const dispatch = useDispatch();

  const onSubmitCommentHandler = (meme, comment) => {
    const copyMeme = [...meme.comments];

    copyMeme.push({ commentId: Date.now(), comment: comment });
    const newMemeObj = {
      ...meme,
      comments: copyMeme,
    };

    setContents(newMemeObj);

    dispatch(__submitComment({ id: param.id, data: newMemeObj }));
  };

  return (
    <InputForm
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitCommentHandler(meme, comment);
      }}
    >
      <input
        placeholder="댓글을 달아주세요"
        type="text"
        onChange={(ev) => {
          const { value } = ev.target;
          setComment(value);
        }}
      />
      {/* 미입력 또는 공백만 있는 경우 버튼 비활성화 */}
      <button disabled={comment.trim(" ") ? false : true}>확인</button>
    </InputForm>
  );
};

const InputForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: float;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default memo(DetailCommentForm);
