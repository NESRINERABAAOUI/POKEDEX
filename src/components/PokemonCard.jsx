import React from 'react'

const PokemonCard = ({nesrine}) => {
console.log(nesrine)
  return (
    nesrine.map((pokemon)=>(
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
      
      <figcaption>{pokemon.name}</figcaption>
    </figure>))
  )
}

export default PokemonCard
