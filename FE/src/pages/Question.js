import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Questiontitle from "../components/makequestion/Questiontitle";
import QuestionProblem from "../components/makequestion/QuestionProblem";
import QuestionTry from "../components/makequestion/QuestionTry";
import QuestionTags from "../components/makequestion/QuestionTags";

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const NextButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 10px;
`;

const QuestionPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [tryDetails, setTryDetails] = useState("");
  const [tags, setTags] = useState([]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = async () => {
    const body = {
      questionTitle: title,
      questionProblem: problem,
      questionExpect: tryDetails,
      tags: tags,
    };

    try {
      const response = await fetch("http://localhost:8080/questions/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.status !== 200) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      console.log("Question submitted successfully:", await response.json());
      navigate("/questionlist");
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };
  return (
    <PageContainer>
      {activeStep === 1 && (
        <>
          <Questiontitle setTitle={setTitle} />
          <NextButton onClick={handleNext}>Next</NextButton>
        </>
      )}
      {activeStep === 2 && (
        <>
          <QuestionProblem setProblem={setProblem} />
          <NextButton onClick={handleNext}>Next</NextButton>
        </>
      )}
      {activeStep === 3 && (
        <>
          <QuestionTry setTryDetails={setTryDetails} />
          <NextButton onClick={handleNext}>Next</NextButton>
        </>
      )}
      {activeStep === 4 && (
        <>
          <QuestionTags setTags={setTags} />
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </>
      )}
    </PageContainer>
  );
};

export default QuestionPage;
