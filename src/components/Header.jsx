import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { QuestionContext } from "../context/QuestionContext";
import React, { useContext, useState } from "react";
import "../styles/header.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ onHamburgerClick }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen((prev) => !prev);
    onHamburgerClick();
  };
  const [query, setQuery] = useState("");
  const { searchQuestions, setIsSearching, fetchQuestions } =
    useContext(QuestionContext);

  const handleSearch = () => {
    if (query.trim() === "") return;
    searchQuestions(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setQuery("");
    setIsSearching(false);
    fetchQuestions();
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <span className="hamburger-icon" onClick={handleHamburgerClick}>
            {isHamburgerOpen ? <CloseIcon /> : <MenuIcon />}
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
          <div className="header-search-container">
            <SearchIcon className="search-icon" onClick={handleSearch} />
            <input
              type="text"
              placeholder="Search questions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            {query && (
              <CloseIcon className="clear-icon" onClick={clearSearch} />
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
