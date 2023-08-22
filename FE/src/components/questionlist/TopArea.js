import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const TopArea = ({ totalQuestions, currentSort, sortedBy }) => {
  const navigate = useNavigate();

  const handleButtonClick = (sort) => {
    sortedBy(sort);
  };

  return (
    <TopAreaWrapper>
      <TitleAndButtonArea>
        <Title>All Questions</Title>
        <AskButton onClick={() => navigate("/questions/ask")}>
          Ask Question
        </AskButton>
      </TitleAndButtonArea>
      <FilterArea>
        <QuestionCount>{totalQuestions} questions</QuestionCount>
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
