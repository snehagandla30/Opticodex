// src/components/CodeList.js
import React from "react";

function CodeList({ codes }) {
  return (
    <div>
      <h2>📂 My Codes</h2>
      {codes.length === 0 && <p>No codes yet. Start coding! 🍼</p>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        {codes.map((code, idx) => (
          <div key={idx} style={{ padding: "15px", background: "#fff0f5", borderRadius: "15px", boxShadow: "0 5px 10px rgba(0,0,0,0.05)" }}>
            <strong>{code.title}</strong> ⭐ {code.score}/10
            <pre style={{ marginTop: "8px", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
              {code.codeSnippet}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodeList;