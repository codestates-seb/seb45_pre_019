import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TopArea from "../components/questionlist/TopArea";
import QuestionList from "../components/questionlist/QuestionList";
import Pagination from "../components/questionlist/Pagination";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const [query, setQuery] = useSearchParams();

  const currentSort = query.get("sort") === null ? "new" : query.get("sort");
  const currentPage = query.get("page") === null ? 1 : query.get("page");

  useEffect(() => {
    getQuestions();
  }, [currentSort, currentPage]);

  // 질문 리스트 API 요청
  const getQuestions = async () => {
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
    }
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
      <ul>
        {questions.map((item) => (
          <QuestionList key={item.questionId} item={item} />
        ))}
      </ul>
      <Pagination
        totalQuestions={totalQuestions}
        currentPage={currentPage}
        onChangePage={handleChangePage}
      />
    </div>
  );
};

export default Questions;
