import React from "react";
import styled from "styled-components";

const DetailCommentForm = () => {
  return (
    <div>
      <InputForm
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   onSubmitCommentHandler(comment);
      // }}
      >
        <input
          type="text"
          // onChange={(ev) => {
          //   const { value } = ev.target;
          //   setComment({ ...comment, comment: value });
          // }}
        />
        <button>엔터</button>
      </InputForm>
    </div>
  );
};

const InputForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: float;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default DetailCommentForm;
