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
    <div>
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
      <div className="dropdown">
        <select
          value={currentFilter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {filters.map((filter) => (
            <option key={filter.value} value={filter.value}>
              {filter.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
