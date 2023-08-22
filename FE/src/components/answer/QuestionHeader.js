import styled from "styled-components";

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    width: 935px;
    margin-bottom: 8px;
    font-size: 27px;
    font-weight: 400;
    line-height: 35.1px;
    margin-block-end: 8px;
    color: black;
  }
`;

const AskQuestionButton = styled.button`
  max-width: 100px;
  margin-left: 12px;
  min-width: 100px;

  border: none;
  padding: 10px;
  min-width: 100px;
  background-color: var(--color-sub-blue);
  color: var(--color-white);

  &:hover {
    background-color: #0074cc;
  }
`;

const Detail = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 8px;
  border-bottom: 1px solid lightgray;
  li {
    margin-bottom: 8px;
    font-size: 13px;
  }
  li:not(:last-of-type) {
    margin-right: 16px;
  }
  span {
    margin-right: 5px;
    color: #6a737c;
  }
`;

export const QuestionHeader = () => {
  return (
    <>
      <Title>
        <h1>Question Title</h1>
        <AskQuestionButton>
          <a href="/questions/ask">Ask Question</a>
        </AskQuestionButton>
      </Title>
      <Detail>
        <li>
          <span>Asked</span>
          today
        </li>
        <li>
          <span>modified</span>
          today
        </li>
        <li>
          <span>Viewed</span>
          4k times
        </li>
      </Detail>
    </>
  );
};
