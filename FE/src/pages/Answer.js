import { styled } from "styled-components";
import { QuestionHeader } from "../components/answer/QuestionHeader";
import { QuestionTemplate } from "../components/answer/QuestionTemplate";
import { Answers } from "../components/answer/Answers";

const Container = styled.div`
  /* 좌우 모서리와 간격 82px 컨테이너 */
  width: calc(100% - 164px);
  max-width: 1100px;
  padding: 24px;
`;

const Content = styled.div``;

const AnswerPage = () => {
  return (
    <Container>
      <QuestionHeader />
      <Content>
        <QuestionTemplate type="question" />
        <Answers />
      </Content>
    </Container>
  );
};

export default AnswerPage;
