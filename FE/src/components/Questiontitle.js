import styled from "styled-components";

const TitleContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column; //제목 컨테이너박스
`;

const TitleText = styled.div`
  font-weight: bold;
  margin-bottom: 10px; //제목,제목이름은 Title
`;

const TitleDescription = styled.div`
  font-size: 14px;
  margin-bottom: 10px; //제목 부가설명
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  cursor: text; //제목 입력창

  &:focus {
    border-color: blue;
    box-shadow: 0 0 5px skyblue; //제목 입력창을 누를 시 파란색으로 표시
  }
`;

const Questiontitle = () => {
  return (
    <TitleContainer>
      <TitleText>Title</TitleText>
      <TitleDescription>
        Be specific and imagine you’re asking a question to another person.
      </TitleDescription>
      <Input type="text" placeholder="Enter your title details..." />
    </TitleContainer>
  );
};

export default Questiontitle;
