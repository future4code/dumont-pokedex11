import React, { useContext, useState } from "react";
import { PokemonsContext } from "../../context/PokemonsContext";
import { PokedexContext } from "../../context/PokedexContext";
import Navbar from "../../components/Navbar/Navbar";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./home.css";
import Pagination from "../../components/pagination/Pagination";

const Home = () => {
  const { pokemons, setPokemons } = useContext(PokemonsContext);
  const { pokedex, setPokedex } = useContext(PokedexContext);

  //For the pagination
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pokemonsPerPage] = useState(10);

  //Get pokemons for each page
  const indexOfLastBook = pageCurrent * pokemonsPerPage;
  const indexOfFirsBook = indexOfLastBook - pokemonsPerPage;
  const currentPokemons = pokemons && pokemons.slice(indexOfFirsBook, indexOfLastBook);

  //Chage page
  function paginate(pageNumber) {
    setPageCurrent(pageNumber);
  }

  function handleAddPokedex(name) {
    const pokemon = pokemons.filter((pokemon) => pokemon.name === name);
    const newPokedex = [...pokedex];
    newPokedex.push(pokemon[0]);
    setPokedex(newPokedex);

    const newPokemons = pokemons.filter((pokemon) => pokemon.name !== name);
    setPokemons(newPokemons);
  }

  return (
    <>
      <Navbar title="Lista de Pokemons" />
      <div className="home-container animateUp">
        <div className="pokemons">
          {currentPokemons &&
            currentPokemons.map((pokemon) => {
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
        <Pagination
          pokemonsPerPage={pokemonsPerPage}
          totalPokemons={pokemons && pokemons.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Home;
