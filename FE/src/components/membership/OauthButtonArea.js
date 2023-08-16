import { styled } from "styled-components";
import { ReactComponent as GoogleLogo } from "../../assets/icons/googleLogo.svg";
import { ReactComponent as GithubLogo } from "../../assets/icons/githubLogo.svg";
import { ReactComponent as FacebookLogo } from "../../assets/icons/facebookLogo.svg";

const OauthButtonArea = () => {
  return (
    <ButtonArea>
      <Button value="google">
        <GoogleLogo />
        <Text>Log in with Google</Text>
      </Button>
      <Button value="github">
        <GithubLogo />
        <Text>Log in with GitHub</Text>
      </Button>
      <Button value="facebook">
        <FacebookLogo />
        <Text>Log in with Facebook</Text>
      </Button>
    </ButtonArea>
  );
};

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 288px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 0;
  padding: 8px 0;

  & svg {
    margin-right: 4px;
  }

  background-color: ${(props) =>
    (props.value === "google" && "var(--color-white)") ||
    (props.value === "github" && "#2f3337") ||
    (props.value === "facebook" && "#385499")};

  color: ${(props) =>
    props.value === "google" ? "#3b4045" : "var(--color-white)"};

  border: ${(props) => props.value === "google" || "none"};
`;

const Text = styled.span`
  font-size: 13px;
`;

export default OauthButtonArea;
