import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import PokemonsList from "./pages/PokemonsList/PokemonsList";

function App() {
  return (
    <div className="container">
      <PokemonsList />
    </div>
  );
}

export default App;
