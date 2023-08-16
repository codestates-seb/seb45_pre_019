import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as OpenPageIcon } from "../assets/icons/openPage.svg";

const BottomTextArea = (props) => {
  return (
    <TextArea>
      <Text>
        {props.children}
        <StyledLink to={props.link}>{props.title}</StyledLink>
      </Text>
      <Text>
        Are you an employer?
        <StyledLink to="https://talent.stackoverflow.com/users/login">
          Sign up on Talent
          <OpenPageIcon fill="#0074cc" />
        </StyledLink>
      </Text>
    </TextArea>
  );
};

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

export default BottomTextArea;
