import React from "react";
import { useHistory } from "react-router-dom";
import { GoDetails } from "../../router/Navegation";
import { Button } from "../styledComponents/Button";
import { H1 } from "../Navbar/styled";
import "./pokemonCard.css";
import { usePokemon } from "../../hooks/usePokemon";

const PokemonCard = (props) => {
  const history = useHistory();

  const img = usePokemon([], props.url);

  return (
    <div className="pokemonCard-container">
      <H1>{props.name}</H1>
      <img src={img} alt="Pokemon" />
      <div className="pokemonCard-btns">
        <Button
          style={{ background: props.bgColor, color: props.color }}
          onClick={props.onClick}
        >
          {props.btnName}
        </Button>
        <Button
          style={{ background: props.bgColor, color: props.color2 }}
          onClick={() => GoDetails(history)}
        >
          Detalhes
        </Button>
      </div>
    </div>
  );
};

export default PokemonCard;
