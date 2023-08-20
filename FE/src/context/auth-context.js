import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("ACCESS-TOKEN") || "",
  );

  const onLogin = (newToken, newTokenExpiration) => {
    setToken(newToken);
    localStorage.setItem("ACCESS-TOKEN", newToken);
    localStorage.setItem("tokenExpiration", newTokenExpiration);
  };

  const onLogout = () => {
    setToken("");
    localStorage.removeItem("ACCESS-TOKEN");
    localStorage.removeItem("tokenExpiration");

    // 로그아웃 완료시 메인 페이지로 이동
    window.alert("로그아웃 되었습니다.");
    // navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
