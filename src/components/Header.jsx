import React from "react";
import "../styles/header.css";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Inbox";
import { Avatar } from "@mui/material"; 

const Header = () => (
  <header className="header">
    <div className="main-container">
      <div className="left">
        <img
          src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
          alt="Logo"
        />
        <h3>Products</h3>
      </div>

      <div className="middle">
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="right">
        <div className="avatar">
          <Avatar />
          <InboxIcon />
        </div>
        <button>Login</button>
      </div>
    </div>
  </header>
);

export default Header;
