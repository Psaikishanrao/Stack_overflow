import React from 'react';
import './App.css';
import StackOverflow from './pages/StackOverflow';
import ReactDOM from "react-dom";
import { QuestionProvider } from "./context/QuestionContext"

function App() {
  return (
    <>
    <QuestionProvider>
      <StackOverflow />
    </QuestionProvider>
    </>
  );
}

export default App;
