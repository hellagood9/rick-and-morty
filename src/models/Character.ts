interface Location {
  name: string;
  url: string;
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string[];
  characters: string[];
  url: string;
  created: string;
}

interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type {Character, Location, Episode};
