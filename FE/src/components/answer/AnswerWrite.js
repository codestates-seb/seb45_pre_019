import styled from "styled-components";

const Block = styled.div`
  h2 {
    margin-bottom: 19px;
    padding-top: 20px;
    font-size: 20px;
  }
  > div {
    height: 284px;
    margin-bottom: 16px;
    background-color: #f1f2f3;
    border: 1px solid #ccd0d3;
    line-height: 284px;
    text-align: center;
    border-radius: 6px;
  }
`;

const PostAnswerButton = styled.button`
  width: 130px;
  margin: 0 2px 0 2px;
  align-items: flex-start;

  border: none;
  padding: 10px;
  min-width: 100px;
  background-color: var(--color-sub-blue);
  color: var(--color-white);

  &:hover {
    background-color: #0074cc;
  }
`;

export const AnswerWrite = () => {
  return (
    <Block>
      <h2>Your Answer</h2>
      <div>Post Editor</div>
      <PostAnswerButton>
        <a href="/questions/answer">Post Your Answer</a>
      </PostAnswerButton>
    </Block>
  );
};
