import { createContext, useEffect, useState } from "react";

export const DroneContext = createContext();

export const DroneContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [wrongPassword, setWrongPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!userData) return;

    const user = userData.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setIsLoggedIn(true);
      setWrongPassword(false);
    } else {
      setWrongPassword(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };
  const loginAsAdmin = () => {
    setUsername("admin");
    setPassword("password123");
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
    wrongPassword,
    loginAsAdmin,
  };

  return (
    <DroneContext.Provider value={value}>{children}</DroneContext.Provider>
  );
};
