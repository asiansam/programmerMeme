import React from "react";
import styled from "styled-components";
import Home_card_list from "../components/home_card_list/Home_card_list";
import Home_input_form from "../components/home_input_form/Home_input_form";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

const Inputform = styled.div`
  width: 100%;
  height: 100%;
  border: solid black;
  display: flex;
  justify-content: center;
`;
const InputBox = styled.div`
  width: 50%;
  height: 100px;
  border: solid black;
  display: flex;
  align-items: center;
`;
const Cardlist = styled.div`
  width: 90%;
  height: 90%;
  border: solid black;
`;
const Cardbox = styled.div`
  width: 100%;
  height: 100%;
  border: solid black;
  display: flex;
  justify-content: center;
`;

export default Home;
