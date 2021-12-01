import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Inicio from "./pages/Inicio/Inicio";
import Contador from "./pages/Contador/Contador";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contador" element={<Contador />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
