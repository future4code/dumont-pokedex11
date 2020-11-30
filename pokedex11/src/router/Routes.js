import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import PokeDetails from "../pages/PokeDetail/PokeDetail";
import Pokedex from "../pages/Pokedex/Pokedex";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={PokeDetails} />
        <Route path="/pokedex" component={Pokedex} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
