
import React from "react";
import "../styles/RightSidebar.css";
import { Article, Event, School } from "@mui/icons-material";

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-section">
        <h3>The Overflow Blog</h3>
        <ul>
          <li>
            <Article className="icon" aria-label="Article Icon" />
            <span>The unexpected benefits of mentoring others</span>
          </li>
          <li>
            <Article className="icon" aria-label="Article Icon" />
            <span>Podcast 354: Building for AR with Niantic Labs’ augmented reality SDK</span>
          </li>
        </ul>
      </div>

      <div className="right-sidebar-section">
        <h3>Featured & Meta</h3>
        <ul>
          <li>
            <Event className="icon" aria-label="Event Icon" />
            <span>Beta release of Collectives™ on Stack Overflow</span>
          </li>
        </ul>
      </div>

      <div className="right-sidebar-section">
        <h3>Hot Meta Posts</h3>
        <ul>
          <li>
            <School className="icon" aria-label="School Icon" />
            <span>Tags [driver] and [device-driver] appear to be redundant</span>
          </li>
          <li>
            <School className="icon" aria-label="School Icon" />
            <span>How to handle dupes where A is closed as dup of B</span>
          </li>
          <li>
            <School className="icon" aria-label="School Icon" />
            <span>Ambiguous tag [containers]</span>
          </li>
        </ul>
      </div>

      <div className="right-sidebar-section custom-filter">
        <h3>Custom Filter</h3>
        <button>Add custom filters</button>
      </div>
    </div>
  );
}

export default RightSidebar;
