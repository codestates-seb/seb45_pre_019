import { styled, css } from "styled-components";

const Pagination = ({ totalQuestions, currentPage, onChangePage }) => {
  const totalPage = Math.ceil(totalQuestions / 5);
  currentPage = +currentPage; // currentPage 타입 변환

  const handlePageChange = (page) => {
    onChangePage(page);
  };

  return (
    <PaginationWrapper>
      <PageButton
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </PageButton>
      {[...Array(totalPage)].map((_, index) => (
        <PageButton
          key={index}
          $active={index + 1 === currentPage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </PageButton>
      ))}
      <PageButton
        disabled={currentPage === totalPage}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </PageButton>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 20px;
`;

const PageButton = styled.button`
  padding: 4px 10px;
  margin: 0 2px;
  border-radius: 4px;

  ${(props) =>
    props.$active &&
    css`
      color: var(--color-white);
      background-color: var(--color-main);
      border: 1px solid var(--color-main);
    `}

  ${(props) =>
    props.$active ||
    css`
      &:hover {
        background-color: #d6d9dc;
      }
    `}


  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default Pagination;
