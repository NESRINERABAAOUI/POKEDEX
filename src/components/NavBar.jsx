import React from 'react'

const NavBar = ({pokemonList, setPokemonIndex}) => {
  return (
    <div>
      {pokemonList.map((pokemon, index)=> (
        <button onClick={()=>setPokemonIndex(pokemonList.indexOf(pokemon))} key={index}>{pokemon.name}</button>
      ))}
    </div>
  )
}

export default NavBar
