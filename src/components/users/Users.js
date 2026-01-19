


// // ok 

// // import React, { useEffect, useState } from "react";
// // import { listUsers, addUser, updateUser, deleteUser } from "../../services/mockApi";
// // import { v4 as uuidv4 } from "uuid";
// // import { FiUserPlus } from "react-icons/fi";


// // const ROLES_KEY = "user-management-roles";
// // const DEPARTMENTS_KEY = "user-management-departments";


// // const defaultRoles = [
// //   "Associate Developer",
// //   "Senior Associate Developer",
// //   "HR",
// //   "Administration"
// // ];
// // const defaultDepartments = [
// //   "Frontend",
// //   "Backend",
// //   "Marketing",
// //   "AI/ML",
// //   "DevOps",
// //   "Testing",
// //   "FlowTrack",
// //   "NetWork",
// //   "Hr"
// // ];


// // function getStored(key, fallback) {
// //   const saved = localStorage.getItem(key);
// //   try {
// //     return saved ? JSON.parse(saved) : fallback;
// //   } catch {
// //     return fallback;
// //   }
// // }


// // function setStored(key, value) {
// //   localStorage.setItem(key, JSON.stringify(value));
// // }


// // // Inline style objects
// // const styles = {
// //   usersContainer: {
// //     minHeight: "100vh",
// //     background: "#D8F7FA",
// //     padding: 20,
// //     fontFamily: "'Inter', Arial, sans-serif"
// //   },
// //   usersHeader: {
// //     textAlign: "center",
// //     marginBottom: 40,
// //     color: "#2d3748"
// //   },
// //   usersTitle: {
// //     fontSize: "2.5rem",
// //     fontWeight: 700,
// //     marginBottom: 8
// //   },
// //   usersSubtitle: {
// //     fontSize: "1.1rem",
// //     opacity: 0.8,
// //     color: "#4a5568"
// //   },
// //   errorMessage: {
// //     color: "#e53e3e",
// //     background: "#fed7d7",
// //     padding: "8px 15px",
// //     borderRadius: 8,
// //     marginTop: 15,
// //     display: "inline-block",
// //     fontWeight: 500
// //   },
// //   successMessage: {
// //     color: "#276749",
// //     background: "#c6f6d5",
// //     padding: "8px 15px",
// //     borderRadius: 8,
// //     marginTop: 15,
// //     display: "inline-block",
// //     fontWeight: 500
// //   },
// //   usersGrid: {
// //     display: "grid",
// //     gridTemplateColumns: "1fr",
// //     gap: 30,
// //     maxWidth: 900,
// //     margin: "0 auto"
// //   },
// //   glassmorphism: {
// //     background: "rgba(255,255,255,0.95)",
// //     backdropFilter: "blur(10px)",
// //     borderRadius: 20,
// //     border: "1px solid rgba(255,255,255,0.2)",
// //     boxShadow: "0 8px 32px rgba(0,0,0,0.05)"
// //   },
// //   formCard: {
// //     padding: 30
// //   },
// //   cardHeader: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     marginBottom: 30,
// //     flexWrap: "wrap",
// //     gap: 15
// //   },
// //   cardTitle: {
// //     fontSize: "1.5rem",
// //     fontWeight: 600,
// //     color: "#2d3748",
// //     display: "flex",
// //     alignItems: "center"
// //   },
// //   iconSpacing: {
// //     marginRight: 10
// //   },
// //   formGrid: {
// //     display: "grid",
// //     gridTemplateColumns: "1fr 1fr",
// //     gap: 20,
// //     marginBottom: 30
// //   },
// //   inputGroup: {
// //     display: "flex",
// //     flexDirection: "column"
// //   },
// //   inputLabel: {
// //     fontWeight: 500,
// //     marginBottom: 8,
// //     color: "#4a5568"
// //   },
// //   checkboxGroup: {},
// //   checkboxLabel: {
// //     display: "flex",
// //     alignItems: "center",
// //     fontWeight: 400,
// //     color: "#4a5568",
// //     cursor: "pointer",
// //     padding: 10,
// //     borderRadius: 8
// //   },
// //   checkbox: {
// //     marginRight: 10,
// //     width: 18,
// //     height: 18,
// //     accentColor: "#667eea"
// //   },
// //   modernInput: {
// //     padding: "12px 16px",
// //     border: "2px solid #e2e8f0",
// //     borderRadius: 10,
// //     fontSize: "1rem",
// //     background: "#D8F7FA",
// //     width: "100%",
// //     boxSizing: "border-box",
// //     transition: "all 0.3s"
// //   },
// //   modernSelect: {
// //     padding: "12px 16px",
// //     border: "2px solid #e2e8f0",
// //     borderRadius: 10,
// //     fontSize: "1rem",
// //     background: "#D8F7FA",
// //     width: "100%",
// //     boxSizing: "border-box",
// //     transition: "all 0.3s"
// //   },
// //   createBtn: {
// //     gridColumn: "1 / -1",
// //     width: "100%",
// //     padding: 14,
// //     background: "#4e54c8",
// //     color: "white",
// //     border: "none",
// //     borderRadius: 10,
// //     fontSize: "1rem",
// //     fontWeight: 600,
// //     cursor: "pointer",
// //     transition: "transform 0.2s",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center"
// //   }
// // };


