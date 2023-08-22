import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { AuthProvider } from "./context/auth-context";
import { TokenExpirationChecker } from "./utils/TokenExpirationChecker";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import QuestionItemTest from "./pages/QuestionItemTest";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Question from "./pages/Question";

const router = createBrowserRouter([
  // questions 페이지를 먼저 노출시키기 위해 (Home page 작업 X) path 먼저 적용
  {
    path: "/questions",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Questions /> },
      {
        path: ":questionId",
        element: <QuestionItemTest />,
      },
      {
        path: "ask",
        element: <Question />,
      },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "tags",
      },
      {
        path: "users",
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "companies",
      },
      {
        path: "collectives",
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <TokenExpirationChecker />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
