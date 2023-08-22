import { useEffect } from "react";
import { useAuth } from "../context/auth-context";

// 로컬 스토리지에서 토큰 만료 시간 가져오기
const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem("tokenExpiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  // 만료 시기가 남았다면 duration은 양수, 만료 시기가 지났다면 duration은 음수를 반환

  // console.log("토큰 만료시간: ", duration);
  return duration;
};

export const TokenExpirationChecker = () => {
  const { token, onLogout } = useAuth();

  useEffect(() => {
    if (token) {
      const tokenDuration = getTokenDuration();

      if (tokenDuration < 0) {
        onLogout();
      }
    }
  }, [token, onLogout]);
};
