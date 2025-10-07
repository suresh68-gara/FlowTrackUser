

















// for UI/UX 

import React, { createContext, useContext, useState, useEffect } from "react"; // <-- CORRECTED LINE

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      console.log("AuthContext: Starting initial user load from localStorage...");
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser && parsedUser.email && parsedUser.id) {
            setUser(parsedUser);
            // FIX: Changed 'parsed.email' to 'parsedUser.email' as 'parsed' was undefined
            console.log("AuthContext: User found in localStorage:", parsedUser.email);
          } else {
            console.warn("AuthContext: Malformed user data in localStorage, clearing it.");
            localStorage.removeItem("user");
          }
        } else {
          console.log("AuthContext: No user found in localStorage.");
        }
      } catch (error) {
        console.error("AuthContext: Error parsing user from localStorage:", error);
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
        console.log("AuthContext: Initial user load finished. Loading state set to false.");
      }
    };

    loadUser();
  }, []);

  // --- MODIFIED LOGIN FUNCTION ---
  const login = async (email, password) => {
    setLoading(true); // Set loading to true during login process
    console.log(`AuthContext: Login attempt for email: ${email}, password: ${password}`);
    try {
      // Simulate an API call delay (still good for UX testing)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay

      // *** THIS IS THE KEY CHANGE ***
      // We are now accepting ANY email and password as valid for demo purposes.
      // In a real application, you would replace this entire block
      // with a call to your backend authentication API.
      const userData = {
        id: "demo-user-123", // A generic ID
        name: email.split('@')[0] || "Demo User", // Use part of email as name
        email: email, // Use the provided email
        token: "fake-jwt-token-for-any-login", // A generic token
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("AuthContext: Login successful with ANY credentials! User set and stored.", userData);
      return userData;

    } catch (error) {
      // This catch block might not be hit with the simplified logic above,
      // but it's good to keep for future real API integration.
      console.error("AuthContext: Login failed (unexpected error during demo logic):", error.message);
      setUser(null);
      localStorage.removeItem("user");
      throw new Error("An unexpected error occurred during login simulation.");
    } finally {
      setLoading(false); // Always set loading to false after login attempt
      console.log("AuthContext: Login process finished. Loading state set to false.");
    }
  };
  // --- END OF MODIFIED LOGIN FUNCTION ---

  const logout = () => {
    console.log("AuthContext: User logging out.");
    setLoading(true);
    setUser(null);
    localStorage.removeItem("user");
    setLoading(false);
    console.log("AuthContext: Logout complete.");
  };

  const authContextValue = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};