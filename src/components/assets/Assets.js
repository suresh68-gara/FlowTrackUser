





// for UI/UX  ok 

// import React, { useEffect, useState } from "react";
// import { listAssets, addAsset } from "../../services/mockApi";
// import { v4 as uuidv4 } from "uuid";
 
// export default function AssetsBoard() {
//   const [assets, setAssets] = useState([]);
//   const [form, setForm] = useState({ name: "", type: "Laptop", owner: "" });
//   const [editingId, setEditingId] = useState(null);
//   const [editFields, setEditFields] = useState({});
//   const [hoveredId, setHoveredId] = useState(null);
 
//   useEffect(() => {
//     listAssets().then(setAssets);
//   }, []);
 
//   const add = async () => {
//     const assetName = form.name;
//     const assetType = form.type || "Laptop";
//     const assetOwner = form.owner || "";
//     if (!assetName?.trim()) return;
 
//     const newAsset = {
//       id: uuidv4(),
//       name: assetName,
//       type: assetType,
//       owner: assetOwner,
//     };
//     await addAsset(newAsset);
//     setAssets(await listAssets());
//     setForm({ name: "", type: "Laptop", owner: "" });
//   };
 
//   const startEditing = (asset) => {
//     setEditingId(asset.id);
//     setEditFields({ ...asset });
//   };
//   const saveEdit = async (id) => {
//     setAssets(assets.map((a) => (a.id === id ? { ...a, ...editFields } : a)));
//     setEditingId(null);
//   };
//   const cancelEdit = () => setEditingId(null);
 
//   const deleteAsset = async (id) => {
//     setAssets(assets.filter((a) => a.id !== id));
//   };
 
//   return (
//     <div
//       style={{
//         padding: "2rem",
//         fontFamily: "'Segoe UI', sans-serif",
//         background: "#D0F0F4",  // Updated background color here
//         minHeight: "100vh",
//       }}
//     >
//       {/* Add Asset Form */}
//       <div
//         style={{
//           marginBottom: "2rem",
//           background: "#ffffff",
//           padding: "2rem",
//           borderRadius: "12px",
//           boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//           transform: "perspective(1000px)",
//         }}
//       >
//         <h2 style={{ marginBottom: "1rem", fontSize: "2rem", color: "#333" }}>
//           🚀 Add User Asset
//         </h2>
//         <div
//           className="form-container"
//           style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
//         >
//           {["name", "type", "owner"].map((field) => (
//             <input
//               key={field}
//               placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//               value={form[field]}
//               onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
//               style={{
//                 flex: 1,
//                 padding: "0.75rem",
//                 borderRadius: "8px",
//                 border: "1px solid #ccc",
//                 boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
//                 transition: "all 0.3s ease",
//               }}
//             />
//           ))}
//           <button
//             onClick={add}
//             style={{
//               padding: "0.75rem 1.5rem",
//               background: "linear-gradient(135deg, #667eea, #764ba2)",
//               color: "#fff",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontWeight: "bold",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//               transition: "transform 0.2s ease",
//             }}
//             onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
//             onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
//           >
//             Add
//           </button>
//         </div>
//       </div>
 
//       {/* Asset List */}
//       <div
//         style={{
//           background: "#ffffff",
//           padding: "2rem",
//           borderRadius: "12px",
//           boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h3 style={{ color: "#764ba2", fontSize: "1.5rem" }}>📦 User Assets</h3>
//         {assets.length === 0 && (
//           <div style={{ color: "#999", marginTop: "2rem" }}>No assets found for the user.</div>
//         )}
 
//         {assets.map((a) => (
//           <div
//             key={a.id}
//             onMouseEnter={() => setHoveredId(a.id)}
//             onMouseLeave={() => setHoveredId(null)}
//             style={{
//               padding: "1rem",
//               marginBottom: "1rem",
//               borderRadius: "10px",
//               background: "#f9f9f9",
//               boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
//               transition: "transform 0.3s ease",
//               transform: hoveredId === a.id ? "scale(1.02)" : "scale(1)",
//               position: "relative",
//             }}
//           >
//             {editingId === a.id ? (
//               <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
//                 {["name", "type", "owner"].map((field) => (
//                   <input
//                     key={field}
//                     value={editFields[field]}
//                     onChange={(e) =>
//                       setEditFields((f) => ({ ...f, [field]: e.target.value }))
//                     }
//                     style={{
//                       padding: "0.5rem",
//                       borderRadius: "6px",
//                       border: "1px solid #ccc",
//                     }}
//                   />
//                 ))}
//                 <div style={{ display: "flex", gap: "0.5rem" }}>
//                   <button
//                     onClick={() => saveEdit(a.id)}
//                     style={{
//                       background: "#36B37E",
//                       color: "#fff",
//                       border: "none",
//                       borderRadius: "6px",
//                       padding: "0.5rem 1rem",
//                       fontWeight: "bold",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={cancelEdit}
//                     style={{
//                       background: "#DE350B",
//                       color: "#fff",
//                       border: "none",
//                       borderRadius: "6px",
//                       padding: "0.5rem 1rem",
//                       fontWeight: "bold",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div onClick={() => startEditing(a)} style={{ cursor: "pointer" }}>
//                 <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{a.name}</div>
//                 <div style={{ fontSize: "0.9rem", color: "#555" }}>
//                   {a.type} | {a.owner || "-"}
//                 </div>
//               </div>
//             )}
 
