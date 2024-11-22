import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("hot");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const fetchQuestions = async () => {
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");

    try {
      const response = await axios.get(
        // `http://localhost:5000/api/questions?filter=${filter}&page=${page}&pagesize=10`
         `${API_BASE_URL}/api/questions?filter=${filter}&page=${page}&pagesize=10`
      );
      setQuestions([...response.data.items]);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.response?.data?.error || "Failed to load questions.");
      setQuestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const searchQuestions = async (query) => {
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");
    setIsSearching(true);

    try {
      const response = await axios.get(
        // `http://localhost:5000/api/questions?query=${query}&order=desc&sort=relevance&site=stackoverflow&page=${page}&pagesize=10`
          `${API_BASE_URL}/api/questions?query=${query}&order=desc&sort=relevance&site=stackoverflow&page=${page}&pagesize=10`
      );
      setQuestions(response.data.items);
    } catch (error) {
      setIsError(true);
      setErrorMessage(
        error.response?.data?.error || "Failed to load search results."
      );
      setQuestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [filter, page, isSearching]);

  // Debugging useEffect - Commented out for production
  // useEffect(() => {
  //   console.log("Questions state updated:", questions);
  // }, [questions]);
  
  // useEffect(() => {
  //   console.log("Filter or page changed:", { filter, page });
  // }, [filter, page]);

  return (
    <QuestionContext.Provider
      value={{
        questions,
        page,
        filter,
        isLoading,
        isError,
        errorMessage,
        isSearching,
        setFilter,
        setPage,
        fetchQuestions,
        searchQuestions,
        setIsSearching,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
