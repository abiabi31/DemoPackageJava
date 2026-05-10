import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);
const TOKEN_KEY = "token";
const USER_KEY = "user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    const userData = localStorage.getItem(USER_KEY);
    return token && userData ? JSON.parse(userData) : null;
  });

  const login = (username, password) => {
    // Simple mock authentication
    if (username === "admin" && password === "password") {
      const userData = { username, name: "Admin User" };
      localStorage.setItem(TOKEN_KEY, "dummy-token");
      localStorage.setItem(USER_KEY, JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user), login, logout }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
