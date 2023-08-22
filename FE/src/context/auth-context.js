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
