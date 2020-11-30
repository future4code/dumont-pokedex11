import Routes from "./router/Routes";
import PokemonsContextProvider from "./context/PokemonsContext";
import { PokedexContextProvider } from "./context/PokedexContext";
import "./styles/root.css";
import { PokemonDetailContextProvider } from "./context/PokemonDetailContext";

function App() {
  return (
    <PokemonDetailContextProvider>
      <PokedexContextProvider>
        <PokemonsContextProvider>
          <Routes />
        </PokemonsContextProvider>
      </PokedexContextProvider>
    </PokemonDetailContextProvider>
  );
}

export default App;
