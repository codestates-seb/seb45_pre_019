import { useState } from "react";
import styled from "styled-components";
import Questiontitle from "../components/Questiontitle";
import QuestionProblem from "../components/QuestionProblem";
import QuestionTry from "../components/QuestionTry";
import QuestionTags from "../components/QuestionTags";

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const NextButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer; //Next버튼, 누르면 다음 질문으로 넘어감
`;

const SubmitButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 10px; // Add margin to separate from the components
`;

const InactiveComponent = styled.div`
  opacity: 0.3; //비활성화된 질문을 흐릿하게 만듬
`;

const QuestionPage = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep(activeStep + 1); //처음에는 첫번째 질문만 활성화, 그리고 버튼을 누를때마다 그 다음 질문까지 활성화
  };

  return (
    <PageContainer>
      <Questiontitle />
      {activeStep >= 2 ? (
        <QuestionProblem />
      ) : (
        <InactiveComponent>
          <QuestionProblem />
        </InactiveComponent>
      )}
      {activeStep >= 3 ? (
        <QuestionTry />
      ) : (
        <InactiveComponent>
          <QuestionTry />
        </InactiveComponent>
      )}
      {activeStep >= 4 ? (
        <QuestionTags />
      ) : (
        <InactiveComponent>
          <QuestionTags />
        </InactiveComponent>
      )}

      {activeStep === 4 ? (
        <SubmitButton>Submit</SubmitButton>
      ) : (
        <NextButton onClick={handleNext}>Next</NextButton>
      )}
    </PageContainer> //제목, 문제점, 문제해결을 위한시도, 태그 네 개의 컴포넌트들을 Next버튼이 눌릴 때마다 하나씩 활성화 해서 입력창에 입력을 한다.
    //모든 입력을 마친 후에는 Submit버튼을 눌러서 등록한다.
  );
};

export default QuestionPage;
