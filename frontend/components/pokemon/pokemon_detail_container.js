import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { connect } from 'react-redux';

const mSTP = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
});

const mDTP = dispatch => ({
  requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
})

export default connect(
  mSTP,
  mDTP
)(PokemonDetail);
