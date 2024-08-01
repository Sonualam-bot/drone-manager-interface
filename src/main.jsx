import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DroneContextProvider } from "./context/DroneContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DroneContextProvider>
      <App />
    </DroneContextProvider>
  </BrowserRouter>
);
