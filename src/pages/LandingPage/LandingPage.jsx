import React from "react";
import { FaSignInAlt } from "react-icons/fa";

export default function LandingPage({ onSignIn }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f6fa",
        gap: "2rem"
      }}
    >
      <button
        style={{
          padding: "16px 40px",
          fontSize: "1.2rem",
          borderRadius: "8px",
          border: "none",
          background: "#007bff",
          color: "white",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          transition: "background 0.2s",
          gap: "0.5rem",
          display: "flex",
          alignItems: "center"
        }}
        onMouseOver={e => (e.target.style.background = '#0056b3')}
        onMouseOut={e => (e.target.style.background = '#007bff')}
        onClick={onSignIn}
      >
        <FaSignInAlt />
        <span>Login</span>
      </button>
    </div>
  );
}
