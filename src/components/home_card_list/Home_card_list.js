import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getCardsList, __delcardsList } from "../../redux/modules/memesCardsSlice";
import HomeCards from "./HomeCards";
import axios from "axios";

const HomeCardList = () => {
  // const dispatch = useDispatch();

  // const { isLoading, error, cards } = useSelector((state) => state.cards);

  // useEffect(() => {
  //   dispatch(__getCardsList())
  // }, [dispatch])

  // console.log('cards', cards)

  // if (isLoading) {
  //   return <div>로딩 중....</div>
  // }

  // if (error) {
  //   return <div>{error.message}</div>;
  // }
  // data.data.title

  return (

    <div>
      <HomeCards />
    </div>
    // <Main_Home>
    //   <Main_Home_Card_Set>
    //     <Home_Cards_Lsit_Btn_Box>
    //       <Btn>
    //         수정
    //       </Btn>
    //       <Btn>
    //         삭제
    //       </Btn>
    //     </Home_Cards_Lsit_Btn_Box>
    //     <Home_Cards_Lsit_Img>
    //       <div>{cards.map((card) => (
    //         <image key={card.id} source={card.url} />
    //       ))}</div>

    //     </Home_Cards_Lsit_Img>
    //     <Desc>
    //       <Home_Cards_Lsit_title>
    //         {cards.map((card) => (
    //           <div key={card.id}>{card.title}</div>
    //         ))}
    //       </Home_Cards_Lsit_title>
    //     </Desc>
    //   </Main_Home_Card_Set>
    // </Main_Home>
  )

};


export default HomeCardList;


//카드 리스트를 맵으로 보여준다.
//


//수정 
//삭제 
//리스트
//타이틀  
{/* <div>
  <div>수정</div>
  <div>삭제</div>
  <div>이미지</div>
  <div>타이틀 </div>
</div> */}