import React from "react";
import "../styles/SkeletonLoader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-title"></div>
      <div className="skeleton-tags"></div>
      <div className="skeleton-meta"></div>
    </div>
  );
};

export default SkeletonLoader;
