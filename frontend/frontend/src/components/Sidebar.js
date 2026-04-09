// src/components/Sidebar.js
import React from "react";

function Sidebar({ currentTab, setCurrentTab }) {
  return (
    <div className="sidebar">
      <h2>🌟 Opticodex</h2>
      <button
        className={currentTab === "home" ? "active" : ""}
        onClick={() => setCurrentTab("home")}
      >
        🏠 Home
      </button>
      <button
        className={currentTab === "codes" ? "active" : ""}
        onClick={() => setCurrentTab("codes")}
      >
        📂 My Codes
      </button>
      <button
        className={currentTab === "editor" ? "active" : ""}
        onClick={() => setCurrentTab("editor")}
      >
        💻 Code Editor
      </button>
      <button
        className={currentTab === "settings" ? "active" : ""}
        onClick={() => setCurrentTab("settings")}
      >
        ⚙️ Settings
      </button>
    </div>
  );
}

export default Sidebar;