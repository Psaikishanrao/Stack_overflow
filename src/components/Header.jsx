import React, { useState } from "react";
import "../styles/header.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

const Header = ({ onHamburgerClick }) => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <span className="hamburger-icon" onClick={onHamburgerClick}>
            ☰
          </span>
          <picture>
            <img
              src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
              alt="Logo"
              className="header-logo"
            />
          </picture>
        </div>

        <div className="header-middle">
          <div
            className={`header-search-container ${
              showSearchBox ? "mobile-visible" : ""
            }`}
            onClick={() => setShowSearchBox(true)}
          >
            <SearchIcon
              className="mobile-search-icon"
              onClick={() => setShowSearchBox(true)}
            />
            {showSearchBox && (
              <>
                <input
                  type="text"
                  placeholder="Search your answers here...."
                  onBlur={() => setShowSearchBox(false)}
                  autoFocus
                />
                <CloseIcon
                  className="mobile-close-icon"
                  onClick={() => setShowSearchBox(false)}
                />
              </>
            )}
          </div>
        </div>
        <div className="header-right">
          <h3 className="header-products">
            <a href="#">Products</a>
          </h3>
          <div className="header-right-container">
            <a href="#" aria-label="Messages">
              <ChatBubbleOutlineIcon />
            </a>
            <a href="#" aria-label="Achievements">
              <EmojiEventsOutlinedIcon />
            </a>
            <a href="#" aria-label="Articles">
              <ArticleOutlinedIcon />
            </a>
            <a href="#" aria-label="User Profile">
              <img
                src="https://sipl.ind.in/wp-content/uploads/2022/07/dummy-user.png"
                alt="User Profile"
                className="profileImage"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
