import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
