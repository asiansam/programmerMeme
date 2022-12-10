import React from "react";
import styled from "styled-components";

const DetailCommentForm = () => {
  return (
    <div>
      <InputForm>
        <input />
        <button>엔터</button>
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

export default DetailCommentForm;
