import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const setAuthToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const getAuthToken = () => {
    return token || localStorage.getItem("token");
  };

  return (
    <AuthContext.Provider value={{ token: getAuthToken(), setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
