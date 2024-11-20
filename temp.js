// import React, { useState } from "react";
// import "../styles/LeftSidebar.css";
// import { Home, Public, Stars, Work } from "@mui/icons-material";

// function LeftSidebar() {
//   const [activeTab, setActiveTab] = useState("home");

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//   };

//   return (
//     <div className="left-sidebar">
//       <div className="sidebar-container">
//         <div className="slider" style={{ top: `${activeTab === "home" ? 0 : activeTab === "public" ? 60 : activeTab === "collectives" ? 120 : activeTab === "jobs" ? 180 : 240}px` }} />
//         <div className="sidebar-options">
//           <div className={`sidebar-option ${activeTab === "home" ? "active" : ""}`} onClick={() => handleTabClick("home")}>
//             <Home />
//             <span>HOME</span>
//           </div>
//           <div className={`sidebar-option ${activeTab === "public" ? "active" : ""}`} onClick={() => handleTabClick("public")}>
//             <Public />
//             <span>PUBLIC</span>
//           </div>
//           {activeTab === "public" && (
//             <div className="nested-links">
//               <div className="link">
//                 <span>Questions</span>
//               </div>
//               <div className="link">
//                 <span>Tags</span>
//               </div>
//               <div className="link">
//                 <span>Users</span>
//               </div>
//             </div>
//           )}
//           <div className={`sidebar-option ${activeTab === "collectives" ? "active" : ""}`} onClick={() => handleTabClick("collectives")}>
//             <Stars />
//             <span>COLLECTIVES</span>
//           </div>
//           {activeTab === "collectives" && (
//             <div className="nested-links">
//               <div className="link">
//                 <span>Explore Jobs</span>
//               </div>
//             </div>
//           )}
//           <div className={`sidebar-option ${activeTab === "jobs" ? "active" : ""}`} onClick={() => handleTabClick("jobs")}>
           
//             <span>FIND JOBS</span>
//           </div>
//           {activeTab === "jobs" && (
//             <div className="nested-links">
//               <div className="link">
//                 <span>jobs</span>
//               </div>
//               <div className="link">
//                 <span>Companies</span>
//               </div>
//             </div>
//           )}
//           <div className={`sidebar-option ${activeTab === "teams" ? "active" : ""}`} onClick={() => handleTabClick("teams")}>
//             <Work />
//             <span>TEAMS</span>
//           </div>
//           {activeTab === "teams" && (
//             <div className="nested-links">
//               <div className="link">
//                 <span>+Create a team</span>
//               </div>
//             </div>
//           )}
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftSidebar;
