import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();

  // 페이지별 Sidebar, Footer 표시 여부
  const currentPath = location.pathname;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [isMenuIconVisible, setIsMenuIconVisible] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  // 페이지 별 렌더링 요소 제어
  useEffect(() => {
    // Login, Signup 페이지 :: Footer 숨김
    if (currentPath === "/users/login" || currentPath === "/users/signup") {
      setIsFooterVisible(false);
    } else {
      setIsFooterVisible(true);
    }

    // Home, Login, Signup 페이지 :: MenuIcon 표시
    // 페이지 이동시에는 Sidebar 닫기
    if (
      currentPath === "/users/login" ||
      currentPath === "/users/signup" ||
      currentPath === "/"
    ) {
      setIsMenuIconVisible(true);
      setIsSidebarOpen(false);
    } else {
      setIsMenuIconVisible(false);
      setIsSidebarOpen(false);
    }
  }, [currentPath]);

  return (
    <>
      <Header
        sidebarStatus={isSidebarOpen}
        menuIconVisible={isMenuIconVisible}
        onToggle={handleToggleSidebar}
      />
      <div className="container">
        <Sidebar
          menuIconVisible={isMenuIconVisible}
          sidebarStatus={isSidebarOpen}
        />
        <div className="content">
          <Outlet />
        </div>
      </div>
      {isFooterVisible && <Footer />}
    </>
  );
};

export default RootLayout;
