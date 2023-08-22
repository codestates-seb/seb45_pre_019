import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { ReactComponent as ErrorIcon } from "../assets/icons/error.svg";

const Home = () => {
  return (
    <>
      <PageNotFound>
        <ErrorIcon />
        <ErrorMessage>
          <p>Home Page is Not Found</p>
          <p>We are sorry, we could not find the page you requested.</p>
          <p>
            Go back to <Link to="/questions">Questions</Link>
          </p>
        </ErrorMessage>
      </PageNotFound>
    </>
  );
};

const PageNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 30px;
`;

const ErrorMessage = styled.div`
  & p:nth-of-type(1) {
    font-size: 27px;
    font-weight: 700;
  }

  & p:nth-of-type(2) {
    margin: 10px 0 20px;
    font-size: 19px;
  }

  & p:nth-of-type(3) {
    font-size: 15px;

    & a {
      color: var(--color-sub-blue);
    }
  }
`;

export default Home;
