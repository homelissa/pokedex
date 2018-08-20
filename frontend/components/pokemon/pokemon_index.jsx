import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {

    const { pokemon } = this.props;
    const allPokemon = pokemon.map(poke => (
      <PokemonIndexItem
        poke={poke}
        key={poke.id}
      />
    ))

    return(
      <ul>{allPokemon}</ul>
    )
  }
}

export default PokemonIndex;
