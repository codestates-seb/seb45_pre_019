import { styled, css } from "styled-components";

// Pagination 컴포넌트는 전체 질문 수와 현재 페이지 번호를 기반으로 페이지네이션 버튼을 렌더링합니다.
const Pagination = ({ totalQuestions, currentPage, onChangePage }) => {
  // 전체 페이지 수를 계산합니다.
  const totalPage = Math.ceil(totalQuestions / 5);

  currentPage = +currentPage; // currentPage를 숫자로 타입 변환

  // 페이지 변경 핸들러
  const handlePageChange = (page) => {
    onChangePage(page);
  };

  return (
    <PaginationWrapper>
      {/* 이전 페이지로 이동하는 버튼 */}
      <PageButton
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </PageButton>
      {/* 각 페이지 번호에 대한 버튼을 렌더링 */}
      {[...Array(totalPage)].map((_, index) => (
        <PageButton
          key={index}
          $active={index + 1 === currentPage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </PageButton>
      ))}
      {/* 다음 페이지로 이동하는 버튼 */}
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