// // export default function Users() {
// //   const defaultNewUser = {
// //     firstName: "",
// //     email: "",
// //     role: defaultRoles[0],
// //     department: defaultDepartments[0],
// //     active: true,
// //     mobileNumber: "",
// //     passwordResetNeeded: false,
// //     profileFile: null,
// //   };


// //   const [users, setUsers] = useState([]);
// //   const [newUserForm, setNewUserForm] = useState(defaultNewUser);
// //   const [editingId, setEditingId] = useState(null);
// //   const [editForm, setEditForm] = useState({});
// //   const [error, setError] = useState(null);
// //   const [successMessage, setSuccessMessage] = useState(null);
// //   const [roles, setRoles] = useState(defaultRoles);
// //   const [departments, setDepartments] = useState(defaultDepartments);


// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const data = await listUsers();
// //         setUsers(data);
// //       } catch (err) {
// //         setError("Failed to load users");
// //       }
// //     };
// //     fetchUsers();
// //   }, []);


// //   useEffect(() => {
// //     setStored(ROLES_KEY, roles);
// //   }, [roles]);
// //   useEffect(() => {
// //     setStored(DEPARTMENTS_KEY, departments);
// //   }, [departments]);


// //   const handleNewUserChange = (e) => {
// //     const { name, value, type, checked, files } = e.target;
// //     setNewUserForm((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
// //     }));
// //     setError(null);
// //     setSuccessMessage(null); // Clear success message on input change
// //   };


// //   const create = async () => {
// //     if (!newUserForm.firstName.trim() || !newUserForm.email.trim()) {
// //       setError("First Name and Email are required.");
// //       setSuccessMessage(null);
// //       return;
// //     }
// //     try {
// //       const newUser = {
// //         id: uuidv4(),
// //         ...newUserForm,
// //         name: newUserForm.firstName.trim(),
// //         profileFile: newUserForm.profileFile
// //           ? { name: newUserForm.profileFile.name, size: newUserForm.profileFile.size }
// //           : null,
// //       };
// //       await addUser(newUser);
// //       const updatedUsers = await listUsers();
// //       setUsers(updatedUsers);
// //       setNewUserForm(defaultNewUser);
// //       setError(null);
// //       setSuccessMessage("User added successfully!"); // Show success message
// //     } catch (err) {
// //       setError("Failed to add user");
// //       setSuccessMessage(null);
// //     }
// //   };


// //   // Responsive fix for single-column on mobile
// //   const formGridStyle = window.innerWidth <= 1024
// //     ? { ...styles.formGrid, gridTemplateColumns: "1fr" }
// //     : styles.formGrid;


