import { useState } from "react";
import styled from "styled-components";

const ProblemContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const ProblemText = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProblemDescription = styled.div`
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

const QuestionProblem = ({ setProblem }) => {
  const [localProblem, setLocalProblem] = useState("");

  const handleChange = (e) => {
    setLocalProblem(e.target.value);
    if (setProblem) {
      setProblem(e.target.value);
    }
  };

  return (
    <ProblemContainer>
      <ProblemText>What are the details of your problem?</ProblemText>
      <ProblemDescription>
        Introduce the problem and expand on what you put in the title. Minimum
        20 characters.
      </ProblemDescription>
      <Input
        value={localProblem}
        onChange={handleChange}
        placeholder="Enter your problem details..."
      />
    </ProblemContainer>
  );
};

export default QuestionProblem;
