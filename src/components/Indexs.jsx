import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Main from "./Main";
import "../styles/Index.css";
import Header from "./Header";

function Indexs() {
  return (
    <>
       <Header />
      <div className="stack-index">
        <div className="stack-index-content">
       
          <LeftSidebar />
          <Main />
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

export default Indexs;
