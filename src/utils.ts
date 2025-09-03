export const getIdFromUrl = (url: string) =>
  Number(url.split('/').filter(Boolean).pop());

export const officialArtwork = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
