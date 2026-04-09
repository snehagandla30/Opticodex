// src/components/Signup.js
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      localStorage.setItem("userEmail", email);

      setMessage("🎉 Signup successful! Redirecting...");

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);

    } catch (error) {
      setMessage(`⚠️ ${error.message}`);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
      <h2>Sign Up</h2>

      {message && (
        <p style={{ color: message.includes("⚠️") ? "red" : "green" }}>
          {message}
        </p>
      )}

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "8px", width: "80%", marginBottom: "10px" }}
        /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "8px", width: "80%", marginBottom: "10px" }}
        /><br />

        <button type="submit" className="btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;