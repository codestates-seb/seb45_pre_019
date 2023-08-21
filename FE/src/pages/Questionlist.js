import { useEffect, useState } from "react";
import Top from "../components/questionlist/Top";
import SampleQuestion from "../components/questionlist/Samplequestion";
import Pagination from "../components/questionlist/pagination";

const Questionlist = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8080/questions");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Top />
      {questions.map((question, index) => (
        <SampleQuestion
          key={index}
          title={question.questionTitle}
          problem={question.questionProblem}
          tryDetails={question.questionExpect}
          tags={question.tags}
        />
      ))}
      <Pagination
        total={questions.length}
        current={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Questionlist;
