import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  __getmemes,
  __memeDelete,
  __memeUpdate,
} from "../../redux/modules/homeMod";

const Home_card_list = () => {
  const carddata = useSelector((state) => state.memeReducer.memes);
  console.log(carddata);
  const dispatch = useDispatch();

  const deleteMeme = (id) => {
    dispatch(__memeDelete(id));
    dispatch(__getmemes());
  };

  const editCard = (meme, id) => {
    const editing = prompt("타이틀 수정!", "");
    const edit = {
      ...meme,
      title: editing,
    };

    dispatch(__memeUpdate({ id, edit }));
    dispatch(__getmemes());
  };

  return (
    <Cardrow>
      {carddata.map((cardData) => {
        return (
          <CardBox key={cardData.id}>
            <Buttonwrap>
              <Allbutton onClick={() => deleteMeme(cardData.id)}>
                취소
              </Allbutton>
              <Allbutton onClick={() => editCard(cardData, cardData.id)}>
                수정
              </Allbutton>
            </Buttonwrap>
            <Imgbox src={cardData.url}></Imgbox>
            <Link to={`/${cardData.id}`}>{cardData.title}</Link>
          </CardBox>
        );
      })}
    </Cardrow>
  );
};
const Cardrow = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;

  flex-direction: row;
  justify-content: center;
`;

const CardBox = styled.div`
  width: 150px;
  height: 200px;
  margin: 20px;

  background-color: white;
`;
const Imgbox = styled.img`
  width: 150px;
  height: 150px;
  border-bottom: solid black;
`;
const Allbutton = styled.button`
  font-weight: bold;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent; // 뒷 배경을 부모와 같게 맞춰줌
  border: 0;
  font-size: 15px;
  cursor: pointer;
`;
const Buttonwrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #aca8a8;
`;
export default Home_card_list;
