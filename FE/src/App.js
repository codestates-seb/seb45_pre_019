import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Question from "./pages/Question";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">
          <main>
            <Routes>
              {/* <Route path="/" element={<Home />}></Route> */}
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/question" element={<Question />}></Route>

              {/* Error Page */}
              {/* <Route path="*" element={<NotFound />}></Route> */}
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
