import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getAllCharacters,
  getCharacterById,
  searchCharacters,
  getEpisodesByIds,
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
  async (name: string) => {
    const response = await searchCharacters(name);
    return response.data.results;
  },
);
