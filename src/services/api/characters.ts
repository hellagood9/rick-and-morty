import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getAllCharacters = () => axios.get(`${BASE_URL}/character`);

export const getCharacterById = (id: number) =>
  axios.get(`${BASE_URL}/character/${id}`);

export const searchCharacters = (name: string) =>
  axios.get(`${BASE_URL}/character/?name=${name}`);

export const getEpisodesByIds = (ids: string[]) => {
  const url =
    ids.length === 1
      ? `${BASE_URL}/episode/${ids[0]}`
      : `${BASE_URL}/episode/${ids.join(',')}`;

  return axios.get(url);
};
