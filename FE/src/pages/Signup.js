import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as QuestionBalloon } from "../assets/icons/questionBalloon.svg";
import { ReactComponent as VoteUpDown } from "../assets/icons/voteUpDown.svg";
import { ReactComponent as Bookmark } from "../assets/icons/bookmark.svg";
import { ReactComponent as Trophy } from "../assets/icons/trophy.svg";
import { ReactComponent as QuestionCircle } from "../assets/icons/questionCircle.svg";
import OauthButtonArea from "../components/OauthButtonArea";
import BottomTextArea from "../components/BottomTextArea";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Signup = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isDisplayNameError, setIsDisplayNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const [displayNameErrorMessage, setDisplayNameErrorMessage] = useState("");
  const [emailErrorMessage, setEamilErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const isDisplayNameValidCheck = displayName.trim().length > 0;
  const isEmailValidCheck = email.includes("@");
  const isPasswordValidCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password,
  );

  const navigate = useNavigate();

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("🚀 SUBMIT");
    e.preventDefault();

    // display name validation check and show error message
    if (!isDisplayNameValidCheck) {
      setIsDisplayNameError(true);

      if (displayName === "") {
        setDisplayNameErrorMessage("display Name cannot be empty.");
      }
    } else {
      setIsDisplayNameError(false);
    }

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

      fetchSignup();
    }
  };

  // signup fetch
  const fetchSignup = async () => {
    console.log("🚀 FETCH_LOGIN");

    try {
      const response = await fetch(
        // "http://ec2-15-164-93-106.ap-northeast-2.compute.amazonaws.com/account/signup",
        `${process.env.REACT_APP_API_URL}/account/signup`,
        // "http://localhost:8080/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accountName: displayName,
            accountEmail: email,
            accountPassword: password,
            // displayName,
            // email,
            // password,
          }),
        },
      );

      console.log("response", response);

      // 401 에러시 ex.
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
      console.log("RESPONSE DATA", data);

      window.alert("회원가입이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      // console.log("error is", error);
      console.warn("CATCH ERROR IS", error);
    }
  };

  return (
    <Container>
      {/* LeftContent */}
      <LeftContent>
        <Title>Join the Stack Overflow community</Title>
        <InfoList>
          <InfoListItem>
            <QuestionBalloon />
            <ListItemText>Get unstuck — ask a question</ListItemText>
          </InfoListItem>
          <InfoListItem>
            <VoteUpDown />
            <ListItemText>
              Unlock new privileges like voting and commenting
            </ListItemText>
          </InfoListItem>
          <InfoListItem>
            <Bookmark />
            <ListItemText>
              Save your favorite questions, answers, watch tags, and more
            </ListItemText>
          </InfoListItem>
          <InfoListItem>
            <Trophy />
            <ListItemText>Earn reputation and badges</ListItemText>
          </InfoListItem>
        </InfoList>
        <BottomText>
          <span>
            Collaborate and share knowledge with a private group for FREE.
          </span>
          <span>Get Stack Overflow for Teams free for up to 50 users.</span>
        </BottomText>
      </LeftContent>
      {/* RightContent */}
      <RightContent>
        <OauthButtonArea />
        {/* Signup Form */}
        <Card>
          <form onSubmit={handleSubmit}>
            <FormDiv>
              <Label htmlFor="name">Display name</Label>
              <Input
                id="name"
                type="text"
                value={displayName}
                onChange={handleDisplayNameChange}
                $invalid={isDisplayNameError}
              />
              {isDisplayNameError && (
                <Infomation $invalid={isDisplayNameError}>
                  {displayNameErrorMessage}
                </Infomation>
              )}
            </FormDiv>
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
              <Label htmlFor="password">Password</Label>
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
              <Infomation>
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </Infomation>
            </FormDiv>
            <FormDiv className="chkbox">
              <Label htmlFor="marketingChkbox">
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </Label>
              <Input id="marketingChkbox" type="checkbox"></Input>
              <QuestionCircle />
            </FormDiv>
            <Button>Sign up</Button>
            <FormBottomText>
              By clicking “Sign up”, you agree to our terms of service and
              acknowledge that you have read and understand our privacy policy
              and code of conduct.
            </FormBottomText>
          </form>
        </Card>
        <BottomTextArea title="Log in" link="/login">
          Already have an account?
        </BottomTextArea>
      </RightContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  > svg {
    margin-bottom: 24px;
  }
`;

// LeftContent
const LeftContent = styled.div`
  margin-right: 48px;

  @media (max-width: 816px) {
    display: none;
  }
`;
const Title = styled.p`
  font-size: 27px;
`;
const InfoList = styled.ul`
  margin-top: 32px;
`;
const InfoListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-size: 15px;
`;
const ListItemText = styled.span`
  margin-left: 8px;
`;
const BottomText = styled.div`
  color: #6a737c;
  font-size: 13px;

  & span {
    display: block;
  }

  & span:nth-child(2) {
    color: #0074cc;
  }
`;

// RightContent
const RightContent = styled.div``;
const FormDiv = styled.div`
  margin-bottom: 16px;

  &.chkbox {
    display: flex;
    & label {
      flex: 8;
      font-size: 12px;
      font-weight: 400;
      color: #0c0e0d;
    }

    & input {
      flex: 1;
      order: -1;
      width: 12px;
      height: 12px;
    }

    & svg {
      flex: 1;
    }
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: 600;
`;

// const Input = styled.input`
//   width: 100%;
//   padding: 8px;

//   &:focus {
//     border-color: #59a4de;
//     box-shadow: 0 0 0 4px rgba(0, 116, 204, 0.15);
//   }
// `;

// const Infomation = styled.span`
//   margin: 4px 0;
//   font-size: 12px;
//   color: #6a737c;
// `;

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

const FormBottomText = styled.p`
  margin-top: 32px;
  color: #6a737c;
  font-size: 12px;
`;

export default Signup;
