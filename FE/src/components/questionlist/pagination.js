import { useState } from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#007bff" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: ${(props) => (props.active ? "1px solid #007bff" : "1px solid #aaa")};
  border-radius: 3px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Pagination = ({ total, current, onPageChange }) => {
  const totalPages = Math.ceil(total / 10);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <PaginationWrapper>
      <PageButton
        disabled={current === 1}
        onClick={() => handlePageChange(current - 1)}
      >
        &lt; Prev
      </PageButton>
      {[...Array(totalPages)].map((_, index) => (
        <PageButton
          key={index}
          active={index + 1 === current}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </PageButton>
      ))}
      <PageButton
        disabled={current === totalPages}
        onClick={() => handlePageChange(current + 1)}
      >
        Next &gt;
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
