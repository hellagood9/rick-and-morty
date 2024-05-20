import {createSlice} from '@reduxjs/toolkit';
import {
  fetchCharacters,
  fetchCharacterById,
  fetchSearchCharacters,
} from './charactersThunks';
import {Character, Episode} from '@models/Character';

interface CharactersState {
  items: Character[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
  selectedCharacter: Character | null;
  episodes: Episode[];
  searchResults: Character[];
}

const initialState: CharactersState = {
  items: [],
  status: 'idle',
  error: null,
  selectedCharacter: null,
  episodes: [],
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
        state.selectedCharacter = action.payload.character;
        state.episodes = action.payload.episodes;
      })
      .addCase(fetchSearchCharacters.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      });
  },
});

export default charactersSlice.reducer;
