import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import teamsImg from "../assets/images/teamsImg.png";
import { ReactComponent as GlobeIcon } from "../assets/icons/globe.svg";
import { ReactComponent as StarIcon } from "../assets/icons/star.svg";

const Sidebar = ({ menuIconVisible, sidebarStatus }) => {
  const location = useLocation();

  // 조건별 ClassName 지정
  const navContainerClassName = () => {
    if (menuIconVisible) {
      if (sidebarStatus) {
        return "floating-sidebar on";
      }
      return "floating-sidebar";
    }

    return "";
  };

  return (
    <NavContainer className={navContainerClassName()}>
      <NavLinks>
        <ul>
          <ListItem
            className={location.pathname === "/" ? "home active" : "home"}
          >
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <ListTitle>PUBLIC</ListTitle>
            <ul>
              <SubListItem
                className={
                  location.pathname.startsWith("/questions") && "active"
                }
              >
                <GlobeIcon />
                <Link to="/questions">Questions</Link>
              </SubListItem>
              <SubListItem
                className={location.pathname.startsWith("/tags") && "active"}
              >
                <Link to="/tags">Tags</Link>
              </SubListItem>
              <SubListItem
                className={location.pathname.startsWith("/users") && "active"}
              >
                <Link to="/users">Users</Link>
              </SubListItem>
              <SubListItem
                className={
                  location.pathname.startsWith("/companies") && "active"
                }
              >
                <Link to="/companies">Companies</Link>
              </SubListItem>
            </ul>
          </ListItem>
          <ListItem>
            <ListTitle>COLLECTIVES</ListTitle>
            <ul>
              <SubListItem>
                <StarIcon />
                <Link to="/collectives">Explore Collectives</Link>
              </SubListItem>
            </ul>
          </ListItem>
          <ListItem>
            <ListTitle>TEAMS</ListTitle>
            <TeamsDiv>
              <Text>
                <span className="bold">Stack Overflow for Teams</span>- Start
                collaborating and sharing organizational knowledge.
              </Text>
              <img src={teamsImg} alt="" />
              <ButtonArea>
                <Button color="main">Create a free Team</Button>
                <Button>Why Teams?</Button>
              </ButtonArea>
            </TeamsDiv>
          </ListItem>
        </ul>
      </NavLinks>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: relative;
  width: 164px;
  min-width: 164px;
  border-right: 1px solid var(--color-line);
  background-color: var(--color-white);

  & .active {
    color: #0c0d01;
    font-weight: 700;
    border-right: 3px solid var(--color-main);
    background-color: #f1f2f3;
  }

  // floating sidebar 스타일링
  &.floating-sidebar {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 240px;
    box-shadow:
      0 1px 2px hsla(0, 0%, 0%, 0.05),
      0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);

    &.on {
      display: block;
    }
  }
`;

const NavLinks = styled.nav`
  position: sticky;
  top: 70px;
  margin-bottom: 20px;

  & a {
    width: 100%;
    height: 100%;
  }
`;

const ListItem = styled.li`
  margin: 16px 0 4px;
  font-size: 11px;
  color: #525960;

  &.home {
    padding: 8px 4px 8px 8px;
    font-size: 13px;
  }

  &.home:hover {
    color: #0c0d01;
  }
`;

const ListTitle = styled.span`
  margin: 0 0 4px 8px;
  font-size: 11px;
`;

const SubListItem = styled.li`
  position: relative;
  padding: 8px 4px 8px 30px;
  font-size: 13px;

  &:hover {
    color: #0c0d01;
  }

  & svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const TeamsDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-top: 4px;
  border-top: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);

  & img {
    max-width: 130px;
    margin: 8px auto 0;
  }
`;

const Text = styled.p`
  font-size: 13px;
  & .bold {
    color: #2f3337;
    font-weight: 700;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  border: none;
  margin-top: 4px;
  padding: 6px;
  border-radius: 6px;
  font-size: 11px;
  background-color: ${(props) => props.color === "main" && "var(--color-main)"};
  color: ${(props) => props.color === "main" && "var(--color-white)"};
`;

export default Sidebar;
