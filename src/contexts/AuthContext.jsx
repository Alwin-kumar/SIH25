"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session on app load
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing saved user:", error);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email, password) => {
    // Simulate authentication - replace with real auth logic
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          email,
          name: email.split("@")[0],
          isAuthenticated: true,
          signInTime: new Date().toISOString()
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        resolve(userData);
      }, 1000);
    });
  };

  const signUp = async (name, email, password) => {
    // Simulate account creation - replace with real auth logic
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          email,
          name,
          isAuthenticated: true,
          signUpTime: new Date().toISOString()
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        resolve(userData);
      }, 1000);
    });
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const continueAsGuest = () => {
    const guestUser = {
      email: "guest@example.com",
      name: "Guest User",
      isAuthenticated: false,
      isGuest: true
    };
    setUser(guestUser);
    localStorage.setItem("user", JSON.stringify(guestUser));
    return guestUser;
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    continueAsGuest,
    isAuthenticated: user?.isAuthenticated || false,
    isGuest: user?.isGuest || false
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
