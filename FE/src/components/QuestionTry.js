import styled from "styled-components";

const TryContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column; //문제해결을 위한 시도 컨테이너 박스
`;

const TryText = styled.div`
  font-weight: bold;
  margin-bottom: 10px; //문제 해결란 제목
`;

const TryDescription = styled.div`
  font-size: 14px;
  margin-bottom: 10px; // 문제 해결란 부가설명
`;

const Input = styled.input`
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
  } //문제 해결을 위한 노력을 입력하는 창
`;

const QuestionTry = () => {
  return (
    <TryContainer>
      <TryText>What did you try and what were you expecting?</TryText>
      <TryDescription>
        Describe what you tried, what you expected to happen, and what actually
        resulted. Minimum 20 characters.
      </TryDescription>
      <Input type="text" placeholder="Enter your problem details..." />
    </TryContainer>
  );
};

export default QuestionTry;
