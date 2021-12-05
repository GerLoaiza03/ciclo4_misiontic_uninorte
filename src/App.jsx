import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
// import Formularios from "./pages/Formularios/Formularios";
import ValidadorSubmit from "./pages/Formularios/ValidadorSubmit";
import ValidadorOnChange from "./pages/Formularios/ValidadorOnChange";

function App() {
  return (
    <div className="container">
      <ValidadorSubmit />
      <ValidadorOnChange />
    </div>
  );
}

export default App;
