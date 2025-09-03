export const getIdFromUrl = (url: string) =>
  Number(url.split('/').filter(Boolean).pop());

export const officialArtwork = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export const getCapitalizedString = (str: string) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

export const padNumber = (num: string | number, length = 3): string =>
  String(num).padStart(length, '0');