// //   return (
// //     <div style={styles.usersContainer}>
// //       <div style={styles.usersHeader}>
// //         <h1 style={styles.usersTitle}>User Management</h1>
// //         <p style={styles.usersSubtitle}>Manage your users, roles, and departments</p>
// //       </div>
// //       <div style={styles.usersGrid}>
// //         <div style={{ ...styles.glassmorphism, ...styles.formCard }}>
// //           <div style={styles.cardHeader}>
// //             <h2 style={styles.cardTitle}>
// //               <span style={styles.iconSpacing}><FiUserPlus /></span>
// //               Profile
// //             </h2>
// //           </div>
// //           <div style={formGridStyle}>
// //             <div style={styles.inputGroup}>
// //               <label style={styles.inputLabel} htmlFor="firstName">Full Name</label>
// //               <input
// //                 style={styles.modernInput}
// //                 id="firstName"
// //                 name="firstName"
// //                 type="text"
// //                 value={newUserForm.firstName}
// //                 onChange={handleNewUserChange}
// //               />
// //             </div>
// //             <div style={styles.inputGroup}>
// //               <label style={styles.inputLabel} htmlFor="email">Email</label>
// //               <input
// //                 style={styles.modernInput}
// //                 id="email"
// //                 name="email"
// //                 type="email"
// //                 value={newUserForm.email}
// //                 onChange={handleNewUserChange}
// //               />
// //             </div>
// //             <div style={styles.inputGroup}>
// //               <label style={styles.inputLabel} htmlFor="role">Role</label>
// //               <select
// //                 style={styles.modernSelect}
// //                 id="role"
// //                 name="role"
// //                 value={newUserForm.role}
// //                 onChange={handleNewUserChange}
// //               >
// //                 {roles.map((r) => (
// //                   <option key={r} value={r}>{r}</option>
// //                 ))}
// //               </select>
// //             </div>
// //             <div style={styles.inputGroup}>
// //               <label style={styles.inputLabel} htmlFor="department">Department</label>
// //               <select
// //                 style={styles.modernSelect}
// //                 id="department"
// //                 name="department"
// //                 value={newUserForm.department}
// //                 onChange={handleNewUserChange}
// //               >
// //                 {departments.map((d) => (
// //                   <option key={d} value={d}>{d}</option>
// //                 ))}
// //               </select>
// //             </div>
// //             <div style={styles.inputGroup}>
// //               <label style={styles.inputLabel} htmlFor="mobileNumber">Mobile Number</label>
// //               <input
// //                 style={styles.modernInput}
// //                 id="mobileNumber"
// //                 name="mobileNumber"
// //                 type="tel"
// //                 value={newUserForm.mobileNumber}
// //                 onChange={handleNewUserChange}
// //               />
// //             </div>
// //             <div style={{ ...styles.inputGroup, ...styles.checkboxGroup }}>
// //               <label style={styles.checkboxLabel} htmlFor="passwordResetNeeded">
// //                 <input
// //                   id="passwordResetNeeded"
// //                   name="passwordResetNeeded"
// //                   type="checkbox"
// //                   checked={newUserForm.passwordResetNeeded}
// //                   onChange={handleNewUserChange}
// //                   style={styles.checkbox}
// //                 />
// //                 Password Reset Needed
// //               </label>
// //             </div>
// //           </div>
// //           {/* Submit Button added here */}
// //           <button style={styles.createBtn} onClick={create}>
// //             Submit
// //           </button>
// //           {error && (
// //             <p style={styles.errorMessage}>{error}</p>
// //           )}
// //           {successMessage && (
// //             <p style={styles.successMessage}>{successMessage}</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
















// // 

// import React, { useEffect, useState } from "react";
// import { listUsers, addUser, updateUser, deleteUser } from "../../services/mockApi";
// import { v4 as uuidv4 } from "uuid";
// import { FiUserPlus, FiEdit, FiSave } from "react-icons/fi";

// const ROLES_KEY = "user-management-roles";
// const DEPARTMENTS_KEY = "user-management-departments";

// const defaultRoles = [
//   "Associate Developer",
//   "Senior Associate Developer",
//   "HR",
//   "Administration"
// ];
// const defaultDepartments = [
//   "Frontend",
//   "Backend",
//   "Marketing",
//   "AI/ML",
//   "DevOps",
//   "Testing",
//   "FlowTrack",
//   "NetWork",
//   "Hr"
// ];

// function getStored(key, fallback) {
//   const saved = localStorage.getItem(key);
//   try {
//     return saved ? JSON.parse(saved) : fallback;
//   } catch {
//     return fallback;
//   }
// }

