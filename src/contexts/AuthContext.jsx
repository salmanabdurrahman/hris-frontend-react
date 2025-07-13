import { createContext } from "react";
import { useLocalStorage } from "react-use";
import adminData from "../constants/adminData";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser, removeUser] = useLocalStorage("authUser", null);
  const isAuthenticated = !!user;

  const handleLogin = formData => {
    const { username, password } = formData;

    if (username === adminData.username && password === adminData.password) {
      setUser(adminData);
    } else {
      throw new Error("Username atau password tidak sesuai");
    }
  };

  const handleLogout = () => {
    removeUser();
  };

  const value = {
    user,
    isAuthenticated,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
