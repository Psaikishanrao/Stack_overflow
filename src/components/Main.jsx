// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/Main.css";
// import Filters from "./Filters";
// import Question from "./Question";

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
//       setQuestions(response.data.items);
//     } catch (error) {
//       console.error("Error fetching questions:", error);
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchQuestions();
//   }, [filter, page]);

//   return (
//     <div className="main">
//       <h2>Top Questions</h2>

//       <Filters currentFilter={filter} setFilter={setFilter} />

//       {isError && <p className="error">Failed to load questions. Please try again.</p>}

//       {isLoading ? (
//         <p>Loading questions...</p>
//       ) : (
//         <div className="questions-container">
//           {questions.map((question) => (
//             <Question key={question.question_id} question={question} />
//           ))}
//         </div>
//       )}

//       <div className="pagination">
//         <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
//           Previous
//         </button>
//         <span>Page {page}</span>
//         <button onClick={() => setPage((prev) => prev + 1)} disabled={questions.length === 0}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Main;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Main.css";
import Filters from "./Filters";
import Question from "./Question";
import SkeletonLoader from "./SkeletonLoader";

function Main() {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("hot");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchQuestions = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await axios.get(
        `http://localhost:5000/api/questions?filter=${filter}&page=${page}&pagesize=10`
      );
      setQuestions(response.data.items);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setIsError(true);
      setQuestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [filter, page]);

  return (
    <div className="main">
      <h2>Top Questions</h2>

      <Filters currentFilter={filter} setFilter={setFilter} />

      {isError && (
        <p className="error">Failed to load questions. Please try again.</p>
      )}

      <div className="questions-container">
        {isLoading
          ? Array.from({ length: 10 }, (_, index) => (
              <SkeletonLoader key={index} />
            ))
          : questions.map((question) => (
              <Question key={question.question_id} question={question} />
            ))}
      </div>

      {!isError && (
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
            disabled={questions.length === 0}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Main;
