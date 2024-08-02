import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import DroneDetails from "./components/DroneDetails";
import DroneFleetOverview from "./components/DroneFleetOveriew";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <DroneFleetOverview setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/drone/:id"
          element={
            isLoggedIn ? (
              <DroneDetails setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </main>
  );
}

export default App;
