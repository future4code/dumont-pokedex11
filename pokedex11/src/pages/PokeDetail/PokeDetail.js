import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { H2, Image, Div, PokeDetailContainer, PokeImages } from "./styled";

const PokeDetail = () => {
  return (
    <>
      <Navbar title="Pokemon" />
      <PokeDetailContainer>
        <PokeImages>
          <Image />
          <Image />
        </PokeImages>
        <Div>
          <H2> Poderes </H2>
          <h4>HP:</h4>
          <p> 14 </p>
          <h4>Attack:</h4>
          <p> 14 </p>
          <h4>Defense:</h4>
          <p> 14 </p>
          <h4>Special-Attack:</h4>
          <p> 14 </p>
          <h4>Special-Defence:</h4>
          <p> 14 </p>
          <h4>Speed:</h4>
          <p> 14 </p>
        </Div>
        <Div>
					<H2> Tipo: </H2>
				<H2> Principais Ataques </H2>
          <p> Dados </p>
          <p> Dados </p>
          <p> Dados </p>
          <p> Dados </p>
        </Div>
      </PokeDetailContainer>
    </>
  );
};

export default PokeDetail;
