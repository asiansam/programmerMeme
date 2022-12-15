import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  __getComment,
  __submitComment,
} from "../../redux/modules/postCommentForm";
import { memo } from "react";

const DetailCommentForm = () => {
  const [contents, setContents] = useState(null);
  const [comment, setComment] = useState("");

  const meme = useSelector((state) => state.postComment);
  const param = useParams();
  // console.log("meme >>>", meme);
  // console.log("meme222 >>>", meme2);
  // id 값은 param에서 useParams를 이용해서 각 컴포넌트 안에서 조회할 수 있다.
  const dispatch = useDispatch();

  const onSubmitCommentHandler = (meme, comment) => {
    const copyMeme = [...meme.meme.comments];
    const lastCommentId = copyMeme[copyMeme.length - 1].commentId;
    copyMeme.push({ commentId: lastCommentId + 1, comment: comment });
    const newMemeObj = {
      ...meme.meme,
      comments: copyMeme,
    };
    console.log("copyMeme >>>", copyMeme);
    console.log("newMemeObj) >>>", newMemeObj);
    dispatch(__submitComment({ id: param.id, data: newMemeObj }));
    setContents(newMemeObj.comments);
  };

  useEffect(() => {
    dispatch(__getComment(param.id));
  }, [dispatch, param.id]);
  // console.log(meme.meme);
  return (
    <div className="form">
      <div>
        {contents?.map((comment) => {
          return (
            <div key={comment.commentId}>
              {/* comment의 아이디를 화면에 표시 */}
              {comment.commentId} :{comment.comment}
            </div>
          );
        })}
      </div>
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
            // console.log(comment);
          }}
        />
        {/* 미입력 또는 공백만 있는 경우 버튼 비활성화 */}
        <button disabled={comment.trim(" ") ? false : true}>확인</button>
      </InputForm>
    </div>
  );
};

const InputForm = styled.form`
  border: 1px solid;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: float;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default memo(DetailCommentForm);
