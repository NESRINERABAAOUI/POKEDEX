
import React, {useState} from 'react';
import PokemonCard from './components/PokemonCard';

import PropTypes from "prop-types";
const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
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

  const [pokemonIndex, setPokemonIndex] = useState(0)
  return (
    <div>
      <PokemonCard name={pokemonList[pokemonIndex].name} imgSrc={pokemonList[pokemonIndex].imgSrc} />
      {pokemonIndex > 0 ? <button onClick={()=> setPokemonIndex(pokemonIndex - 1)}>Precedent</button> : ''}
      {pokemonIndex < pokemonList.length - 1 ?   <button onClick={()=> setPokemonIndex(pokemonIndex + 1)}>Suivant</button> : ''}

    </div>
  );
};

export default App;