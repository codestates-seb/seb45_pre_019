import react from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import menu from "../assets/icons/menu.png";
import logo from "../assets/images/logo.png";
import search from "../assets/icons/search.png";

const HeaderContainer = styled.header`
  background-color: white;
  border-top: 3px solid orange;
  border-bottom: 1px solid #ccc; /* 회색 줄을 추가 */
  display: flex;
  align-items: center;
  padding: 1rem; /* 흰색 줄 */
`;

const MenuIconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center; /* 메뉴 아이콘을 가운데로 정렬 */
  margin-right: 1rem;
  background-color: transparent; /* 초기 상태는 투명한 배경 */
  border-radius: 0;
  transition: background-color 0.3s ease; /* 배경색 변경 시 애니메이션 */
  &:hover {
    background-color: #f1f1f1; /* 마우스 오버 시 배경색 변경 */
  }
`;

const MenuIconImg = styled.img`
  width: 30px;
  height: auto;
  margin-right: 1rem; /* 메뉴 아이콘 */
`;

const LogoAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem; /* 로고 컨테이너 */
  transition: filter 0.3s ease; /* 마우스 오버 시 필터 애니메이션 적용 */
  &:hover {
    background-color: #f1f1f1; /* 마우스 오버 시 배경색 변경 */
  }
`;

const LogoImg = styled.img`
  width: 180px;
  height: auto; /*로고 아이콘 */
`;

const StackOverflowText = styled.span`
  font-weight: bold; /* 스택 오버 플로우 텍스트 */
`;

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border: 1px solid black; /* 테두리를 얇은 검정색으로 설정 */
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

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem; /*버튼 */
`;

const LoginButton = styled.button`
  background-color: #f1f1f1; /* 밝은 회색 배경색 */
  color: #007bff; /* 파란색 글자색 */
  border: 5px;
  padding: 5px 10px;
  margin-right: 5px;
  &:hover {
    background-color: #ddd;
    color: #0056b3; /* 더 진한 파란색으로 변경 */
  }
  cursor: pointer;
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

function Header() {
  return (
    <HeaderContainer>
      <MenuIconContainer>
        <MenuIconImg src={menu} alt="menu.png" />
      </MenuIconContainer>
      <LogoAndTextContainer>
        <LogoImg src={logo} alt="logo.png" />
        <StackOverflowText></StackOverflowText>
      </LogoAndTextContainer>
      <SearchContainer>
        <SearchIcon src={search} alt="search.png" />
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
