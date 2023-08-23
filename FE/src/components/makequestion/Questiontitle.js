import { useState } from "react";
import styled from "styled-components";

// 제목 입력 컨테이너 스타일
const TitleContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

// 제목의 제목 스타일
const TitleText = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

// 제목의 부제목 스타일
const TitleDescription = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

// 제목 입력 필드 스타일
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
  // 로컬 상태를 사용하여 사용자의 입력을 관리
  const [localTitle, setLocalTitle] = useState("");

  // 입력 값이 변경될 때마다 상태 업데이트
  const handleChange = (e) => {
    setLocalTitle(e.target.value);

    // 부모 컴포넌트로 사용자의 입력을 전달 (옵셔널)
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
