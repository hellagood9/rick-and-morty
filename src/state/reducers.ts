import {combineReducers} from '@reduxjs/toolkit';
import {charactersReducer} from './characters';

const rootReducer = combineReducers({
  characters: charactersReducer,
});

export default rootReducer;
