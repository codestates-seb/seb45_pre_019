import { useState } from "react";
import styled from "styled-components";

const TagsContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const TagsTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Subtitle = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  background-color: ${(props) => props.color};
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const TagText = styled.span`
  margin-right: 5px;
`;

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

const Input = styled.input`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  cursor: text;
`;

const QuestionTags = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "" && tags.length < 5) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (tagIndex) => {
    const newTags = tags.filter((_, index) => index !== tagIndex);
    setTags(newTags);
  };

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
