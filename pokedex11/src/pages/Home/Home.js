import React, { useContext } from "react";
import { PokemonsContext } from "../../context/PokemonsContext";
import { PokedexContext } from "../../context/PokedexContext";
import Navbar from "../../components/Navbar/Navbar";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./home.css";

const Home = () => {
  const { pokemons } = useContext(PokemonsContext);
  const { pokedex, setPokedex } = useContext(PokedexContext);

  function handleAddPokedex(name) {
    const pokemon = pokemons.filter((pokemon) => pokemon.name === name);
    const newPokedex = [...pokedex];

    newPokedex.push(pokemon[0]);
    setPokedex(newPokedex);
  }

  return (
    <>
      <Navbar title="Lista de Pokemons" />
      <div className="home-container animateUp">
        <div className="pokemons">
          {pokemons &&
            pokemons.map((pokemon) => {
              return (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  onClick={() => handleAddPokedex(pokemon.name)}
                  pokemon={pokemon}
                  btnName="Adicionar"
                  url={pokemon.url}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
