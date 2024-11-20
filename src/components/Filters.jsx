import React from "react";
import "../styles/Filters.css";

function Filters({ currentFilter, setFilter }) {
  const filters = [

    { label: "Creation", value: "creation" },
    { label: "Votes", value: "votes" },
    { label: "Activity", value: "activity" },
    { label: "Hot", value: "hot" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
  ];

  return (
    <div className="filters">
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={`filter-btn ${currentFilter === filter.value ? "active" : ""}`}
          onClick={() => setFilter(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default Filters;
