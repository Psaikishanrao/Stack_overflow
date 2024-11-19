import React from "react";
import "../styles/header.css";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Inbox";
import { Avatar } from "@mui/material";

const Header = () => (
  <header className="header">
    <div className="header-container">
      <div className="header-left">
        <img
          src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
          alt="Logo"
          className="header-logo"
        />
        <h3 className="header-products">Products</h3>
      </div>
      <div className="header-middle">
        <div className="header-search-container">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-container">
          <Avatar className="header-avatar" />
          <InboxIcon />
        </div>
        <button className="login-button">Login</button>
      </div>
    </div>
  </header>
);

export default Header;
