import React, { useContext, useEffect } from "react";
import { QuestionContext } from "../context/QuestionContext";
import Filters from "./Filters";
import Question from "./Question";
import SkeletonLoader from "./SkeletonLoader";

function Main() {
  const {
    questions,
    isLoading,
    isError,
    errorMessage,
    filter,
    setFilter,
    page,
    setPage,
    isSearching,
  } = useContext(QuestionContext);

//   useEffect(() => {
//     console.log("Main rendering with questions:", questions);
// }, [questions]);
  useEffect(() => {
    setPage(1);
  }, [filter, isSearching]);

  return (
    <div className="main">
      <h2>{isSearching ? "Search Results" : "Top Questions"}</h2>

      {!isSearching && (
        <Filters currentFilter={filter} setFilter={setFilter} />
      )}

      {isError && (
        <p className="error">
          {errorMessage || "Failed to load questions. Please try again."}
        </p>
      )}

      <div className="questions-container">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))
          : questions.map((question) => (
              <Question key={question.question_id} question={question} />
            ))}
      </div>

      {!isError && !isSearching && (
        <div className="pagination">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span>Page {page}</span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={isLoading || questions.length === 0}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Main;
