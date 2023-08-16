import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as StackoverflowLogo } from "../assets/icons/stackoverflowLogo.svg";

// import { ReactComponent as AlertIcon } from "../assets/icons/alertCircle.svg";
import OauthButtonArea from "../components/login,signup/OauthButtonArea";
import BottomTextArea from "../components/login,signup/BottomTextArea";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Login = () => {
  // 만료시간 설정 (이거 다 함수로 ? 만들어서 빼놓기...)
  const storedExpirationDate = localStorage.getItem("tokenExpiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  console.log(expirationDate);
  console.log(now);
  const duration = expirationDate.getTime() - now.getTime();
  console.log(duration);
  // 만료시간 : Thu Aug 17 2023 01:39:29 GMT+0900 (한국 표준시)

  // 만료시간이 지나면 토큰 삭제 코드
  // const tokenDuration = duration;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const [emailErrorMessage, setEamilErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const isEmailValidCheck = email.includes("@");
  const isPasswordValidCheck = password.length > 0; // 일단 1글자 이상이면 백엔드에 요청은 보내는걸로.

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
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}:8080/account/login`,
        // "http://localhost:8080/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accountEmail: email,
            accountPassword: password,
          }),
        },
      );

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

      // 토큰 가져오기 - 확인해보기
      const authHeader = response.headers.get("Authorization");
      if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7); // "Bearer " 접두어 제외
        localStorage.setItem("ACCESS-TOKEN", token); // 토큰 저장
      }

      // 토큰 만료 시간 설정을 위한 세팅
      const expiration = new Date();
      console.log("토큰실행시간", expiration);
      expiration.setHours(expiration.getHours() + 1);
      console.log("토큰만료시간", expiration);
      localStorage.setItem("tokenExpiration", expiration);

      // const now = new Date();
      // const duration = expiration.getTime() - now.getTime();
      // // 토큰 만료 시간 - 현재 시간
      // // 만료 시기가 아직 미래라 토큰이 유효하다면 양수, 만료 시기가 지났다면 음수가 나옴
      // console.log("duration", duration)

      navigate("/");
    } catch (error) {
      // console.log("error is", error);
      console.warn("CATCH ERROR IS", error);
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
