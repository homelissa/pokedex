import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore()
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.getState = store.getState; window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>This is Melissa's Pokedex</h1>, root)

})
