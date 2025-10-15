















// for description  ok . full code ok 



import React, { useEffect, useState } from "react";

// Mock API functions
const mockAssets = [
  {
    id: "1",
    email: "john@example.com",
    type: "Laptop",
    location: "WFO",
    status: "active",
    description: "John's primary work laptop.",
    openDate: new Date().toISOString(),
  },
  {
    id: "2",
    email: "user2@example.com",
    type: "Charger",
    location: "WFO",
    status: "maintenance",
    description: "Charger for MacBook Pro.",
    openDate: new Date().toISOString(),
  },
  {
    id: "3",
    email: "user3@example.com",
    type: "Network Issue",
    location: "WFO",
    status: "inactive",
    description: "Reported intermittent connectivity.",
    openDate: new Date().toISOString(),
  },
];

let assetsDB = [...mockAssets];

const listAssets = () => Promise.resolve([...assetsDB]);
const addAsset = (asset) => {
  assetsDB.push(asset);
  return Promise.resolve(asset);
};

const generateId = () =>
  `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// Helper function to format date/time for display
function formatOpenDate(dt) {
  if (!dt) return "";
  const d = new Date(dt);
  return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
}

export default function AssetsBoard() {
  const [assets, setAssets] = useState([]);
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Laptop");
  const [location, setLocation] = useState("WFO");
  const [description, setDescription] = useState(""); // new description state for add form
  const [editingId, setEditingId] = useState(null);
  const [editFields, setEditFields] = useState({});
  const [hoveredId, setHoveredId] = useState(null);
  const [quickAdd, setQuickAdd] = useState({});
  const [draggedAsset, setDraggedAsset] = useState(null);

  useEffect(() => {
    listAssets().then(setAssets);
  }, []);

  const add = async (status = "active") => {
    const assetEmail = status === "form" ? email : quickAdd[status]?.email;
    const assetType =
      status === "form" ? type : quickAdd[status]?.type || "Laptop";
    const assetLocation =
      status === "form" ? location : quickAdd[status]?.location || "WFO";
    const assetDescription =
      status === "form"
        ? description
        : quickAdd[status]?.description || ""; // include description

    if (!assetEmail?.trim()) return;

    const a = {
      id: generateId(),
      email: assetEmail,
      type: assetType,
      location: assetLocation,
      description: assetDescription,
      status: status === "form" ? "active" : status,
      openDate: new Date().toISOString(), // Save open date/time
    };
    await addAsset(a);
    setAssets(await listAssets());

    if (status === "form") {
      setEmail("");
      setType("Laptop");
      setLocation("WFO");
      setDescription(""); // reset description input
    } else {
      setQuickAdd((prev) => ({
        ...prev,
        [status]: { email: "", type: "Laptop", location: "WFO", description: "" },
      }));
    }
  };

  const statusColumns = {
    active: { title: "Active", color: "#22C55E", bgColor: "#C8E9DD" },
  };

  const groupedAssets = Object.keys(statusColumns).reduce((acc, status) => {
    acc[status] = assets.filter((a) => a.status === status);
    return acc;
  }, {});

  const handleDragStart = (e, asset) => {
    setDraggedAsset(asset);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    if (draggedAsset && draggedAsset.status !== newStatus) {
      const updatedAsset = { ...draggedAsset, status: newStatus };
      setAssets(assets.map((a) => (a.id === draggedAsset.id ? updatedAsset : a)));
    }
    setDraggedAsset(null);
  };

  const startEditing = (asset) => {
    setEditingId(asset.id);
    setEditFields({ ...asset });
  };

  const saveEdit = (id) => {
    setAssets(assets.map((a) => (a.id === id ? { ...a, ...editFields } : a)));
    setEditingId(null);
  };

  const cancelEdit = () => setEditingId(null);
  const deleteAsset = (id) => setAssets(assets.filter((a) => a.id !== id));

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        background: "#D0F0F4",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            margin: 0,
            letterSpacing: "2px",
          }}
        >
          FLOW TRACK
        </h1>
      </div>

      {/* Add Asset Top Form */}
      <div
        style={{
          marginBottom: "2rem",
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Add Asset</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <input
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1,
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{
              flex: 1,
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option>Laptop</option>
            <option>Charger</option>
            <option>Network Issue</option>
          </select>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{
              flex: 1,
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option>WFO</option>
            <option>WFH</option>
          </select>
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              flex: 2,
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={() => add("form")}
            style={{
              padding: "0.5rem 1rem",
              background: "#0052CC",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {Object.keys(statusColumns).map((status) => (
          <div
            key={status}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, status)}
            style={{
              flex: 1,
              background: statusColumns[status].bgColor,
              padding: "1.5rem",
              borderRadius: "12px",
              minHeight: "400px",
            }}
          >
            <h3
              style={{
                color: statusColumns[status].color,
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              {statusColumns[status].title}
            </h3>

            {/* Assets */}
            {groupedAssets[status].map((a) => (
              <div
                key={a.id}
                draggable={editingId !== a.id}
                onDragStart={(e) => handleDragStart(e, a)}
                onMouseEnter={() => setHoveredId(a.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  padding: "1rem",
                  marginBottom: "0.75rem",
                  borderRadius: "8px",
                  background: statusColumns[status].color,
                  color: "#fff",
                  fontWeight: "600",
                  boxShadow:
                    draggedAsset?.id === a.id
                      ? "0 4px 12px rgba(0,0,0,0.2)"
                      : "0 2px 4px rgba(0,0,0,0.1)",
                  position: "relative",
                  cursor: editingId === a.id ? "default" : "move",
                  opacity: draggedAsset?.id === a.id ? 0.5 : 1,
                }}
              >
                {editingId === a.id ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <input
                      value={editFields.email}
                      onChange={(e) =>
                        setEditFields({ ...editFields, email: e.target.value })
                      }
                      style={{ padding: "0.5rem", borderRadius: "4px", border: "none" }}
                    />
                    <select
                      value={editFields.type}
                      onChange={(e) =>
                        setEditFields({ ...editFields, type: e.target.value })
                      }
                      style={{ padding: "0.5rem", borderRadius: "4px", border: "none" }}
                    >
                      <option>Laptop</option>
                      <option>Charger</option>
                      <option>Network Issue</option>
                    </select>
                    <select
                      value={editFields.location}
                      onChange={(e) =>
                        setEditFields({ ...editFields, location: e.target.value })
                      }
                      style={{ padding: "0.5rem", borderRadius: "4px", border: "none" }}
                    >
                      <option>WFH</option>
                      <option>WFO</option>
                    </select>
                    <select
                      value={editFields.status}
                      onChange={(e) =>
                        setEditFields({ ...editFields, status: e.target.value })
                      }
                      style={{ padding: "0.5rem", borderRadius: "4px", border: "none" }}
                    >
                      {Object.keys(statusColumns).map((s) => (
                        <option key={s} value={s}>
                          {statusColumns[s].title}
                        </option>
                      ))}
                    </select>
                    <textarea
                      value={editFields.description}
                      onChange={(e) =>
                        setEditFields({ ...editFields, description: e.target.value })
                      }
                      placeholder="Description"
                      style={{ padding: "0.5rem", borderRadius: "4px", border: "none", resize: "vertical" }}
                      rows={3}
                    />
                    {/* Open Date/Time field visible in edit mode */}
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "#e6ffe6",
                        margin: "0.25rem 0",
                        fontWeight: 400,
                        opacity: 0.95,
                      }}
                    >
                      Opened: {formatOpenDate(editFields.openDate)}
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <button
                        onClick={() => saveEdit(a.id)}
                        style={{
                          background: "#36B37E",
                          color: "#fff",
                          border: "none",
                          borderRadius: "4px",
                          padding: "0.5rem",
                          flex: 1,
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
                          borderRadius: "4px",
                          padding: "0.5rem",
                          flex: 1,
                          cursor: "pointer",
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div onClick={() => startEditing(a)} style={{ cursor: "pointer" }}>
                    <div style={{ fontWeight: "bold", fontSize: "1rem" }}>{a.email}</div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        marginTop: "0.25rem",
                        opacity: 0.9,
                      }}
                    >
                      {a.type} | {a.location}
                    </div>
                    <div style={{ marginTop: "0.25rem", fontSize: "0.85rem", opacity: 0.9 }}>
                      {a.description}
                    </div>
                    {/* Open Date/Time Display */}
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "#e6ffe6",
                        marginTop: "0.25rem",
                        fontWeight: 400,
                        opacity: 0.95,
                      }}
                    >
                      Opened: {formatOpenDate(a.openDate)}
                    </div>
                  </div>
                )}

                {/* Hover Toolbar */}
                {hoveredId === a.id && editingId !== a.id && (
                  <div
                    style={{
                      position: "absolute",
                      top: "4px",
                      right: "4px",
                      display: "flex",
                      gap: "0.5rem",
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        startEditing(a);
                      }}
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        border: "none",
                        color: "#0052CC",
                        cursor: "pointer",
                        fontWeight: "bold",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                      }}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Quick Add in Column */}
            <div
              style={{
                marginTop: "0.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}


















