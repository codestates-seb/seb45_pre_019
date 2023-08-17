import { useState } from "react";
import styled from "styled-components";

const TagsContainer = styled.div`
  border: 1px solid #ccc; /* Gray border */
  border-radius: 5px; /* Rounded corners */
  padding: 20px; /* Padding inside the box */
  background-color: white; /* White background */
  display: flex;
  flex-direction: column; // 태그 컨테이너 박스
`;

const TagsTitle = styled.div`
  font-weight: bold; /* Bold font */
  margin-bottom: 5px; //태그제목, Tags
`;

const Subtitle = styled.div`
  font-size: 12px;
  color: #666; /* Gray color */
  margin-bottom: 10px; //태그 부연설명
`;

const Tag = styled.span`
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center; //태그가 완료되면 생기는 태그
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
  } //태그 삭제버튼
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  cursor: text; //태그 입력창
`;

const QuestionTags = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState(""); //useState를 이용하여 태그의 상태를 변경함

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue(""); //엔터키를 누를 시 태그가 생성됨
    }
  };

  const removeTag = (tagIndex) => {
    const newTags = tags.filter((_, index) => index !== tagIndex);
    setTags(newTags); // 태그 삭제 버튼을 누를 시 태그가 삭제됨
  };

  return (
    <TagsContainer>
      <TagsTitle>Tags</TagsTitle>
      <Subtitle>
        Add up to 5 tags to describe what your question is about. Start typing
        to see suggestions.
      </Subtitle>
      {tags.map((tag, index) => (
        <Tag key={index}>
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
