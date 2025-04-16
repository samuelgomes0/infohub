"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("wisehub.token="));
    setIsAuthenticated(!!token);
  }, []);

  const login = (token: string) => {
    document.cookie = `wisehub.token=${token}; path=/; max-age=86400; Secure; SameSite=Strict`;
    setIsAuthenticated(true);
    window.location.href = "/discovery";
  };

  const logout = () => {
    document.cookie =
      "wisehub.token=; path=/; max-age=0; Secure; SameSite=Strict";
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
