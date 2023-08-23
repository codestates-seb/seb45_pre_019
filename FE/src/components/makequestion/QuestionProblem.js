import { useState } from "react";
import styled from "styled-components";

// 문제 세부 사항을 입력할 수 있는 컨테이너 스타일
const ProblemContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

// 문제의 제목 스타일
const ProblemText = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

// 문제 설명 스타일
const ProblemDescription = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

// 사용자가 문제 세부 사항을 입력할 수 있는 텍스트 영역 스타일
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
  // 사용자가 입력한 문제의 로컬 상태
  const [localProblem, setLocalProblem] = useState("");

  // 사용자 입력 변화를 감지하고 로컬 상태 및 부모 컴포넌트의 상태를 업데이트하는 함수
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
