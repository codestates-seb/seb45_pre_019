import react from "react";
import styled from "styled-components";
import Header from "./components/Header";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      {/* 다른 컴포넌트나 콘텐츠를 추가하세요 */}
    </AppContainer>
  );
}

export default App;
