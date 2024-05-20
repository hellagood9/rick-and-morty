import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Character} from '@models/Character';
import {AppDispatch} from '../store';

interface FavoritesState {
  items: Character[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<Character[]>) {
      state.items = action.payload;
    },
    addFavorite(state, action: PayloadAction<Character>) {
      state.items.push(action.payload);
      AsyncStorage.setItem(
        '@user_favorite_characters',
        JSON.stringify(state.items),
      );
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        character => character.id !== action.payload,
      );
      AsyncStorage.setItem(
        '@user_favorite_characters',
        JSON.stringify(state.items),
      );
    },
  },
});

export const {setFavorites, addFavorite, removeFavorite} =
  favoritesSlice.actions;

export const loadFavorites = () => async (dispatch: AppDispatch) => {
  const favorites = await AsyncStorage.getItem('@user_favorite_characters');
  if (favorites) {
    dispatch(setFavorites(JSON.parse(favorites)));
  }
};

export default favoritesSlice.reducer;
