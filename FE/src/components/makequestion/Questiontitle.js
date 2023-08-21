import { useState } from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const TitleDescription = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  cursor: text;

  &:focus {
    border-color: blue;
    box-shadow: 0 0 5px skyblue;
  }
`;

const Questiontitle = ({ setTitle }) => {
  const [localTitle, setLocalTitle] = useState("");

  const handleChange = (e) => {
    setLocalTitle(e.target.value);
    if (setTitle) {
      setTitle(e.target.value);
    }
  };

  return (
    <TitleContainer>
      <TitleText>Title</TitleText>
      <TitleDescription>
        Be specific and imagine you’re asking a question to another person.
      </TitleDescription>
      <Input
        type="text"
        value={localTitle}
        onChange={handleChange}
        placeholder="Enter your title details..."
      />
    </TitleContainer>
  );
};

export default Questiontitle;
