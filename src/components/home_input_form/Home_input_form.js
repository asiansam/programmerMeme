import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { __getmemes } from "../../redux/modules/homeMod";
import { useDispatch } from "react-redux";

import { __memeAdd } from "../../redux/modules/homeMod";

import { memo } from "react";

const Home_input_form = () => {
  const [memes, setMemes] = useState("", []);

  const [title, setTitle] = useState("", []);

  const [url, setUrl] = useState("", []);

  const dispatch = useDispatch();

  const addmeme = (e) => {
    e.preventDefault();
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    dispatch(
      __memeAdd({
        id: 0,
        title: title,
        url: url,
        comments: [
          {
            commentId: 0,
            comment: "댓글을 달아요1",
          },
        ],
      })
    ).then(() => {
      dispatch(__getmemes()).then((res) => {
        setMemes(res);
      });
    });
  };

  useEffect(() => {
    dispatch(__getmemes()).then((res) => {
      setMemes(res);
    });
  }, [dispatch]);

  return (
    <Container>
      <p>isWhere: 상세 보기</p>
      <Boxform>
        <Boxwrap>
          <Titlebox
            type="text"
            placeholder="제목을 입력해 주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value, [])}
          />
          <Urlbox
            type="text"
            placeholder="IMAGE URL을 입력해 주세요"
            value={url}
            onChange={(e) => setUrl(e.target.value, [])}
          ></Urlbox>
        </Boxwrap>
        <Addbutton onClick={addmeme}>추가하기</Addbutton>
      </Boxform>
    </Container>
  );
};

const Container = styled.div`
  height: 150px;
  width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Titlebox = styled.input`
  display: flex;
  width: 170px;
  height: 25px;
`;
const Urlbox = styled.input`
  width: 300px;
  height: 25px;
  margin-top: 25px;
  display: flex;
`;
const Boxwrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  align-items: center;
  justify-content: center;
  margin-left: 120px;
`;

const Addbutton = styled.button`
  width: 110px;
  height: 80px;
  display: block;
  float: right;
  margin-left: 70px;
  margin-top: 10px;
`;
const Boxform = styled.form`
  display: flex;
`;

export default memo(Home_input_form);
