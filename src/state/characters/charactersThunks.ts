import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getAllCharacters,
  getCharacterById,
  searchCharacters,
  getEpisodesByIds,
} from '@services/api/characters';
import {clearSelectedCharacter} from './charactersSlice';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (page: number = 1) => {
    const response = await getAllCharacters(page);

    return {
      characters: response.data.results,
      info: response.data.info,
    };
  },
);

export const fetchCharacterById = createAsyncThunk(
  'characters/fetchCharacterById',
  async (id: number, {dispatch}) => {
    dispatch(clearSelectedCharacter());

    const characterResponse = await getCharacterById(id);
    const character = characterResponse.data;

    const episodeIds = character.episode.map(
      (ep: string) => ep.split('/').pop()!,
    );
    const episodesResponse = await getEpisodesByIds(episodeIds);
    const episodes = Array.isArray(episodesResponse.data)
      ? episodesResponse.data
      : [episodesResponse.data];

    return {character, episodes};
  },
);

export const fetchSearchCharacters = createAsyncThunk(
  'characters/fetchSearchCharacters',
  async (name: string, {rejectWithValue}) => {
    try {
      const response = await searchCharacters(name);
      if (response.data.results.length === 0) {
        return rejectWithValue('No results found');
      }
      return response.data.results;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue('Failed to fetch characters');
    }
  },
);