// function setStored(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// // Inline style objects
// const styles = {
//   usersContainer: {
//     minHeight: "100vh",
//     background: "#D8F7FA",
//     padding: 20,
//     fontFamily: "'Inter', Arial, sans-serif"
//   },
//   usersHeader: {
//     textAlign: "center",
//     marginBottom: 40,
//     color: "#2d3748"
//   },
//   usersTitle: {
//     fontSize: "2.5rem",
//     fontWeight: 700,
//     marginBottom: 8
//   },
//   usersSubtitle: {
//     fontSize: "1.1rem",
//     opacity: 0.8,
//     color: "#4a5568"
//   },
//   errorMessage: {
//     color: "#e53e3e",
//     background: "#fed7d7",
//     padding: "8px 15px",
//     borderRadius: 8,
//     marginTop: 15,
//     display: "inline-block",
//     fontWeight: 500
//   },
//   successMessage: {
//     color: "#276749",
//     background: "#c6f6d5",
//     padding: "8px 15px",
//     borderRadius: 8,
//     marginTop: 15,
//     display: "inline-block",
//     fontWeight: 500
//   },
//   usersGrid: {
//     display: "grid",
//     gridTemplateColumns: "1fr",
//     gap: 30,
//     maxWidth: 900,
//     margin: "0 auto"
//   },
//   glassmorphism: {
//     background: "rgba(255,255,255,0.95)",
//     backdropFilter: "blur(10px)",
//     borderRadius: 20,
//     border: "1px solid rgba(255,255,255,0.2)",
//     boxShadow: "0 8px 32px rgba(0,0,0,0.05)"
//   },
//   formCard: {
//     padding: 30
//   },
//   cardHeader: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 30,
//     flexWrap: "wrap",
//     gap: 15
//   },
//   cardTitle: {
//     fontSize: "1.5rem",
//     fontWeight: 600,
//     color: "#2d3748",
//     display: "flex",
//     alignItems: "center"
//   },
//   iconSpacing: {
//     marginRight: 10,
//   },
//   formGrid: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: 20,
//     marginBottom: 30
//   },
//   inputGroup: {
//     display: "flex",
//     flexDirection: "column"
//   },
//   inputLabel: {
//     fontWeight: 500,
//     marginBottom: 8,
//     color: "#4a5568"
//   },
//   checkboxGroup: {},
//   checkboxLabel: {
//     display: "flex",
//     alignItems: "center",
//     fontWeight: 400,
//     color: "#4a5568",
//     cursor: "pointer",
//     padding: 10,
//     borderRadius: 8
//   },
//   checkbox: {
//     marginRight: 10,
//     width: 18,
//     height: 18,
//     accentColor: "#667eea"
//   },
//   modernInput: {
//     padding: "12px 16px",
//     border: "2px solid #e2e8f0",
//     borderRadius: 10,
//     fontSize: "1rem",
//     background: "#D8F7FA",
//     width: "100%",
//     boxSizing: "border-box",
//     transition: "all 0.3s"
//   },
//   modernSelect: {
//     padding: "12px 16px",
//     border: "2px solid #e2e8f0",
//     borderRadius: 10,
//     fontSize: "1rem",
//     background: "#D8F7FA",
//     width: "100%",
//     boxSizing: "border-box",
//     transition: "all 0.3s"
//   },
//   createBtn: {
//     gridColumn: "1 / -1",
//     width: "100%",
//     padding: 14,
//     background: "#4e54c8",
//     color: "white",
//     border: "none",
//     borderRadius: 10,
//     fontSize: "1rem",
//     fontWeight: 600,
//     cursor: "pointer",
//     transition: "transform 0.2s",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   editIcon: {
//     cursor: "pointer",
//     marginLeft: 15,
//     color: "#4a5568",
//     fontSize: '30px'
//   }
// };

// export default function Users() {
//   const defaultNewUser = {
//     firstName: "",
//     email: "",
//     role: defaultRoles[0],
//     department: defaultDepartments[0],
//     active: true,
//     mobileNumber: "",
//     passwordResetNeeded: false,
//     profileFile: null,
//   };

//   const [users, setUsers] = useState([]);
//   const [newUserForm, setNewUserForm] = useState(defaultNewUser);
//   const [editingId, setEditingId] = useState(null);
//   const [editForm, setEditForm] = useState({});
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [roles, setRoles] = useState(defaultRoles);
//   const [departments, setDepartments] = useState(defaultDepartments);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const data = await listUsers();
//         setUsers(data);
//       } catch (err) {
//         setError("Failed to load users");
//       }
//     };
//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     setStored(ROLES_KEY, roles);
//   }, [roles]);
//   useEffect(() => {
//     setStored(DEPARTMENTS_KEY, departments);
//   }, [departments]);

