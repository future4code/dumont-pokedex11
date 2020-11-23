import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar title="Lista de Pokemons" />
      <div className="home-container">
        <div className="pokemons">
          <PokemonCard btnName="Adicionar" />
        </div>
      </div>
    </>
  );
};

export default Home;
