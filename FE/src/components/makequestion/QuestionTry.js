import { useState } from "react";
import styled from "styled-components";

// 시도한 내용 컨테이너 스타일
const TryContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

// 시도한 내용의 제목 스타일
const TryText = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

// 시도한 내용의 부제목 스타일
const TryDescription = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

// 시도한 내용 입력 필드 스타일
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
  // 로컬 상태를 사용하여 사용자의 입력을 관리
  const [localTryDetails, setLocalTryDetails] = useState("");

  // 입력 값이 변경될 때마다 상태 업데이트
  const handleChange = (e) => {
    setLocalTryDetails(e.target.value);
    // 부모 컴포넌트로 사용자의 입력을 전달 (옵셔널)
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
