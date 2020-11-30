import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../styledComponents/Button";
import logo from "../../assets/pokemon-logo.png";
import { Logo, H1 } from "./styled";
import "./navbar.css";
import { GoBack, GoPokedex, GoHome } from "../../router/Navegation";

const Navbar = (props) => {
  const history = useHistory();

  return (
    <div className="navbar-container">
      <Logo src={logo} alt="Logo" onClick={() => GoHome(history) }/>
      <H1>{props.title}</H1>
      <div className="navbar-btns">
        <Button onClick={() => GoBack(history)}>Go Back</Button>
        <Button onClick={() => GoPokedex(history)}>Pokedex</Button>
      </div>
    </div>
  );
};

export default Navbar;
