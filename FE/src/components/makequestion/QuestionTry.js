import { useState } from "react";
import styled from "styled-components";

const TryContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const TryText = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const TryDescription = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const Input = styled.textarea`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  height: 300px;
  cursor: text;

  &:focus {
    border-color: blue;
    box-shadow: 0 0 5px skyblue;
  }
`;

const QuestionTry = ({ setTryDetails }) => {
  const [localTryDetails, setLocalTryDetails] = useState("");

  const handleChange = (e) => {
    setLocalTryDetails(e.target.value);
    if (setTryDetails) {
      setTryDetails(e.target.value);
    }
  };

  return (
    <TryContainer>
      <TryText>What did you try and what were you expecting?</TryText>
      <TryDescription>
        Describe what you tried, what you expected to happen, and what actually
        resulted. Minimum 20 characters.
      </TryDescription>
      <Input
        value={localTryDetails}
        onChange={handleChange}
        placeholder="Enter your problem details..."
      />
    </TryContainer>
  );
};

export default QuestionTry;
