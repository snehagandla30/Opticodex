// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Editor from "./components/Editor";
import "./App.css";

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>
          <span className="optipart">Opti</span>
          <span className="codexpart">codex</span>
        </h1>
        <p className="subtitle">Learn. Create. Code.</p>

        <div className="nav-buttons">
          <button
            className="btn-primary"
            onClick={() => {
              setShowLogin(true);
              setShowSignup(false);
            }}
          >
            Login
          </button>

          <button
            className="btn-primary"
            onClick={() => {
              setShowSignup(true);
              setShowLogin(false);
            }}
          >
            Sign Up
          </button>
        </div>
      </header>

      <main className="app-main">
        {showLogin && (
          <div className="popup">
            <Login />
            <button
              className="close-btn"
              onClick={() => setShowLogin(false)}
            >
              ✖
            </button>
          </div>
        )}

        {showSignup && (
          <div className="popup">
            <Signup />
            <button
              className="close-btn"
              onClick={() => setShowSignup(false)}
            >
              ✖
            </button>
          </div>
        )}

        {!showLogin && !showSignup && (
          <div>
            <p className="welcome-text">
              Welcome to your coding buddy! 🚀
            </p>
            <Editor email="test@example.com" refreshCodes={() => {}} />
          </div>
        )}
      </main>

      <footer className="app-footer">
        &copy; {new Date().getFullYear()} Opticodex. All rights reserved.
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;