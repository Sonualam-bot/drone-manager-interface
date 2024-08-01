import { createContext, useEffect, useState } from "react";

export const DroneContext = createContext();

export const DroneContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const value = {
    userData,
  };

  return (
    <DroneContext.Provider value={value}>{children}</DroneContext.Provider>
  );
};