//             {hoveredId === a.id && editingId !== a.id && (
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "8px",
//                   right: "8px",
//                   display: "flex",
//                   gap: "0.5rem",
//                 }}
//               >
//                 <button
//                   onClick={() => startEditing(a)}
//                   style={{
//                     background: "#0052CC",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "6px",
//                     padding: "0.3rem 0.6rem",
//                     fontWeight: "bold",
//                     cursor: "pointer",
//                   }}
//                 >
//                   ✏️ Edit
//                 </button>
//                 <button
//                   onClick={() => deleteAsset(a.id)}
//                   style={{
//                     background: "#DE350B",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "6px",
//                     padding: "0.3rem 0.6rem",
//                     fontWeight: "bold",
//                     cursor: "pointer",
//                   }}
//                 >
//                   🗑️ Delete
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
 
//       {/* Responsive Styles */}
//       <style>{`
//         @media (max-width: 600px) {
//           /* Stack form inputs vertically with full width */
//           .form-container {
//             flex-direction: column !important;
//           }
//           .form-container input {
//             flex: none !important;
//             width: 100% !important;
//           }
//           /* Buttons full width on small screens */
//           .form-container button {
//             width: 100% !important;
//           }
//           /* Asset card padding smaller and font adjustments */
//           div[style*="padding: 1rem"][style*="margin-bottom: 1rem"] {
//             padding: 0.75rem !important;
//             margin-bottom: 0.75rem !important;
//           }
//           div[style*="font-weight: bold"][style*="font-size: 1.1rem"] {
//             font-size: 1rem !important;
//           }
//           div[style*="font-size: 0.9rem"][style*="color: #555"] {
//             font-size: 0.85rem !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



















// for update by admin code 



import React, { useEffect, useState } from "react";

// Mock API functions
const mockAssets = [
  { id: "1", email: "john@example.com", type: "Laptop", location: "Work From Office", status: "active" },
  { id: "2", email: "user2@example.com", type: "Charger", location: "Work From Home", status: "maintenance" },
  { id: "3", email: "user3@example.com", type: "Network Issue", location: "Work From Home", status: "inactive" },
];

let assetsDB = [...mockAssets];

const listAssets = () => Promise.resolve([...assetsDB]);
const addAsset = (asset) => {
  assetsDB.push(asset);
  return Promise.resolve(asset);
};

const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export default function AssetsBoard() {
  const [assets, setAssets] = useState([]);
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Laptop");
  const [location, setLocation] = useState("Work From Office");
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
    const assetType = status === "form" ? type : quickAdd[status]?.type || "Laptop";
    const assetLocation = status === "form" ? location : quickAdd[status]?.location || "Work From Office";
    if (!assetEmail?.trim()) return;

    const a = { id: generateId(), email: assetEmail, type: assetType, location: assetLocation, status: status === "form" ? "active" : status };
    await addAsset(a);
    setAssets(await listAssets());

    if (status === "form") {
      setEmail("");
      setType("Laptop");
      setLocation("Work From Office");
    } else {
      setQuickAdd((prev) => ({ ...prev, [status]: { email: "", type: "Laptop", location: "Work From Office" } }));
    }
  };

  const statusColumns = {
    active: { title: "Active", color: "#22C55E", bgColor: "#C8E9DD" },
    // maintenance: { title: "Maintenance", color: "#EAB308", bgColor: "#FEF3C7" },
    // inactive: { title: "Inactive", color: "#EF4444", bgColor: "#FECACA" },
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
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", background: "#D0F0F4", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: 0, letterSpacing: "2px" }}>FLOW TRACK</h1>
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
            style={{ flex: 1, padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ flex: 1, padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          >
            <option>Laptop</option>
            <option>Charger</option>
            <option>Network Issue</option>
          </select>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ flex: 1, padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          >
            <option>WFO</option>
            <option>WFH</option>
          </select>
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
                    draggedAsset?.id === a.id ? "0 4px 12px rgba(0,0,0,0.2)" : "0 2px 4px rgba(0,0,0,0.1)",
                  position: "relative",
                  cursor: editingId === a.id ? "default" : "move",
                  opacity: draggedAsset?.id === a.id ? 0.5 : 1,
                }}
              >
                {editingId === a.id ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <input
                      value={editFields.email}
                      onChange={(e) => setEditFields({ ...editFields, email: e.target.value })}
                      style={{ padding: "0.5rem", borderRadius: "4px", border: "none" }}
                    />
                    <select
                      value={editFields.type}
                      onChange={(e) => setEditFields({ ...editFields, type: e.target.value })}
                      style={{ padding: "0.5rem", borderRadius: "4px", border: "none" }}
                    >
                      <option>Laptop</option>
                      <option>Charger</option>
                      <option>Network Issue</option>
                    </select>
                    <select
                      value={editFields.location}
                      onChange={(e) => setEditFields({ ...editFields, location: e.target.value })}
                      style={{ padding: "0.5rem", borderRadius: "4px", border: "none" }}
                    >
                      <option>WFH</option>
                      <option>WFO</option>
                    </select>
                    <select
                      value={editFields.status}
                      onChange={(e) => setEditFields({ ...editFields, status: e.target.value })}
                      style={{ padding: "0.5rem", borderRadius: "4px", border: "none" }}
                    >
                      {Object.keys(statusColumns).map((s) => (
                        <option key={s} value={s}>
                          {statusColumns[s].title}
                        </option>
                      ))}
                    </select>
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
                    <div style={{ fontSize: "0.8rem", marginTop: "0.25rem", opacity: 0.9 }}>
                      {a.type} | {a.location}
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
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteAsset(a.id);
                      }}
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        border: "none",
                        color: "#DE350B",
                        cursor: "pointer",
                        fontWeight: "bold",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Quick Add in Column */}
            <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

