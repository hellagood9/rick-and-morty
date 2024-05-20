import {combineReducers} from '@reduxjs/toolkit';
import {charactersReducer} from './characters';
import favoritesReducer from './favorites/favoritesSlice';

const rootReducer = combineReducers({
  characters: charactersReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
