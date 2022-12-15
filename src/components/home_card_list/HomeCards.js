import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getCardsList } from "../../redux/modules/memesCardsSlice";
// import axios from "axios";


const HomeCards = () => {

    const dispatch = useDispatch();

    const { isLoading, error, cards } = useSelector((state) => state.cards);

    useEffect(() => {
        dispatch(__getCardsList())
    }, [dispatch])


    if (isLoading) {
        return <div>로딩 중....</div>
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <Main_Home>
                <Main_Home_Card_Set>
                    <Home_Cards_Lsit_Btn_Box>
                        <Btn>
                            수정
                        </Btn>
                        <Btn>
                            삭제
                        </Btn>
                    </Home_Cards_Lsit_Btn_Box>
                    <Home_Cards_Lsit_Img>
                        <div>{cards.map((card) => (
                            <img key={card.id} scr={card.url} />
                        ))}</div>

                    </Home_Cards_Lsit_Img>
                    <Desc>
                        <Home_Cards_Lsit_title>
                            {cards[0].title}
                            {/* {cards.map((card) => (
                                <div key={card.id}>{card.title}</div>
                            ))} */}
                        </Home_Cards_Lsit_title>
                    </Desc>
                </Main_Home_Card_Set>
            </Main_Home>
        </div>
    )
}

export default HomeCards



const Main_Home = styled.div`
display: flex;
justify-content: space-between;
gap: 32px;
align-items: flex-start;


`;

const Main_Home_Card_Set = styled.div`
display: flex;
flex-direction: column;


`;


const Home_Cards_Lsit_Btn_Box = styled.div`
display: flex;
justify-content: space-between;


`;

const Desc = styled.div`
border: solid 1px blue;
display: flex;
`;


const Btn = styled.button`
width: 40px;
height: 20px;
/* display: flex;
justify-content: center; */
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
`;

const Home_Cards_Lsit_Img = styled.div`
width: 104px;
height: 96px;
/* display: flex;
flex-direction: row; */
`;

const Home_Cards_Lsit_title = styled.div`
width: 178px;
height: 30px;
border: solid 1px green;





`;
