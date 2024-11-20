import React from "react";
import "../styles/Question.css";
import { ThumbUp, QuestionAnswer, Visibility } from "@mui/icons-material";

function Question({ question }) {
  const calculateTimeElapsed = (creationDate) => {
    const now = new Date();
    const createdAt = new Date(creationDate * 1000); 
    const secondsElapsed = Math.floor((now - createdAt) / 1000);

    if (secondsElapsed < 60) return `${secondsElapsed} seconds ago`;
    const minutesElapsed = Math.floor(secondsElapsed / 60);
    if (minutesElapsed < 60) return `${minutesElapsed} minutes ago`;
    const hoursElapsed = Math.floor(minutesElapsed / 60);
    if (hoursElapsed < 24) return `${hoursElapsed} hours ago`;
    const daysElapsed = Math.floor(hoursElapsed / 24);
    return `${daysElapsed} days ago`;
  };

  return (
    <div className="question-card">
      <h3>
        <a href={question.link} target="_blank" rel="noopener noreferrer">
          {question.title}
        </a>
      </h3>
      <div className="tags">
        {question.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="question-meta">
        
        <div className="meta-row">
          <div className="meta-item">
            <ThumbUp style={{ color: "#ff8c00" }} />
            <span>{question.score}</span>
          </div>
          <div className="meta-item">
            <QuestionAnswer style={{ color: "#007bff" }} />
            <span>{question.answer_count}</span>
          </div>
          <div className="meta-item">
            <Visibility style={{ color: "#28a745" }} />
            <span>{question.view_count}</span>
          </div>
        </div>
       
        <div className="time-elapsed">
          {calculateTimeElapsed(question.creation_date)}
        </div>
      </div>
    </div>
  );
}

export default Question;
