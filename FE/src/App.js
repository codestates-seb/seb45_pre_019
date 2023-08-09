import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <h1>도비즈 화이팅!!</h1>
      <Header />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
