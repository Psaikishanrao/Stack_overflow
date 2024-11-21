import React, { useState, useEffect } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Main from "./Main";
import "../styles/Home.css";
import Header from "./Header";

function Home() {
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleLeftSidebar = () => {
    setLeftSidebarOpen((prev) => !prev); 
  };
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

     
      if (mobile) {
        setLeftSidebarOpen(false);
      } else {
        setLeftSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Header onHamburgerClick={toggleLeftSidebar} />
      <div className="stack-index">
        <div
          className={`left-sidebar-wrapper ${
            isLeftSidebarOpen ? "visible" : ""
          }`}
        >
          <LeftSidebar />
        </div>
        <Main />
        <RightSidebar />
      </div>
    </>
  );
}

export default Home;
