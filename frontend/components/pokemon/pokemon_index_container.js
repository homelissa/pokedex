import PokemonIndex from './pokemon_index';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { connect } from 'react-redux';

const mSTP = state => ({
  pokemon: selectAllPokemon(state)
});

const mDTP = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mSTP,
  mDTP
)(PokemonIndex);
