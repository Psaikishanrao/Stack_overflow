

// ------------------------------------------------------------------------
// import React, { useState } from "react";
// import "../styles/header.css";
// import SearchIcon from "@mui/icons-material/Search";
// import CloseIcon from "@mui/icons-material/Close";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
// import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

// const Header = ({ onHamburgerClick }) => {
//   const [showSearchBox, setShowSearchBox] = useState(false);

//   const handleSearchIconClick = () => {
//     setShowSearchBox(!showSearchBox);
//   };

//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="header-left">
//           <span className="hamburger-icon" onClick={onHamburgerClick}>
//             ☰
//           </span>
//           <picture>
//             <img
//               src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
//               alt="Logo"
//               className="header-logo"
//             />
//           </picture>
//         </div>

//         <div className="header-middle">
//           <div
//             className={`header-search-container ${
//               showSearchBox ? "mobile-visible" : ""
//             }`}
//             onClick={() => setShowSearchBox(true)}
//           >
//             <SearchIcon
//               className="mobile-search-icon"
//               onClick={() => setShowSearchBox(true)}
//             />
//             {showSearchBox && (
//               <>
//                 <input
//                   type="text"
//                   placeholder="Search your answers here...."
//                   onBlur={() => setShowSearchBox(false)}
//                   autoFocus
//                 />
//                 <CloseIcon
//                   className="mobile-close-icon"
//                   onClick={() => setShowSearchBox(false)}
//                 />
//               </>
//             )}
//           </div>
//         </div>
//         <div className="header-right">
//           <h3 className="header-products">
//             <a href="#">Products</a>
//           </h3>
//           <div className="header-right-container">
//             <a href="#" aria-label="Messages">
//               <ChatBubbleOutlineIcon />
//             </a>
//             <a href="#" aria-label="Achievements">
//               <EmojiEventsOutlinedIcon />
//             </a>
//             <a href="#" aria-label="Articles">
//               <ArticleOutlinedIcon />
//             </a>
//             <a href="#" aria-label="User Profile">
//               <img
//                 src="https://sipl.ind.in/wp-content/uploads/2022/07/dummy-user.png"
//                 alt="User Profile"
//                 className="profileImage"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
// --------------------------------------------------------------------------------------------------------
// import React, { createContext,useState } from "react";
// export const QuestionContext = createContext();


// export const QuestionProvider = ({ children }) => {
//   const [questionss, setQuestions] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);

//   const fetchQuestions = (searchResults) => {
//     console.log("Updating questions state:", searchResults); // Debug log
//     setQuestions(searchResults || []); // Safely update questions
//     setIsSearching(searchResults && searchResults.length > 0);
//   };

//   return (
//     <QuestionContext.Provider value={{ questionss, isSearching, fetchQuestions }}>
//       {children}
//     </QuestionContext.Provider>
//   );
// };
// ---------------------------------------------------------------------------------------------

// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import "../styles/Main.css";
// import Filters from "./Filters";
// import Question from "./Question";
// import SkeletonLoader from "./SkeletonLoader";
// import { QuestionContext } from "../context/QuestionContext";

// function Main() {
//   const [questions, setQuestions] = useState([]);
//   const [page, setPage] = useState(1);
//   const [filter, setFilter] = useState("hot");
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);

//   const fetchQuestions = async () => {
//     setIsLoading(true);
//     setIsError(false);

//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/questions?filter=${filter}&page=${page}&pagesize=10`
//       );
//       // const response = await axios.get(
//       //   `https://stack-overflow-sooty-rho.vercel.app/api/questions?filter=${filter}&page=${page}&pagesize=10`
//       // );
//       setQuestions(response.data.items);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//       setIsError(true);
//       setQuestions([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchQuestions();
//   }, [filter, page]);

//   const { questionss, isSearching } = useContext(QuestionContext);

//   console.log("Questions in Main:", questionss); // Debugging log



//   return (
//     <div className="main">
//       <h2>Top Questions</h2>

//       <Filters currentFilter={filter} setFilter={setFilter} />

//       {isError && (
//         <p className="error">Failed to load questions. Please try again.</p>
//       )}

//       <div className="questions-container">
//         {isLoading
//           ? Array.from({ length: 10 }, (_, index) => (
//               <SkeletonLoader key={index} />
//             ))
//           : questions.map((question) => (
//               <Question key={question.question_id} question={question} />
//             ))}
//       </div>

//       {!isError && (
//         <div className="pagination">
//           <button
//             onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//             disabled={page === 1}
//           >
//             Previous
//           </button>
//           <span>Page {page}</span>
//           <button
//             onClick={() => setPage((prev) => prev + 1)}
//             disabled={questions.length === 0}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Main;