//   const handleNewUserChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setNewUserForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
//     }));
//     setError(null);
//     setSuccessMessage(null); // Clear success message on input change
//   };

//   const create = async () => {
//     if (!newUserForm.firstName.trim() || !newUserForm.email.trim()) {
//       setError("First Name and Email are required.");
//       setSuccessMessage(null);
//       return;
//     }
//     try {
//       const newUser = {
//         id: uuidv4(),
//         ...newUserForm,
//         name: newUserForm.firstName.trim(),
//         profileFile: newUserForm.profileFile
//           ? { name: newUserForm.profileFile.name, size: newUserForm.profileFile.size }
//           : null,
//       };
//       await addUser(newUser);
//       const updatedUsers = await listUsers();
//       setUsers(updatedUsers);
//       setNewUserForm(defaultNewUser);
//       setError(null);
//       setSuccessMessage("User added successfully!"); // Show success message
//     } catch (err) {
//       setError("Failed to add user");
//       setSuccessMessage(null);
//     }
//   };

//   // Responsive fix for single-column on mobile
//   const formGridStyle = window.innerWidth <= 1024
//     ? { ...styles.formGrid, gridTemplateColumns: "1fr" }
//     : styles.formGrid;

//   return (
//     <div style={styles.usersContainer}>
//       <div style={styles.usersHeader}>
//         <h1 style={styles.usersTitle}>User Management</h1>
//         <p style={styles.usersSubtitle}>Manage your users, roles, and departments</p>
//       </div>
//       <div style={styles.usersGrid}>
//         <div style={{ ...styles.glassmorphism, ...styles.formCard }}>
//           <div style={styles.cardHeader}>
//             <h2 style={styles.cardTitle}>
//               <span style={styles.iconSpacing}><FiUserPlus /></span>
//               Profile
//             </h2>
//             {/* <div>
//               <FiEdit style={styles.editIcon} title="Edit" />
//               <FiSave style={styles.editIcon} title="Save" />
//             </div> */}
//           </div>
//           <div style={formGridStyle}>
//             <div style={styles.inputGroup}>
//               <label style={styles.inputLabel} htmlFor="firstName">Full Name</label>
//               <input
//                 style={styles.modernInput}
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 value={newUserForm.firstName}
//                 onChange={handleNewUserChange}
//               />
//             </div>
//             <div style={styles.inputGroup}>
//               <label style={styles.inputLabel} htmlFor="email">Email</label>
//               <input
//                 style={styles.modernInput}
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={newUserForm.email}
//                 onChange={handleNewUserChange}
//               />
//             </div>
//             <div style={styles.inputGroup}>
//               <label style={styles.inputLabel} htmlFor="role">Role</label>
//               <select
//                 style={styles.modernSelect}
//                 id="role"
//                 name="role"
//                 value={newUserForm.role}
//                 onChange={handleNewUserChange}
//               >
//                 {roles.map((r) => (
//                   <option key={r} value={r}>{r}</option>
//                 ))}
//               </select>
//             </div>
//             <div style={styles.inputGroup}>
//               <label style={styles.inputLabel} htmlFor="department">Department</label>
//               <select
//                 style={styles.modernSelect}
//                 id="department"
//                 name="department"
//                 value={newUserForm.department}
//                 onChange={handleNewUserChange}
//               >
//                 {departments.map((d) => (
//                   <option key={d} value={d}>{d}</option>
//                 ))}
//               </select>
//             </div>
//             <div style={styles.inputGroup}>
//               <label style={styles.inputLabel} htmlFor="mobileNumber">Mobile Number</label>
//               <input
//                 style={styles.modernInput}
//                 id="mobileNumber"
//                 name="mobileNumber"
//                 type="tel"
//                 value={newUserForm.mobileNumber}
//                 onChange={handleNewUserChange}
//               />
//             </div>
//             <div style={{ ...styles.inputGroup, ...styles.checkboxGroup }}>
//               <label style={styles.checkboxLabel} htmlFor="passwordResetNeeded">
//                 <input
//                   id="passwordResetNeeded"
//                   name="passwordResetNeeded"
//                   type="checkbox"
//                   checked={newUserForm.passwordResetNeeded}
//                   onChange={handleNewUserChange}
//                   style={styles.checkbox}
//                 />
//                 Password Reset Needed
//               </label>
//             </div>
//           </div>
//           {/* Submit Button added here */}
//       <div>

