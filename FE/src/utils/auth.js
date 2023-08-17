// 로컬 스토리지에서 토큰 가져오기
export const getAuthToken = () => {
  const token = localStorage.getItem("token");

  // 토큰이 없을 경우 함수 종료
  if (!token) {
    return null;
  }

  // 토큰의 만료 시간 확인
  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
};

// 로컬 스토리지에서 토큰 만료 시간 가져오기
export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem("tokenExpiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  // 만료 시기가 남았다면 duration은 양수, 만료 시기가 지났다면 duration은 음수를 반환

  console.log("토큰 만료시간: ", duration);
  return duration;
};
