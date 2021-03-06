export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
}

export interface ListOfSeasons {
  [key:string]: Array<Episode>
}

export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    [key:string]: string
  },
  location: {
    [key:string]: string
  },
  image: string,
  episode: Array<string>,
}

export interface Location {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: Array<string>,
}