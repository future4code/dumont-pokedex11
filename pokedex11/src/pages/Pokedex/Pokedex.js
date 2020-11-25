import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { PokedexContext } from "../../context/PokedexContext";

const Pokedex = () => {
  const { pokedex, setPokedex } = useContext(PokedexContext);
  console.log(pokedex, "pokedex");

  function handleRemove(name) {
    const newPokedex = pokedex.filter((pokemon) => pokemon.name !== name);
    setPokedex(newPokedex);
  }

  return (
    <div className="pokedex-container animateUp">
      <Navbar title="Pokedex" />
      <div className="pokemons">
        {pokedex &&
          pokedex.map((pokemon) => (
            <PokemonCard
              key={Math.floor(Math.random() * 1000)}
              name={pokemon.name}
              onClick={() => handleRemove(pokemon.name)}
              pokemon={pokemon}
              btnName="Remove"
              bgColor="#ffffffe0"
              color="red"
              color2="#1D2C5E"
              url={pokemon.url}
            />
          ))}
      </div>
    </div>
  );
};

export default Pokedex;
