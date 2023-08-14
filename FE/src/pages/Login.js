import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as StackoverflowLogo } from "../assets/icons/stackoverflowLogo.svg";
import { ReactComponent as OpenPageIcon } from "../assets/icons/openPage.svg";
// import { ReactComponent as AlertIcon } from "../assets/icons/alertCircle.svg";
import OauthButtonArea from "../components/OauthButtonArea";

const Login = () => {
  return (
    <Container>
      <StackoverflowLogo />
      <OauthButtonArea />
      {/* Login Form */}
      <Form>
        <FormDiv>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </FormDiv>
        <FormDiv>
          <FlexArea>
            <Label htmlFor="password">Password</Label>
            <InfoTextLink>Forgot password?</InfoTextLink>
          </FlexArea>
          <Input id="password" type="password" />
        </FormDiv>
        <LoginButton>Log in</LoginButton>
      </Form>
      {/* Bottom text */}
      <TextArea>
        <Text>
          Don’t have an account?
          <StyledLink to="/signup">Sign up</StyledLink>
        </Text>
        <Text>
          Are you an employer?
          <StyledLink to="https://talent.stackoverflow.com/users/login">
            Sign up on Talent
            <OpenPageIcon fill="#0074cc" />
          </StyledLink>
        </Text>
      </TextArea>
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

const Form = styled.form`
  width: 100%;
  max-width: 288px;
  margin: 24px 0;
  padding: 24px;
  border-radius: 6px;
  background-color: var(--color-white);
  box-shadow:
    0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.1);
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

  &:focus {
    border-color: #59a4de;
    box-shadow: 0 0 0 4px rgba(0, 116, 204, 0.15);
  }
`;

const LoginButton = styled.button`
  border: none;
  padding: 10px 0;
  width: 100%;
  background-color: var(--color-sub-blue);
  color: var(--color-white);

  &:hover {
    background-color: #0074cc;
  }
`;

const TextArea = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 13px;
`;

const Text = styled.p`
  + p {
    margin-top: 12px;
  }
`;

const StyledLink = styled(Link)`
  margin-left: 4px;
  color: #0074cc;

  & svg {
    margin-left: 4px;
    vertical-align: bottom;
  }

  &:hover {
    color: #0a95ff;

    & svg path {
      fill: #0a95ff;
    }
  }
`;

export default Login;
