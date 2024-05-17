import {createSlice} from '@reduxjs/toolkit';
import {
  fetchCharacters,
  fetchCharacterById,
  fetchSearchCharacters,
} from './charactersThunks';

interface CharactersState {
  items: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
  selectedCharacter: any | null;
  searchResults: any[];
}

const initialState: CharactersState = {
  items: [],
  status: 'idle',
  error: null,
  selectedCharacter: null,
  searchResults: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.selectedCharacter = action.payload;
      })
      .addCase(fetchSearchCharacters.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      });
  },
});

export default charactersSlice.reducer;
