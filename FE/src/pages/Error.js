import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { ReactComponent as ErrorIcon } from "../assets/icons/error.svg";

const ErrorPage = () => {
  return (
    <>
      <PageNotFound>
        <ErrorIcon />
        <ErrorMessage>
          <p>Page not found</p>
          <p>We are sorry, we could not find the page you requested.</p>
          <p>
            Go back to <Link to="/">home</Link>
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
  gap: 30px;
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;
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

export default ErrorPage;
