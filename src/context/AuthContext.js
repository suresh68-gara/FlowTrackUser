
// // import React, { createContext, useContext, useEffect, useState } from 'react';
// // import { mockLogin, logout as apiLogout, getCurrentUser } from '../services/mockApi';

// // const AuthContext = createContext();
// // export function AuthProvider({ children }) {
// //   const [user, setUser] = useState(getCurrentUser());
// //   useEffect(()=>{ setUser(getCurrentUser()); },[]);
// //   const login = async (email,password) => { const u = await mockLogin(email,password); setUser(u); return u; };
// //   const logout = () => { apiLogout(); setUser(null); };
// //   return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
// // }
// // export const useAuth = () => useContext(AuthContext);





// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const login = (userData) => setUser(userData);
//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);








import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login → set user + persist
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout → clear user + remove from storage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
