import React from 'react'

const PokemonCard = ({name, imgSRC}) => {

  return (
    <figure>
      {imgSRC ? <img src={imgSRC} /> : <p>???</p>}
      
      <figcaption>{name}</figcaption>
    </figure>)
  
}

export default PokemonCard
