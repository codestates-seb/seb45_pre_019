import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import TopArea from "../components/questionlist/TopArea";
import QuestionList from "../components/questionlist/QuestionList";
import Pagination from "../components/questionlist/Pagination";
import loadingImg from "../assets/images/loading.gif";

// 임시 :: 서버와 통신 안될 경우 dummy data
import dummyData from "../dummy-data.json";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [query, setQuery] = useSearchParams();

  const currentSort = query.get("sort") === null ? "new" : query.get("sort");
  const currentPage = query.get("page") === null ? 1 : query.get("page");

  useEffect(() => {
    getQuestions();
  }, [currentSort, currentPage]);

  // 질문 리스트 API 요청
  const getQuestions = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}:8080/questions/questionList?page=${currentPage}&sort=${currentSort}`,
      );

      const data = await response.json();
      const questionContent = data.content; // 질문 content
      const totalElements = data.totalElements; // 전체 질문 개수

      setQuestions(questionContent);
      setTotalQuestions(totalElements);
    } catch (error) {
      console.warn("Get Questions Error:", error);
      setError(error.message || "Something went wrong");

      // 서버와 통신 안될 경우 dummy data
      const data = dummyData;
      const questionContent = data.content;
      const totalElements = data.totalElements;
      setQuestions(questionContent);
      setTotalQuestions(totalElements);
    }

    setIsLoading(false);
  };

  // 페이지 변경
  const handleChangePage = (page) => {
    query.set("page", page);
    setQuery(query);
  };

  // 정렬 변경
  const handleSortedBy = (filter) => {
    query.set("sort", filter);
    setQuery(query);
  };

  return (
    <div>
      <TopArea
        totalQuestions={totalQuestions}
        currentSort={currentSort}
        sortedBy={handleSortedBy}
      />
      {isLoading && (
        <Loading>
          <img src={loadingImg} alt="loading" />
        </Loading>
      )}
      {!isLoading && (
        <ul>
          {questions.map((item) => (
            <QuestionList key={item.questionId} item={item} />
          ))}
        </ul>
      )}
      {error && (
        <Error>
          위 데이터는 서버 통신이 되지 않을 경우 나타나는 더미 데이터 입니다.
          <br />
          Error: {error}
        </Error>
      )}
      <Pagination
        totalQuestions={totalQuestions}
        currentPage={currentPage}
        onChangePage={handleChangePage}
      />
    </div>
  );
};

const Loading = styled.div`
  width: 24px;
  margin: 50px auto;
`;

const Error = styled.div`
  margin: 50px auto;
  font-size: 14px;
  color: #777;
`;
export default Questions;
