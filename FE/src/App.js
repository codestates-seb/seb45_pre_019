import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { AuthProvider } from "./context/auth-context";
import { TokenExpirationChecker } from "./utils/TokenExpirationChecker";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Question from "./pages/Question";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <TokenExpirationChecker />
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              {/* <Route path="/questions" element={<Question />}></Route> */}
              <Route path="/questions/ask" element={<Question />}></Route>

              {/* Error Page */}
              {/* <Route path="*" element={<NotFound />}></Route> */}
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
