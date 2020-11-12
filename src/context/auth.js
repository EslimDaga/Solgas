import React, { useState, createContext, useEffect } from "react";
import cache from "../helpers/cache";
import AuthService from "../service/auth";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (cache.hasThis("user")) {
      setUser(AuthService.getCurrentUser());
    }
  }, []);
  const isAuthenticated = Object.keys(user).length > 0 && user.accessToken !== "";

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthed: isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
