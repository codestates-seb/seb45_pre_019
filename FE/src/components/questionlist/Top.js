import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";

const TopWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  background-color: white;
  border: 0.5px solid #aaa;
  overflow: hidden;
`;

const TopLeft = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
`;

const QuestionCount = styled.p`
  font-size: 14px;
  color: black;
  margin-top: 5px;
`;

const TopRight = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
`;

const AskButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const FilterButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px 0px;
  margin: 10px;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 0px;
  background-color: ${(props) => (props.active ? "#ccc" : "white")};
  color: black;
  font-size: 14px;
  cursor: pointer;
  border: 0.5px solid #aaa;

  &:hover {
    background-color: ${(props) => (props.active ? "#ccc" : "#f0f0f0")};
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  font-weight: bold;
`;

const Top = () => {
  const [activeFilter, setActiveFilter] = useState("Newest");
  const [questionCount, setQuestionCount] = useState(0);

  const handleFilterClick = async (filter) => {
    setActiveFilter(filter);
    try {
      const response = await fetch("http://localhost:8080/questions/filter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filter: filter }),
      });

      if (response.status !== 200) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      console.log("Filter sent successfully:", await response.json());
    } catch (error) {
      console.error("Error sending filter:", error);
    }
  };

  useEffect(() => {
    const fetchQuestionCount = async () => {
      try {
        const response = await fetch("http://localhost:8080/questions/count");
        if (response.status !== 200) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setQuestionCount(data.count);
      } catch (error) {
        console.error("Error fetching question count:", error);
      }
    };

    fetchQuestionCount();
  }, []);

  return (
    <TopWrapper>
      <TopLeft>
        <Title>All Questions</Title>
        <QuestionCount>{questionCount} questions</QuestionCount>
      </TopLeft>
      <TopRight>
        <AskButton onClick={() => (window.location.href = "/questions/ask")}>
          Ask Question
        </AskButton>
        <FilterButtonGroup>
          <FilterButton
            active={activeFilter === "Newest"}
            onClick={() => handleFilterClick("Newest")}
          >
            최신 순
          </FilterButton>
          <FilterButton
            active={activeFilter === "Recommended"}
            onClick={() => handleFilterClick("Recommended")}
          >
            추천 순
          </FilterButton>
          <FilterButton
            active={activeFilter === "Views"}
            onClick={() => handleFilterClick("Views")}
          >
            조회 순
          </FilterButton>
        </FilterButtonGroup>
      </TopRight>
    </TopWrapper>
  );
};
export default Top;
