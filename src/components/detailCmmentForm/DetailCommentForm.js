import React from "react";
import styled from "styled-components";

const DetailCommentForm = () => {
  // const [contents, setContents] = useState(null);
  // const [comment, setComment] = useState({ comment: "" });

  // const fetchContents = async () => {
  //   const { data } = await axios.get("http://localhost:3001/contents");
  //   setContents(data);
  // };

  // const onSubmitCommentHandler = (comment) => {
  //   axios.post("http://localhost:3001/contents", comment);
  // };

  // useEffect(() => {
  //   fetchContents();
  // }, []);

  // console.log(contents);

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
