import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/auth-context";
import { ReactComponent as StackoverflowLogo } from "../assets/images/logo.svg";
import search from "../assets/icons/search.png";

// 헤더 전체를 감싸는 컨테이너 스타일
const HeaderContainer = styled.header`
  z-index: 100;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  background-color: white;
  border-top: 3px solid orange;
  border-bottom: 1px solid #ccc; /* 회색 줄을 추가 */
  /* padding: 1rem; 흰색 줄 */

  & .header {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1264px;
    height: 100%;
    margin: 0 auto;
  }
`;

// 메뉴 아이콘 스타일
const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: #e3e6e8;
  }

  // menuIcon animation
  & .menuIcon {
    position: relative;
    width: 16px;
    height: 12px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      color: #333;
      background-color: #525960;
      transition: all 0.2s ease-in-out;
    }
    &::before {
      top: 0;
      transform: rotate(0);
    }
    &::after {
      bottom: 0;
      box-shadow: 0 -5px #525960;
    }

    &.on {
      &::before {
        top: 6px;
        transform: rotate(45deg);
      }
      &::after {
        box-shadow: 0 0 transparent;
        bottom: 4px;
        transform: rotate(-45deg);
      }
    }
  }
`;

// 로고 링크 스타일
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 166px;
  height: 100%;
  padding: 0 8px;
  margin-right: 1rem; /* 로고 컨테이너 */
  transition: filter 0.3s ease; /* 마우스 오버 시 필터 애니메이션 적용 */

  &:hover {
    background-color: #f1f1f1; /* 마우스 오버 시 배경색 변경 */
  }
`;

// 검색 창 스타일
const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border: 1px solid var(--color-line); /* 테두리를 얇은 검정색으로 설정 */
  border-radius: 5px; /* 모서리를 5px만큼 둥글게 설정 */
  padding: 5px;
  margin-left: auto;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: auto;
  margin-right: 5px; /* 돋보기 아이콘*/
`;

const SearchText = styled.span`
  color: #888; /* 검색 텍스트*/
`;

// 로그인, 회원가입, 로그아웃 버튼들의 부모 컨테이너 스타일
const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

// 로그인 버튼 스타일
const LoginButton = styled.button`
  border: none;
  background-color: var(--color-sub-lightblue);
  color: #39739d; /* 파란색 글자색 */
  padding: 8px 10px;
  margin-right: 5px;
  &:hover {
    background-color: #b3d3ea;
    color: #2c5877; /* 더 진한 파란색으로 변경 */
  }
  cursor: pointer;
`;

// 회원가입 버튼 스타일
const SignupButton = styled.button`
  border: none;
  background-color: var(--color-sub-blue);
  color: var(--color-white);
  padding: 8px 10px;
  &:hover {
    background-color: #0074cc;
  }
  cursor: pointer; /* sign up 버튼 파란색 배경에 흰색 글씨 */
`;

// 로그아웃 버튼 스타일
const LogoutButton = styled(LoginButton)``;

function Header({ sidebarStatus, menuIconVisible, onToggle }) {
  // 사용자 인증 상태 및 로그아웃 핸들러를 가져옴
  const { token, onLogout } = useAuth();
  const navigate = useNavigate();

  // 로그아웃 핸들러
  const handleLogout = () => {
    onLogout();

    window.alert("로그아웃 되었습니다.");
    navigate("/questions");
  };

  return (
    <HeaderContainer>
      <div className="header">
        {/* 메뉴 아이콘 렌더링 조건 */}
        {menuIconVisible && (
          <MenuIconContainer onClick={() => onToggle()}>
            <span className={sidebarStatus ? "menuIcon on" : "menuIcon"}></span>
          </MenuIconContainer>
        )}
        {/* 로고 링크 */}
        <StyledLink to="/">
          <StackoverflowLogo />
        </StyledLink>
        {/* 검색 창 */}
        <SearchContainer>
          <SearchIcon src={search} alt="search.png" />
          <SearchText>search...</SearchText>
        </SearchContainer>
        {/* 로그인 상태에 따른 버튼 렌더링 조건 */}
        <AuthButtons>
          {!token && (
            <>
              <LoginButton onClick={() => navigate("/users/login")}>
                Log In
              </LoginButton>
              <SignupButton onClick={() => navigate("/users/signup")}>
                Sign Up
              </SignupButton>
            </>
          )}
          {token && <LogoutButton onClick={handleLogout}>Logout</LogoutButton>}
        </AuthButtons>
      </div>
    </HeaderContainer>
  );
}

export default Header;
