import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./detail-style.css";
import DetailCommentList from "../components/detailCommentList/DetailCommentList";
import styled from "styled-components";
import { __getContents } from "../redux/modules/detailMod";

const Detail = () => {
  // useDispatch는 함수안에서 불러 사용할수 없기때문에 변수로 지정해준다.
  const dispatch = useDispatch();
  const param = useParams();

  // const [newMeme, setNewMeme] = useState("");

  useEffect(() => {
    try {
      // getContents에 path id값을 payload로 넘겨준다.
      dispatch(__getContents(param.id));
    } catch (error) {
      console.log(error);
    }
  }, []);

  // axios로 불러온 객체를 usaSelector로 불러온다.
  const meme = useSelector((state) => state.contents.meme);

  return (
    <DetailBox>
      <TitleBox>
        <h1> &#123;isWhere: 상세 보기 &#125;</h1>
      </TitleBox>
      <ContentsBox>
        <ImageBox>
          <img className="imgCard" src={meme.url} alt="meme" />
        </ImageBox>
        <CommentBox>
          <DetailCommentList
            title={meme.title}
            comments={
              meme.comments
            } /*list는 전역상태관리할 필요가 없을것 같아서 props로 내려주었다.*/
          />
        </CommentBox>
      </ContentsBox>
    </DetailBox>
  );
};

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentsBox = styled.div`
  display: flex;
`;

const TitleBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const CommentBox = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  display: float;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  text-align: center;
  border: 1px solid;
  width: 50%;
  height: 100%;
  padding: 10px;
`;

export default Detail;
