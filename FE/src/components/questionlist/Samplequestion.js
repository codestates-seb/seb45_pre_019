import styled from "styled-components";
import { useState, useEffect } from "react";

const QuestionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  background-color: white;
  border: 0.5px solid #aaa;
  overflow: hidden;
  padding: 20px;
  margin-bottom: 0px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const VoteCount = styled.p`
  font-size: 14px;
  color: black;
  margin: 5px 0;
`;

const AnswerCount = styled.p`
  font-size: 14px;
  color: black;
  margin: 5px 0;
`;

const ViewCount = styled.p`
  font-size: 14px;
  color: black;
  margin: 5px 0;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #555;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;

const Tag = styled.span`
  font-size: 12px;
  color: #666;
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 5px;
`;

const NameTime = styled.div`
  font-size: 12px;
  color: #999;
  display: flex;
  justify-content: flex-end;
  align-items: center; /* Add this line to vertically center content */

  span {
    display: flex; /* Display spans as flex containers */
    align-items: center; /* Vertically center content inside spans */
    gap: 5px; /* Add a small gap between name and time */
  }
`;

const SampleQuestion = () => {
  const [question, setQuestion] = useState({
    title: "",
    problem: "",
    tryDetails: "",
    tags: [],
    name: "",
    time: "",
  });

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch("http://localhost:8080/questions/details");
        const data = await response.json();
        setQuestion({
          title: data.title,
          problem: data.problem,
          tryDetails: data.tryDetails,
          tags: data.tags,
          name: data.name,
          time: data.time,
        });
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    fetchQuestion();
  }, []);

  return (
    <QuestionWrapper>
      <LeftColumn>
        <VoteCount>0 vote</VoteCount>
        <AnswerCount>0 answers</AnswerCount>
        <ViewCount>0 views</ViewCount>
      </LeftColumn>
      <RightColumn>
        <Title>{question.title}</Title>
        <Text>
          {question.problem} {question.tryDetails}
        </Text>
        <Tags>
          {question.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <NameTime>
          <span>
            <span>{question.name}</span>
            <span>{question.time}</span>
          </span>
        </NameTime>
      </RightColumn>
    </QuestionWrapper>
  );
};

export default SampleQuestion;
