import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Header /> */}
      <div className="container">
        {/* <Sidebar /> */}
        <div className="content">
          <main>
            <Routes>
              {/* <Route path="/" element={<Home />}></Route> */}
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>

              {/* Questions 작업시 아래 Route 주석 해제 후 작업해주세요~!
                  1. Questions 컴포넌트 import 
                  2. element={<COMPONENT_NAME />} 컴포넌트 이름 작성
                  3. npm start 후 localhost:3000/questions 로 화면 확인 가능
                    (or sidebar의 Questions 클릭)
                  4. 이 주석은 지우고, 공유해주세요! :)
              */}
              {/* <Route path="/questions" element={<COMPONENT_NAME />}></Route> */}

              {/* Error Page */}
              {/* <Route path="*" element={<NotFound />}></Route> */}
            </Routes>
          </main>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
