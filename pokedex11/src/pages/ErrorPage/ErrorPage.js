import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/styledComponents/Button";
import { GoBack } from "../../router/Navegation";
import { H1 } from "../../components/Navbar/styled";
import { ErroDiv } from "./styled";

const ErrorPage = () => {
  const history = useHistory();

  return (
    <ErroDiv className="animateUp">
      <H1> Erro 404, por favor tente novamente </H1>

      <img
        src="https://media1.tenor.com/images/f4dfba6861f151917aa8d895f19b84d9/tenor.gif?itemid=16694846"
        alt="Pokemon triste"
      />
      <br />

      <Button onClick={() => GoBack(history)}>Voltar</Button>
    </ErroDiv>
  );
};

export default ErrorPage;
