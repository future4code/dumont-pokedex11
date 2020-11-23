import styled from "styled-components";

export const PokeDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1000px;

  margin: 30px auto;
`;

export const PokeImages = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: space-between;
	
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
	border: 1px solid black;
	padding: 10px;
`;

export const Div = styled.div`
  height: 700px;
	width: 300px;

	min-width: 200px;
	
	padding: 0 10px;

  font-size: 1.6rem;
  border: 1px solid black;
`;

export const H2 = styled.h2`
	font-size: 1.8rem;
	font-weight: bold;

`
