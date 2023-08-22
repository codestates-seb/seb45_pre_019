import { styled } from "styled-components";
import { QuestionContent } from "./QuestionContent";
import { QuestionLeftbar } from "./QuestionLeftbar";

const LiBlock = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid;

  > div {
    display: flex;
  }

  > a {
    margin-left: 52px;
    padding: 0 3px 2px 3px;
    font-size: 13px;
    color: #b5babf;

    &:active,
    &:hover {
      color: #2588d3;
    }
  }
`;

export const QuestionTemplate = (type) => {
  return (
    <LiBlock type={type.type}>
      <div>
        <QuestionLeftbar />
        <QuestionContent type={type.type} />
      </div>
      <a href="/">Add a comment</a>
    </LiBlock>
  );
};
