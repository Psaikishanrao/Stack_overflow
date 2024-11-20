import React, { useState, useRef } from "react";
import "../styles/LeftSidebar.css";
import { Group, Home, Public, Stars, Work } from "@mui/icons-material";

function LeftSidebar() {
  const [sliderPosition, setSliderPosition] = useState(0);
  const parentRefs = useRef([]); 

  const handleTabClick = (index) => {
  
    const parentOption = parentRefs.current[index];
    if (parentOption) {
      const optionTop = parentOption.offsetTop; 
      setSliderPosition(optionTop); 
    }
  };

  return (
    <>
    <div className="left-sidebar">
      <div className="sidebar-container">
        <div
          className="slider"
          style={{ transform: `translateY(${sliderPosition}px)` }}
        />
        <div className="sidebar-options">
          <div
            className="sidebar-option"
            ref={(el) => (parentRefs.current[0] = el)}
            onClick={() => handleTabClick(0)}
          >
            <Home  style={{ color: "#ff8c00" }}/>
            <span>HOME</span>
          </div>
          <div
            className="sidebar-option"
            ref={(el) => (parentRefs.current[1] = el)}
            onClick={() => handleTabClick(1)}
          >
            <Public  style={{ color: "#ff8c00" }}/>
            <span>PUBLIC</span>
          </div>
          <div className="nested-links">
            <div className="link" onClick={() => handleTabClick(1)}>
              <span>Questions</span>
            </div>
            <div className="link" onClick={() => handleTabClick(1)}>
              <span>Tags</span>
            </div>
            <div className="link" onClick={() => handleTabClick(1)}>
              <span>Users</span>
            </div>
          </div>
          <div
            className="sidebar-option"
            ref={(el) => (parentRefs.current[2] = el)}
            onClick={() => handleTabClick(2)}
          >
            <Stars style={{ color: "#ff8c00" }} />
            <span>COLLECTIVES</span>
          </div>
          <div className="nested-links">
            <div className="link" onClick={() => handleTabClick(2)}>
              <span>Explore Jobs</span>
            </div>
          </div>
          <div
            className="sidebar-option"
            ref={(el) => (parentRefs.current[3] = el)}
            onClick={() => handleTabClick(3)}
          >
            <Work  style={{ color: "#ff8c00" }}/>
            <span>FIND JOBS</span>
          </div>
          <div className="nested-links">
            <div className="link" onClick={() => handleTabClick(3)}>
              <span>Jobs</span>
            </div>
            <div className="link" onClick={() => handleTabClick(3)}>
              <span>Companies</span>
            </div>
          </div>
          <div
            className="sidebar-option"
            ref={(el) => (parentRefs.current[4] = el)}
            onClick={() => handleTabClick(4)}
          >
            <Group  style={{ color: "#ff8c00" }}/>
            <span>TEAMS</span>
          </div>
          <div className="nested-links">
            <div className="link" onClick={() => handleTabClick(4)}>
              <span>+Create a team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LeftSidebar;
