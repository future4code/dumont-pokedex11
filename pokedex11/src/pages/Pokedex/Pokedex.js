import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const Pokedex = () => {
  return (
    <div className="pokedex-container">
      <Navbar title="Pokedex" />
      <div className="pokemons">
        <PokemonCard btnName="Remover" />

      </div>
    </div>
  );
};

export default Pokedex;
