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
          <form>
            <FormDiv>
              <Label htmlFor="name">Display name</Label>
              <Input id="name" type="text" />
            </FormDiv>
            <FormDiv>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" />
            </FormDiv>
            <FormDiv>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
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

const Input = styled.input`
  width: 100%;
  padding: 8px;

  &:focus {
    border-color: #59a4de;
    box-shadow: 0 0 0 4px rgba(0, 116, 204, 0.15);
  }
`;

const Infomation = styled.span`
  margin: 4px 0;
  font-size: 12px;
  color: #6a737c;
`;

const FormBottomText = styled.p`
  margin-top: 32px;
  color: #6a737c;
  font-size: 12px;
`;

export default Signup;
