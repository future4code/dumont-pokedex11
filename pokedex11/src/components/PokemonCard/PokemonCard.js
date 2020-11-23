import React from "react";
import { useHistory } from "react-router-dom";
import { GoDetails } from "../../router/Navegation";
import { Button } from "../styledComponents/Button";
import "./pokemonCard.css";
const PokemonCard = (props) => {
  const history = useHistory();

  return (
    <div className="pokemonCard-container">
      <img
        src="https://source.unsplash.com/300x300/?pokemon, pokemon"
        alt="Pokemon"
      />
      <div className="pokemonCard-btns">
        <Button onClick={props.onClick}>{props.btnName}</Button>
        <Button onClick={() => GoDetails(history)}>Detalhes</Button>
      </div>
    </div>
  );
};

export default PokemonCard;
