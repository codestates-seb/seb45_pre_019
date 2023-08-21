import { styled } from "styled-components";

const Block = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SortSelect = styled.div`
  display: flex;
  position: relative;

  label {
    font-size: 12px;
    width: 30%;
  }
  select {
    appearance: none;
    font-size: 13px;
    width: 100%;
    border: 1px solid rgb(201, 205, 209);
    border-radius: 3px;
    padding: 7px 32px 7px 9px;

    &:active {
      border-color: RGB(201 205 209);
      box-shadow: 0 0 0 4px rgba(225, 236, 244, 0.2);
    }
  }
`;

const AnswersHeader = () => {
  return (
    <Block>
      <h2>2 Answers</h2>
      <SortSelect>
        <div>
          <label htmlFor="answers-sort">Sorted by: </label>
        </div>
        <select id="answers-sort">
          <option value="scoredesc">Highest score (defulat)</option>
          <option value="trending">Trending (recent votes count more)</option>
          <option value="modifieddesc">Date modified (newest first)</option>
          <option value="createdesc">Date created (oldest first)</option>
        </select>
      </SortSelect>
    </Block>
  );
};

export default AnswersHeader;
