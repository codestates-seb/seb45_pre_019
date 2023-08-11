// import react from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: white;
  border-top: 3px solid orange;
  display: flex;
  align-items: center;
  padding: 1rem; /* 흰색 줄 */
`;

// const MenuIconContainer = styled.div`
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 1rem;
//   background-color: #f1f1f1;
//   border-radius: 0; /* 메뉴 아이콘 컨테이너 */
// `;

const MenuIconImg = styled.img`
  width: 20px;
  height: auto;
  margin-right: 1rem; /* 메뉴 아이콘 */
`;

// const LogoAndTextContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 1rem; /* 로고 컨테이너 */
// `;

const LogoImg = styled.img`
  width: 100px;
  height: auto; /*로고 아이콘 */
`;

const StackOverflowText = styled.span`
  font-weight: bold; /* 스택 오버 플로우 텍스트 */
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 5px solid #ccc;
  padding: 5px;
  margin-left: auto; /*  검색창 */
`;

const SearchIcon = styled.img`
  width: 20px;
  height: auto;
  margin-right: 5px; /* 돋보기 아이콘*/
`;

const SearchText = styled.span`
  color: #888; /* 검색 텍스트*/
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem; /*버튼 */
`;

const LoginButton = styled.button`
  background-color: #00aaff;
  color: #00c8c8;
  border: 5px;
  padding: 5px 10px;
  margin-right: 5px;
  &:hover {
    background-color: #ddd;
    color: #333;
  }
  cursor: pointer; /* log in 버튼 하늘색 배경에 청록색 글씨 */
`;

const SignupButton = styled.button`
  background-color: #007bff;
  color: white;
  border: 5px;
  padding: 5px 10px;
  &:hover {
    background-color: #333;
  }
  cursor: pointer; /* sign up 버튼 파란색 배경에 흰색 글씨 */
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <MenuIconImg src="/path/to/your/menu-icon.png" alt="menu.png" />
      <LogoImg src="/path/to/your/logo.png" alt="logo.png" />
      <HeaderTitle>
        {/* 스타일드 컴포넌트 헤더 */}
        <StackOverflowText>Stack Overflow</StackOverflowText>
      </HeaderTitle>
      <SearchContainer>
        <SearchIcon src="/path/to/your/search-icon.png" alt="search.png" />
        <SearchText>search...</SearchText>
      </SearchContainer>
      <AuthButtons>
        <LoginButton>Log In</LoginButton>
        <SignupButton>Sign Up</SignupButton>
      </AuthButtons>
    </HeaderContainer>
  );
}

export default Header;
