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
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

const initialState: CharactersState = {
  items: [],
  status: 'idle',
  error: null,
  selectedCharacter: null,
  episodes: [],
  searchResults: [],
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    clearSelectedCharacter(state) {
      state.selectedCharacter = null;
      state.episodes = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';

        const newCharacters: Character[] = action.payload.characters;
        const existingCharacterIds = new Set(state.items.map(item => item.id));
        const uniqueNewCharacters = newCharacters.filter(
          (character: Character) => !existingCharacterIds.has(character.id),
        );

        state.items = [...state.items, ...uniqueNewCharacters];
        state.info = action.payload.info;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCharacterById.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedCharacter = action.payload.character;
        state.episodes = action.payload.episodes;
      })
      .addCase(fetchCharacterById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSearchCharacters.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchSearchCharacters.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchSearchCharacters.rejected, (state, action) => {
        state.searchResults = [];
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const {clearSelectedCharacter} = charactersSlice.actions;
export default charactersSlice.reducer;
