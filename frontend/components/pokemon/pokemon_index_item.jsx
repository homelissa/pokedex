import React from 'react';

const PokemonIndexItem = ({poke}) => (
  <li className='pokemon-index-item'>
    <img src={poke.image_url} />
    <span>{poke.name}</span>
  </li>
)


export default PokemonIndexItem;
