import { createContext, useContext, useState } from "react";

// Create the context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Custom hook to use AuthContext easily
export const useAuth = () => useContext(AuthContext);
