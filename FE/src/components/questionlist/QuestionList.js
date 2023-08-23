import { Link } from "react-router-dom";
import { styled } from "styled-components";

// QuestionList 컴포넌트는 주어진 질문 항목을 표시합니다.
const QuestionList = ({ item }) => {
  // 질문의 고유 ID를 가져옵니다.
  const questionId = item.questionId;

  return (
    <QuestionListItem>
      <LeftColumn>
        {/* 질문의 투표 수를 표시합니다. */}
        <span className="blackText">{item.voteCount} votes</span>
        {/* 질문의 조회 수를 표시합니다. */}
        <span>{item.views} views</span>
      </LeftColumn>
      <RightColumn>
        {/* 질문 제목을 클릭하면 해당 질문의 세부 페이지로 이동합니다. */}
        <ContentTitle>
          <Link to={`/questions/${questionId}`}>{item.questionTitle}</Link>
        </ContentTitle>
        {/* 질문의 내용 일부를 표시합니다. */}
        <ContentExcerpt>{item.questionProblem}</ContentExcerpt>
        <ContentMeta>
          {/* 질문에 연결된 태그를 표시합니다. */}
          <MetaTags>
            {item.tags.map((tag) => (
              <button key={tag}>{tag}</button>
            ))}
          </MetaTags>
          {/* 질문 작성자의 이름을 표시합니다. */}
          <UserName>{item.account.accountName}</UserName>
        </ContentMeta>
      </RightColumn>
    </QuestionListItem>
  );
};

// 아래는 스타일 컴포넌트입니다. 각 컴포넌트의 스타일을 정의합니다.

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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
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
