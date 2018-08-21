import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {

    const { pokemon } = this.props;
    const pokemonItems = pokemon.map(poke => (
      <PokemonIndexItem
        poke={poke}
        key={poke.id}
      />
    ))

    return(
      <section className='main'>
        <ul className='pokedex'>{pokemonItems}</ul>
        <Route
            path="/pokemon/:pokemonId"
            component={PokemonDetailContainer}
          />

      </section>
    )
  }
}

export default PokemonIndex;
