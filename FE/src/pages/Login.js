import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as StackoverflowLogo } from "../assets/icons/stackoverflowLogo.svg";

// import { ReactComponent as AlertIcon } from "../assets/icons/alertCircle.svg";
import OauthButtonArea from "../components/OauthButtonArea";
import BottomTextArea from "../components/BottomTextArea";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const [emailErrorMessage, setEamilErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const isEmailValidCheck = email.includes("@");
  const isPasswordValidCheck = password.length > 0; // 일단 1글자 이상이면 백엔드에 요청은 보내는걸로.
  // const isPasswordValidCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
  //   password,
  // ); // 회원가입시 validation

  const navigate = useNavigate();

  // let formIsValid = false;

  // if (isEmailValid && isPasswordValid) {
  //   formIsValid = true;
  // }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("🚀 SUBMIT");
    e.preventDefault();

    // email validation check and show error message
    if (!isEmailValidCheck) {
      setIsEmailError(true);

      if (email === "") {
        setEamilErrorMessage("Email cannot be empty.");
      } else {
        setEamilErrorMessage("The email is not a valid email address.");
      }
    } else {
      setIsEmailError(false);
    }

    // password validation check and show error message
    if (!isPasswordValidCheck) {
      setIsPasswordError(true);

      if (password === "") {
        setPasswordErrorMessage("Password cannot be empty.");
      }
    } else {
      setIsPasswordError(false);
    }

    // setPassword("");
    // setIsPasswordError(true);

    // validation check 완료시 백엔드에 데이터 전송
    if (isEmailValidCheck && isPasswordValidCheck) {
      console.log("🚀 LOGIN");

      fetchLogin();
    }
  };

  // 로그인 fetch
  const fetchLogin = async () => {
    console.log("🚀 FETCH_LOGIN");

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      console.log("response", response);

      // 401 에러시 ex. 아이디 정보가 없는 경우
      if (response.status === 401) {
        setPassword("");
        setIsEmailError(true);
        setEamilErrorMessage("The email is not a valid email address.");
        return;
      }

      if (!response.ok) {
        throw new Error(`${response.status} 에러발생!.!`);
      }

      const data = await response.json();
      const token = data.token; // 만약 토큰을 받아온다면??????
      console.log(data);
      console.log(token);

      // localStorage.setItem("preProjectToken", token); // 토큰 저장

      navigate("/");
    } catch (error) {
      // console.log("error is", error);
      console.warn("error is", error);
    }
  };

  return (
    <Container>
      <StackoverflowLogo />
      <OauthButtonArea />
      {/* Login Form */}
      <Card>
        <form onSubmit={handleSubmit}>
          <FormDiv>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              value={email}
              onChange={handleEmailChange}
              $invalid={isEmailError}
            />
            {isEmailError && (
              <Infomation $invalid={isEmailError}>
                {emailErrorMessage}
              </Infomation>
            )}
          </FormDiv>
          <FormDiv>
            <FlexArea>
              <Label htmlFor="password">Password</Label>
              <InfoTextLink>Forgot password?</InfoTextLink>
            </FlexArea>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              $invalid={isPasswordError}
            />
            {isPasswordError && (
              <Infomation $invalid={isPasswordError}>
                {passwordErrorMessage}
              </Infomation>
            )}
          </FormDiv>
          <Button>Log in</Button>
        </form>
      </Card>
      <BottomTextArea title="Sign up" link="/signup">
        Don’t have an account?
      </BottomTextArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  > svg {
    margin-bottom: 24px;
  }
`;

const FormDiv = styled.div`
  margin-bottom: 16px;
`;

const FlexArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: 600;
`;

const InfoTextLink = styled.span`
  color: #0074cc;
  font-size: 12px;

  &:hover {
    color: #0a95ff;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-color: ${(props) => props.$invalid && "#d0393c"};

  &:focus {
    border-color: ${(props) => (props.$invalid ? "#d0393c" : "#59a4de")};
    box-shadow: ${(props) =>
      props.$invalid
        ? "0 0 0 4px rgba(194, 46, 50, 0.15)"
        : "0 0 0 4px rgba(0, 116, 204, 0.15)"};
  }
`;

const Infomation = styled.div`
  margin: 6px 0;
  font-size: 12px;
  /* color: #6a737c; */
  color: ${(props) => props.$invalid && "#d0393c"};
`;

export default Login;
