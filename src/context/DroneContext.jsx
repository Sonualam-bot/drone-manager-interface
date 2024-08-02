import { createContext, useEffect, useState } from "react";

export const DroneContext = createContext();

export const DroneContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginAttempts, setLoginAttempts] = useState(3);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!userData) return;

    const user = userData.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setIsLoggedIn(true);
    } else {
      setLoginAttempts((prevAttempts) => prevAttempts - 1);
      if (loginAttempts <= 1) {
        alert("Login failed. Too many attempts.");
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setLoginAttempts(3);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const value = {
    userData,
    isLoggedIn,
    username,
    setUsername,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    handleLogin,
    handleLogout,
  };

  return (
    <DroneContext.Provider value={value}>{children}</DroneContext.Provider>
  );
};