//             <button style={styles.createBtn} onClick={create}  <FiEdit style={styles.editIcon} title="Edit" />>
//             Edit
//           </button>
//           <button style={styles.createBtn} onClick={create}               <FiEdit style={styles.editIcon} title="Edit" />
// >
//             Save
//           </button>
//           {error && (
//             <p style={styles.errorMessage}>{error}</p>
//           )}
//           {successMessage && (
//             <p style={styles.successMessage}>{successMessage}</p>
//           )}
//       </div>
//         </div>
//       </div>
//     </div>
//   );
// }














// 

import React, { useEffect, useState } from "react";
import { listUsers, addUser, updateUser, deleteUser } from "../../services/mockApi";
import { v4 as uuidv4 } from "uuid";
import { FiUserPlus, FiEdit, FiSave } from "react-icons/fi";

const ROLES_KEY = "user-management-roles";
const DEPARTMENTS_KEY = "user-management-departments";

const defaultRoles = [
  "Associate Developer",
  "Senior Associate Developer",
  "HR",
  "Administration"
];
const defaultDepartments = [
  "Frontend",
  "Backend",
  "Marketing",
  "AI/ML",
  "DevOps",
  "Testing",
  "FlowTrack",
  "NetWork",
  "Hr"
];

function getStored(key, fallback) {
  const saved = localStorage.getItem(key);
  try {
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function setStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Inline style objects
const styles = {
  usersContainer: {
    minHeight: "100vh",
    background: "#D8F7FA",
    padding: 20,
    fontFamily: "'Inter', Arial, sans-serif"
  },
  usersHeader: {
    textAlign: "center",
    marginBottom: 40,
    color: "#2d3748"
  },
  usersTitle: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: 8
  },
  usersSubtitle: {
    fontSize: "1.1rem",
    opacity: 0.8,
    color: "#4a5568"
  },
  errorMessage: {
    color: "#e53e3e",
    background: "#fed7d7",
    padding: "8px 15px",
    borderRadius: 8,
    marginTop: 15,
    display: "inline-block",
    fontWeight: 500
  },
  successMessage: {
    color: "#276749",
    background: "#c6f6d5",
    padding: "8px 15px",
    borderRadius: 8,
    marginTop: 15,
    display: "inline-block",
    fontWeight: 500
  },
  usersGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 30,
    maxWidth: 900,
    margin: "0 auto"
  },
  glassmorphism: {
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.05)"
  },
  formCard: {
    padding: 30
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    flexWrap: "wrap",
    gap: 15
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#2d3748",
    display: "flex",
    alignItems: "center"
  },
  iconSpacing: {
    marginRight: 10,
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    marginBottom: 30
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column"
  },
  inputLabel: {
    fontWeight: 500,
    marginBottom: 8,
    color: "#4a5568"
  },
  checkboxGroup: {},
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    fontWeight: 400,
    color: "#4a5568",
    cursor: "pointer",
    padding: 10,
    borderRadius: 8
  },
  checkbox: {
    marginRight: 10,
    width: 18,
    height: 18,
    accentColor: "#667eea"
  },
  modernInput: {
    padding: "12px 16px",
    border: "2px solid #e2e8f0",
    borderRadius: 10,
    fontSize: "1rem",
    background: "#D8F7FA",
    width: "100%",
    boxSizing: "border-box",
    transition: "all 0.3s"
  },
  modernSelect: {
    padding: "12px 16px",
    border: "2px solid #e2e8f0",
    borderRadius: 10,
    fontSize: "1rem",
    background: "#D8F7FA",
    width: "100%",
    boxSizing: "border-box",
    transition: "all 0.3s"
  },
  buttonGroup: {
    display: "flex",
    gap: 15
  },
  createBtn: {
    padding: 14,
    background: "#D8F7FA",
    color: "black",
    border: "none",
    borderRadius: 10,
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "transform 0.2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  editIcon: {
    color: "blue",
    fontSize: 20,
    marginRight: 8
  }
};

