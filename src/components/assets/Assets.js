













// for UI/UX  ok 

import React, { useEffect, useState } from "react";
import { listAssets, addAsset } from "../../services/mockApi";
import { v4 as uuidv4 } from "uuid";
 
export default function AssetsBoard() {
  const [assets, setAssets] = useState([]);
  const [form, setForm] = useState({ name: "", type: "Laptop", owner: "" });
  const [editingId, setEditingId] = useState(null);
  const [editFields, setEditFields] = useState({});
  const [hoveredId, setHoveredId] = useState(null);
 
  useEffect(() => {
    listAssets().then(setAssets);
  }, []);
 
  const add = async () => {
    const assetName = form.name;
    const assetType = form.type || "Laptop";
    const assetOwner = form.owner || "";
    if (!assetName?.trim()) return;
 
    const newAsset = {
      id: uuidv4(),
      name: assetName,
      type: assetType,
      owner: assetOwner,
    };
    await addAsset(newAsset);
    setAssets(await listAssets());
    setForm({ name: "", type: "Laptop", owner: "" });
  };
 
  const startEditing = (asset) => {
    setEditingId(asset.id);
    setEditFields({ ...asset });
  };
  const saveEdit = async (id) => {
    setAssets(assets.map((a) => (a.id === id ? { ...a, ...editFields } : a)));
    setEditingId(null);
  };
  const cancelEdit = () => setEditingId(null);
 
  const deleteAsset = async (id) => {
    setAssets(assets.filter((a) => a.id !== id));
  };
 
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "'Segoe UI', sans-serif",
        background: "#D0F0F4",  // Updated background color here
        minHeight: "100vh",
      }}
    >
      {/* Add Asset Form */}
      <div
        style={{
          marginBottom: "2rem",
          background: "#ffffff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          transform: "perspective(1000px)",
        }}
      >
        <h2 style={{ marginBottom: "1rem", fontSize: "2rem", color: "#333" }}>
          🚀 Add User Asset
        </h2>
        <div
          className="form-container"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          {["name", "type", "owner"].map((field) => (
            <input
              key={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
              style={{
                flex: 1,
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
          <button
            onClick={add}
            style={{
              padding: "0.75rem 1.5rem",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Add
          </button>
        </div>
      </div>
 
      {/* Asset List */}
      <div
        style={{
          background: "#ffffff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ color: "#764ba2", fontSize: "1.5rem" }}>📦 User Assets</h3>
        {assets.length === 0 && (
          <div style={{ color: "#999", marginTop: "2rem" }}>No assets found for the user.</div>
        )}
 
        {assets.map((a) => (
          <div
            key={a.id}
            onMouseEnter={() => setHoveredId(a.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "10px",
              background: "#f9f9f9",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease",
              transform: hoveredId === a.id ? "scale(1.02)" : "scale(1)",
              position: "relative",
            }}
          >
            {editingId === a.id ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {["name", "type", "owner"].map((field) => (
                  <input
                    key={field}
                    value={editFields[field]}
                    onChange={(e) =>
                      setEditFields((f) => ({ ...f, [field]: e.target.value }))
                    }
                    style={{
                      padding: "0.5rem",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                    }}
                  />
                ))}
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={() => saveEdit(a.id)}
                    style={{
                      background: "#36B37E",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "0.5rem 1rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    style={{
                      background: "#DE350B",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "0.5rem 1rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div onClick={() => startEditing(a)} style={{ cursor: "pointer" }}>
                <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{a.name}</div>
                <div style={{ fontSize: "0.9rem", color: "#555" }}>
                  {a.type} | {a.owner || "-"}
                </div>
              </div>
            )}
 
            {hoveredId === a.id && editingId !== a.id && (
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <button
                  onClick={() => startEditing(a)}
                  style={{
                    background: "#0052CC",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "0.3rem 0.6rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => deleteAsset(a.id)}
                  style={{
                    background: "#DE350B",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "0.3rem 0.6rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  🗑️ Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
 
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 600px) {
          /* Stack form inputs vertically with full width */
          .form-container {
            flex-direction: column !important;
          }
          .form-container input {
            flex: none !important;
            width: 100% !important;
          }
          /* Buttons full width on small screens */
          .form-container button {
            width: 100% !important;
          }
          /* Asset card padding smaller and font adjustments */
          div[style*="padding: 1rem"][style*="margin-bottom: 1rem"] {
            padding: 0.75rem !important;
            margin-bottom: 0.75rem !important;
          }
          div[style*="font-weight: bold"][style*="font-size: 1.1rem"] {
            font-size: 1rem !important;
          }
          div[style*="font-size: 0.9rem"][style*="color: #555"] {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </div>
  );
}
