import React from "react";
import styled from "styled-components";
import Home_card_list from "../components/home_card_list/Home_card_list";
import Home_input_form from "../components/home_input_form/Home_input_form";

const Home = () => {
  return (
    <Homebackground>
      <Inputform>
        <InputBox>
          <Home_input_form />
        </InputBox>
      </Inputform>
      <Cardbox>
        <Cardlist>
          <Home_card_list />
        </Cardlist>
      </Cardbox>
    </Homebackground>
  );
};

const Homebackground = styled.div`
  background-color: #aca8a8;
`;

const Inputform = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const InputBox = styled.div`
  width: 60%;
  height: 150px;
  display: flex;
  flex-wrap: wrap; /*수직 정렬*/
  align-items: center;
  justify-content: center;
`;
const Cardlist = styled.div`
  width: 90%;
  height: 90%;
`;
const Cardbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export default Home;
