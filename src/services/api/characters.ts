import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = () => axios.get(BASE_URL);
export const getCharacterById = (id: number) => axios.get(`${BASE_URL}/${id}`);
export const searchCharacters = (name: string) =>
  axios.get(`${BASE_URL}/?name=${name}`);
