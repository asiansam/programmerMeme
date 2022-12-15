import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  __getContents,
  __editComment,
  __deleteComment,
} from "../../redux/modules/detailMod";

const DetailCommentItem = (comment) => {
  const dispatch = useDispatch();
  const param = useParams();
  useEffect(() => {
    try {
      dispatch(__getContents(param.id));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, param.id]);

  const { meme } = useSelector((state) => state.contents);

  // 변경값을 바로 리렌더링해주기 위해 state 사용
  const [newMeme, setNewMeme] = useState(null);
  // XXXX   한 컴포넌트 내에서 state를 쓰지 않으면 굳이 쓸필요 없다.
  // !!!!   아니다 리렌더링을 위해서는 state를 사용해야 한다.

  // 댓글 삭제 기능을 위해 필요한 data객체 meme,id, comment의 id
  const deleteCommentItem = (meme, paramId, commentId) => {
    // 객체를 전개구문으로 복사해주고 comments에 삭제하려는 comment의 id와 다른 id값을 가진 객체만으로 새로운 배열을 반환한다.
    const newMemeObj = {
      ...meme,
      comments: meme.comments.filter(
        (comment) => comment.commentId !== commentId
      ),
    };

    // 리렌더링을 위해 setState로 넣어줌
    setNewMeme(newMemeObj);

    // !!!!  함수안에서 setState를 사용할 경우 함수밖에서 바로 state의 변화를 감지하지 못해 리렌더링이 되지 않는 문제가 있었다.
    // !!!!  그래서 함수 안에서 새로운 배열을 만들어 주고 그것을 payload로 넘겨주면 db는 update가 된다.
    // !!!!  또한 extrareducer를 추가해주면 페이지에서는 state변화를 감지하게 되고 자연스럽게 리렌더링을 하게된다.

    // dispatch로 객체id와 새로 복사한 객체를 보내준다.
    dispatch(__deleteComment({ paramId, newMemeObj }));
  };

  const editCommentItem = (meme, paramId, commentId) => {
    // 새로운 댓글을 리턴하는 prompt 생성
    const editedComment = prompt("수정할 댓글을 입력해주세요^^");

    // 수정하려는 댓글의 id를 가진 객체의 index를 리턴하는 함수 생성
    const commentIndex = meme.comments.findIndex(
      (id) => id.commentId === commentId
    );

    // comments를 새로운 배열로 복사
    const copyMeme = [...meme.comments];

    // findIndex메소드는 조건에 해당하는 값이 없으면 -1을 리턴한다.
    // -1을 리턴하지 않을경우 해당하는 comment를 수정해줌
    if (commentIndex !== -1) {
      copyMeme[commentIndex] = {
        ...copyMeme[commentIndex],
        comment: editedComment,
      };
    }

    // 새로 생성된 comments를 본래 게시글 객체 meme을 복사한 배열에 넣어줌.
    const newMemeObj2 = {
      ...meme,
      comments: copyMeme,
    };

    setNewMeme(newMemeObj2);
    // dispatch로 객체id와 새로 복사한 객체를 보내준다.
    dispatch(__editComment({ paramId, newMemeObj2 }));
  };

  return (
    <CommentItem>
      <div>{comment.comment}⏎</div>
      <Buttons
        type="button"
        onClick={() => {
          editCommentItem(meme, param.id, comment.commentId);
        }}
      >
        수정하기⏎
      </Buttons>
      <Buttons
        type="button"
        onClick={() => {
          deleteCommentItem(meme, param.id, comment.commentId);
        }}
      >
        삭제하기⏎
      </Buttons>
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
