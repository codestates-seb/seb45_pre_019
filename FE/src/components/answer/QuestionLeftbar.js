import { styled } from "styled-components";
import {
  ArrowUpSvg,
  ArrowDownSvg,
  BookmarkSvg,
  HistorySvg,
} from "../../assets/icons/QuestionSvg";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 16px;

  button:nth-child(1) {
    margin: 2px;
    padding: 10px;
    border: 1px solid #dcdfe2;
    border-radius: 100%;

    &:hover {
      background-color: #fce3cf;
    }
  }
  span {
    margin: 2px;
    padding: 4px;
    font-size: 19px;
    color: black;
    border: none;
  }
  button:nth-child(3) {
    margin: 2px 2px 8px 2px;
    padding: 10px;
    border: 1px solid #dcdfe2;
    border-radius: 100%;
    &:hover {
      background-color: #fce3cf;
    }
  }
  button:nth-child(4) {
    padding: 4px 0;
    border: none;
    fill: #bbc0c5;
  }
  button:nth-child(5) {
    margin: 2px 14px;
    padding: 6px 0;
    border: none;
    fill: #bbc0c5;
  }
`;

export const QuestionLeftbar = () => {
  return (
    <Block>
      <button>
        <ArrowUpSvg />
      </button>
      <span>1</span>
      <button>
        <ArrowDownSvg />
      </button>
      <button>
        <BookmarkSvg />
      </button>
      <button>
        <HistorySvg />
      </button>
    </Block>
  );
};
