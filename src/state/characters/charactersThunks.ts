import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getAllCharacters,
  getCharacterById,
  searchCharacters,
} from '@services/api/characters';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const response = await getAllCharacters();
    return response.data.results;
  },
);

export const fetchCharacterById = createAsyncThunk(
  'characters/fetchCharacterById',
  async (id: number) => {
    const response = await getCharacterById(id);
    return response.data;
  },
);

export const fetchSearchCharacters = createAsyncThunk(
  'characters/fetchSearchCharacters',
  async (name: string) => {
    const response = await searchCharacters(name);
    return response.data.results;
  },
);
