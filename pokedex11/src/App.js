import Routes from "./router/Routes";
import PokemonsContextProvider from "./context/PokemonsContext";
import { PokedexContextProvider } from "./context/PokedexContext";
import "./styles/root.css";

function App() {
  return (
    <PokedexContextProvider>
      <PokemonsContextProvider>
        <Routes />
      </PokemonsContextProvider>
    </PokedexContextProvider>
  );
}

export default App;
