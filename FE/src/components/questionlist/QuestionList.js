import { Link } from "react-router-dom";
import { styled } from "styled-components";

const QuestionList = ({ item }) => {
  const questionId = item.questionId;

  return (
    <QuestionListItem>
      <LeftColumn>
        <span className="blackText">{item.voteCount} votes</span>
        <span>{item.views} views</span>
      </LeftColumn>
      <RightColumn>
        <ContentTitle>
          <Link to={`/questions/${questionId}`}>{item.questionTitle}</Link>
        </ContentTitle>
        <ContentExcerpt>{item.questionProblem}</ContentExcerpt>
        <ContentMeta>
          <MetaTags>
            {item.tags.map((tag) => (
              <button key={tag}>{tag}</button>
            ))}
          </MetaTags>
          <UserName>{item.account.accountName}</UserName>
        </ContentMeta>
      </RightColumn>
    </QuestionListItem>
  );
};

const QuestionListItem = styled.li`
  display: flex;
  min-height: 110px;
  padding: 16px;
  border-top: 1px solid var(--color-line);
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15%;
  margin-right: 20px;
  text-align: right;

  & span {
    margin-bottom: 8px;
    font-size: 13px;
    color: #6a737c;

    &.blackText {
      color: var(--color-black);
    }
  }
`;

const RightColumn = styled.div`
  width: 80%;
`;

const ContentTitle = styled.h3`
  color: #0074cc;
  font-size: 17px;
`;

const ContentExcerpt = styled.p`
  margin: 8px 0;
  font-size: 13px;
`;

const ContentMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const MetaTags = styled.div`
  & button {
    border: none;
    margin-right: 4px;
    padding: 4px 6px;
    background-color: var(--color-sub-lightblue);
    color: #39739d;
  }
`;

const UserName = styled.div`
  max-width: 100%;
  color: #0074cc;
  font-size: 12px;
  text-align: right;
`;

export default QuestionList;
