import { styled } from "styled-components";
import { AnswersHeader } from "./AnswersHeader";
import { QuestionTemplate } from "./QuestionTemplate";
import { AnswerWrite } from "./AnswerWrite";
import { Tags } from "./Tags";

const Block = styled.div`
  padding-top: 10px;

  > h2 {
    margin: 15px 0 17px;
    font-size: 17px;

    > a {
      color: #0a95ff;
    }
  }
`;

export const Answers = () => {
  return (
    <Block>
      <AnswersHeader />
      <ul>
        <QuestionTemplate type="answer" />
        <QuestionTemplate type="answer" />
      </ul>
      <AnswerWrite />
      <h2>
        Not the answer you&#39;re looking for? Browse other questions tagged{" "}
        <Tags>
          <li>python</li>
          <li>pandas</li>
        </Tags>
        or{" "}
        <a href="http://localhost:3000/questions/ask">ask your own question</a>.
      </h2>
    </Block>
  );
};
