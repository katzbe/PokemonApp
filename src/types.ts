export type PokemonEntry = {
  name: string;
  url: string;
};

export type PokemonWithImage = PokemonEntry & { id: number; image: string };

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonEntry[];
};