export default function Users() {
  const defaultNewUser = {
    firstName: "",
    email: "",
    role: defaultRoles[0],
    department: defaultDepartments[0],
    active: true,
    mobileNumber: "",
    passwordResetNeeded: false,
    profileFile: null,
  };

  const [users, setUsers] = useState([]);
  const [newUserForm, setNewUserForm] = useState(defaultNewUser);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [roles, setRoles] = useState(defaultRoles);
  const [departments, setDepartments] = useState(defaultDepartments);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await listUsers();
        setUsers(data);
      } catch (err) {
        setError("Failed to load users");
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setStored(ROLES_KEY, roles);
  }, [roles]);
  useEffect(() => {
    setStored(DEPARTMENTS_KEY, departments);
  }, [departments]);

  const handleNewUserChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setNewUserForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
    setError(null);
    setSuccessMessage(null);
  };

  const create = async () => {
    if (!newUserForm.firstName.trim() || !newUserForm.email.trim()) {
      setError("First Name and Email are required.");
      setSuccessMessage(null);
      return;
    }
    try {
      const newUser = {
        id: uuidv4(),
        ...newUserForm,
        name: newUserForm.firstName.trim(),
        profileFile: newUserForm.profileFile
          ? { name: newUserForm.profileFile.name, size: newUserForm.profileFile.size }
          : null,
      };
      await addUser(newUser);
      const updatedUsers = await listUsers();
      setUsers(updatedUsers);
      setNewUserForm(defaultNewUser);
      setError(null);
      setSuccessMessage("User added successfully!");
    } catch (err) {
      setError("Failed to add user");
      setSuccessMessage(null);
    }
  };

  // Sample edit/save handlers (customize as needed)
  const handleEdit = () => {
    setSuccessMessage("Edit mode activated");
  };

  const handleSave = () => {
    setSuccessMessage("Save successful!");
  };

  // Responsive fix for single-column on mobile
  const formGridStyle = window.innerWidth <= 1024
    ? { ...styles.formGrid, gridTemplateColumns: "1fr" }
    : styles.formGrid;

  return (
    <div style={styles.usersContainer}>
      <div style={styles.usersHeader}>
        <h1 style={styles.usersTitle}>User Management</h1>
        <p style={styles.usersSubtitle}>Manage your users, roles, and departments</p>
      </div>
      <div style={styles.usersGrid}>
        <div style={{ ...styles.glassmorphism, ...styles.formCard }}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <span style={styles.iconSpacing}><FiUserPlus /></span>
              Profile
            </h2>
          </div>
          <div style={formGridStyle}>
            <div style={styles.inputGroup}>
              <label style={styles.inputLabel} htmlFor="firstName">Full Name</label>
              <input
                style={styles.modernInput}
                id="firstName"
                name="firstName"
                type="text"
                value={newUserForm.firstName}
                onChange={handleNewUserChange}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.inputLabel} htmlFor="email">Email</label>
              <input
                style={styles.modernInput}
                id="email"
                name="email"
                type="email"
                value={newUserForm.email}
                onChange={handleNewUserChange}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.inputLabel} htmlFor="role">Role</label>
              <select
                style={styles.modernSelect}
                id="role"
                name="role"
                value={newUserForm.role}
                onChange={handleNewUserChange}
              >
                {roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.inputLabel} htmlFor="department">Department</label>
              <select
                style={styles.modernSelect}
                id="department"
                name="department"
                value={newUserForm.department}
                onChange={handleNewUserChange}
              >
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.inputLabel} htmlFor="mobileNumber">Mobile Number</label>
              <input
                style={styles.modernInput}
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                value={newUserForm.mobileNumber}
                onChange={handleNewUserChange}
              />
            </div>
            <div style={{ ...styles.inputGroup, ...styles.checkboxGroup }}>
              <label style={styles.checkboxLabel} htmlFor="passwordResetNeeded">
                <input
                  id="passwordResetNeeded"
                  name="passwordResetNeeded"
                  type="checkbox"
                  checked={newUserForm.passwordResetNeeded}
                  onChange={handleNewUserChange}
                  style={styles.checkbox}
                />
                Password Reset Needed
              </label>
            </div>
          </div>
          <div style={styles.buttonGroup}>
            <button style={styles.createBtn} onClick={handleEdit}>
              <FiEdit style={styles.editIcon} />
              Edit
            </button>
            <button style={styles.createBtn} onClick={handleSave}>
              <FiSave style={styles.editIcon} />
              Save
            </button>
          </div>
          {error && (
            <p style={styles.errorMessage}>{error}</p>
          )}
          {successMessage && (
            <p style={styles.successMessage}>{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
