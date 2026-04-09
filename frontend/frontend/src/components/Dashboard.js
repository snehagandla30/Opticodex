import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import "./Dashboard.css";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [codes, setCodes] = useState([]);
  const [selectedCode, setSelectedCode] = useState(null);
  const [loading, setLoading] = useState(false);

  const email = localStorage.getItem("userEmail");

  // Load codes
  const loadCodes = async () => {
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/my_codes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setCodes(Array.isArray(data.codes) ? data.codes : []);
    } catch (err) {
      console.error("Error loading codes:", err);
      setCodes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCodes();
  }, [email]);

  const refreshCodes = () => {
    loadCodes();
  };

  // DELETE
  const deleteCode = async (index) => {
    try {
      const res = await fetch("http://localhost:5000/delete_code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, index })
      });

      const data = await res.json();
      if (data.success) {
        refreshCodes();
        setSelectedCode(null);
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // EDIT
  const editCode = (codeObj) => {
    setActiveTab("home");
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("editCode", { detail: codeObj }));
    }, 100);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Opticodex</h2>

        <button
          onClick={() => setActiveTab("home")}
          className={activeTab === "home" ? "active" : ""}
        >
          🏠 Home
        </button>

        <button
          onClick={() => setActiveTab("mycodes")}
          className={activeTab === "mycodes" ? "active" : ""}
        >
          💾 My Codes ({codes.length})
        </button>

        {/* LOGOUT BACK. HAPPY NOW? */}
        <button
          onClick={() => {
            localStorage.removeItem("userEmail");
            window.location.href = "/";
          }}
        >
          🔓 Logout
        </button>
      </aside>

      <main className="main-content">
        {activeTab === "home" && (
          <div>
            <h2>Welcome to your Coding Buddy! 🚀</h2>
            <Editor email={email} refreshCodes={refreshCodes} />
          </div>
        )}

        {activeTab === "mycodes" && (
          <div>
            <h2>💾 My Saved Codes ({codes.length})</h2>

            {loading ? (
              <p>⏳ Loading...</p>
            ) : codes.length === 0 ? (
              <p>No saved codes yet.</p>
            ) : (
              <div className="code-list-container">
                <ul className="code-list">
                  {codes.map((c, idx) => (
                    <li key={idx} className="code-item">
                      <div onClick={() => setSelectedCode({ ...c, index: idx })}>
                        <strong>{c.title || `Code ${idx + 1}`}</strong>
                      </div>

                      <div style={{ marginTop: "5px" }}>
                        <button onClick={() => editCode(c)}>✏ Edit</button>
                        <button onClick={() => deleteCode(idx)}>🗑 Delete</button>
                      </div>
                    </li>
                  ))}
                </ul>

                {selectedCode && (
                  <div className="code-viewer">
                    <div className="viewer-header">
                      <h3>{selectedCode.title}</h3>
                      <button onClick={() => setSelectedCode(null)}>✕</button>
                    </div>

                    <pre>
                      {selectedCode.code || selectedCode.codeSnippet}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;