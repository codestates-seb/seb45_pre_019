import { useState } from "react";
import styled from "styled-components";

// 태그 컨테이너 스타일
const TagsContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

// 태그의 제목 스타일
const TagsTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

// 부제목 스타일
const Subtitle = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
`;

// 개별 태그 스타일
const Tag = styled.span`
  background-color: ${(props) => props.color};
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

// 태그 내용 스타일
const TagText = styled.span`
  margin-right: 5px;
`;

// 태그 삭제 버튼 스타일
const RemoveButton = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;

// 태그 입력 필드 스타일
const Input = styled.input`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  cursor: text;
`;

const QuestionTags = () => {
  // 현재 추가된 태그들의 상태
  const [tags, setTags] = useState([]);
  // 태그 입력 필드의 상태
  const [inputValue, setInputValue] = useState("");

  // 태그 추가 기능
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "" && tags.length < 5) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  // 태그 삭제 기능
  const removeTag = (tagIndex) => {
    const newTags = tags.filter((_, index) => index !== tagIndex);
    setTags(newTags);
  };

  // 무작위 색상 생성
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <TagsContainer>
      <TagsTitle>Tags</TagsTitle>
      <Subtitle>
        Add up to 5 tags to describe what your question is about. Start typing
        to see suggestions.
      </Subtitle>
      {tags.map((tag, index) => (
        <Tag key={index} color={getRandomColor()}>
          <TagText>{tag}</TagText>
          <RemoveButton onClick={() => removeTag(index)}>X</RemoveButton>
        </Tag>
      ))}
      <Input
        type="text"
        placeholder="Add tag..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleInputKeyDown}
      />
    </TagsContainer>
  );
};

export default QuestionTags;
