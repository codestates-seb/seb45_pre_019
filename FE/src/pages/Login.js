import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as StackoverflowLogo } from "../assets/icons/logo.svg";
import { useAuth } from "../context/auth-context";
import OauthButtonArea from "../components/login,signup/OauthButtonArea";
import BottomTextArea from "../components/login,signup/BottomTextArea";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Login = () => {
  const { onLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const [emailErrorMessage, setEamilErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  // 이메일, 패스워드 유효성 검사
  const isEmailValidCheck = email.includes("@");
  const isPasswordValidCheck = password.length > 0;

  const [isFormValid, setIsFormValid] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 이메일 에러 메시지
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

    // 패스워드 에러 메시지
    if (!isPasswordValidCheck) {
      setIsPasswordError(true);

      if (password === "") {
        setPasswordErrorMessage("Password cannot be empty.");
      }
    } else {
      setIsPasswordError(false);
    }

    // 유효성검사 통과시 백엔드에 데이터 전송
    if (isEmailValidCheck && isPasswordValidCheck) {
      setIsFormValid(true);
      fetchLogin();
    }
  };

  // 로그인 API 요청
  const fetchLogin = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}:8080/account/login`,
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

      // console.log("LOGIN RESPONSE", response);

      // Status CODE:: 401 (비밀번호 또는 아이디가 틀렸을 경우)
      if (response.status === 401) {
        setIsFormValid(false);

        setPassword("");
        setIsEmailError(true);
        setFormErrorMessage("Please check your email or password");
        return;
      }

      if (!response.ok) {
        throw new Error(`CODE:: ${response.status}`);
      }

      // 토큰 추출
      const authHeader = response.headers.get("Authorization");
      if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7); // "Bearer " 접두어 제외

        // 토큰 만료 시간 설정 (1h)
        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 1);

        // auth-context에서 토큰과 만료시간 저장
        onLogin(token, expiration);
      }

      // 로그인 완료시 questions 페이지로 이동
      navigate("/questions");
    } catch (error) {
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
              <InfoTextLink to="/account-recovery">
                Forgot password?
              </InfoTextLink>
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
          {!isFormValid && (
            <Infomation $invalid={!isFormValid}>{formErrorMessage}</Infomation>
          )}
        </form>
      </Card>
      <BottomTextArea title="Sign up" link="/users/signup">
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

const InfoTextLink = styled(Link)`
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
