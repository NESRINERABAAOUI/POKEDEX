import React from 'react'

const NavBar = ({pokemonIndex, setPokemonIndex}) => {
  return (
    <div>
      {pokemonIndex > 0 ? <button onClick={()=> setPokemonIndex(pokemonIndex - 1)}>Precedent</button> : ''}
      {pokemonIndex < 4 ?   <button onClick={()=> setPokemonIndex(pokemonIndex + 1)}>Suivant</button> : ''}

    </div>
  )
}

export default NavBar
