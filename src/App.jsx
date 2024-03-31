
import React from 'react';
import PokemonCard from './components/PokemonCard';

import PropTypes from "prop-types";
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

PokemonCard.prototype = {
  name: PropTypes.string.isRequired,
  imgSRC: PropTypes.string
}

const App = () => {
  return (
    <div>
      <PokemonCard name={pokemonList[0].name} imgSRC={pokemonList[0].imgSrc} />
    </div>
  );
};

export default App;