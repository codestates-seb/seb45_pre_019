import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

// TopArea 컴포넌트는 질문 리스트의 상단 영역을 표시합니다.
const TopArea = ({ totalQuestions, currentSort, sortedBy }) => {
  const navigate = useNavigate();

  // 버튼 클릭 시 해당 정렬 방식을 설정합니다.
  const handleButtonClick = (sort) => {
    sortedBy(sort);
  };

  return (
    <TopAreaWrapper>
      <TitleAndButtonArea>
        <Title>All Questions</Title>
        {/* "Ask Question" 버튼 클릭 시 "/questions/ask" 페이지로 이동합니다. */}
        <AskButton onClick={() => navigate("/questions/ask")}>
          Ask Question
        </AskButton>
      </TitleAndButtonArea>
      <FilterArea>
        {/* 총 질문 개수를 표시합니다. */}
        <QuestionCount>{totalQuestions} questions</QuestionCount>
        {/* 정렬 방식에 따라 버튼을 활성화하고, 해당 정렬 방식으로 데이터를 정렬합니다. */}
        <FilterButtonGroup>
          <FilterButton
            $active={currentSort === "new"}
            onClick={() => handleButtonClick("new")}
          >
            최신 순
          </FilterButton>
          <FilterButton
            $active={currentSort === "votes"}
            onClick={() => handleButtonClick("votes")}
          >
            추천 순
          </FilterButton>
          <FilterButton
            $active={currentSort === "views"}
            onClick={() => handleButtonClick("views")}
          >
            조회 순
          </FilterButton>
        </FilterButtonGroup>
      </FilterArea>
    </TopAreaWrapper>
  );
};

// 아래는 스타일 컴포넌트입니다. 각 컴포넌트의 스타일을 정의합니다.

const TopAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleAndButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
`;

const Title = styled.h2`
  font-size: 27px;
`;

const AskButton = styled.button`
  border: none;
  padding: 10px 12px;
  background-color: var(--color-sub-blue);
  color: var(--color-white);
  font-size: 13px;

  &:hover {
    background-color: #0074cc;
  }
`;

const FilterArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const QuestionCount = styled.p`
  font-size: 17px;
`;

const FilterButtonGroup = styled.div`
  display: flex;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  font-size: 12px;
  border: 1px solid #babfc4;

  &.active {
    background-color: #e3e6e8;
  }
  background-color: ${(props) => props.$active && "#e3e6e8"};

  &:hover {
    background-color: #e3e6e8;
  }

  &:nth-of-type(1) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:nth-of-type(2) {
    border-radius: 0;
    border-right: 0;
    border-left: 0;
  }

  &:nth-of-type(3) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default TopArea;
