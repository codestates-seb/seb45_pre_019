import styled from "styled-components";

const ProblemContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column; //문제점 컨테이너박스
`;

const ProblemText = styled.div`
  font-weight: bold;
  margin-bottom: 10px; //문제점 제목
`;

const ProblemDescription = styled.div`
  font-size: 14px;
  margin-bottom: 10px; //문제점 부가설명
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
  } //문제를 설명하는 입력창
`;

const QuestionProblem = () => {
  return (
    <ProblemContainer>
      <ProblemText>What are the details of your problem?</ProblemText>
      <ProblemDescription>
        Introduce the problem and expand on what you put in the title. Minimum
        20 characters.
      </ProblemDescription>
      <Input type="text" placeholder="Enter your problem details..." />
    </ProblemContainer>
  );
};

export default QuestionProblem;
