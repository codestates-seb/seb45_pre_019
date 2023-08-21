import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { AuthProvider } from "./context/auth-context";
import { TokenExpirationChecker } from "./utils/TokenExpirationChecker";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Questionlist from "./pages/Questionlist";
import QuestionItemTest from "./pages/QuestionItemTest";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Question from "./pages/Question";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "questions",
        children: [
          {
            index: true,
            element: <Questionlist />,
          },
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
