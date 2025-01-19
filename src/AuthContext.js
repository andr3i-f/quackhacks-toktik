import React, { createContext, useState, useEffect } from "react";

// Create Auth Context
export const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Holds authenticated user data
  const [loading, setLoading] = useState(true);

  // Simulate authentication state persistence (e.g., localStorage or API validation)
//   useEffect(() => {
//     const savedUser = JSON.parse(localStorage.getItem("authUser"));
//     if (savedUser) {
//       setUser(savedUser);
//     }
//     setLoading(false);
//   }, []);

  // Login function
  const login = (userData) => {
    console.log(userData)
    setUser(userData);
    sessionStorage.setItem("authUser", JSON.stringify(userData)); // Persist user
  
};

  // Logout function
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("authUser");
  };

  console.log(user)

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
