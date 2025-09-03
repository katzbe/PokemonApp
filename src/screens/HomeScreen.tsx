import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PokemonListResponse, PokemonWithImage } from '../types';
import { getIdFromUrl, officialArtwork } from '../utils';
import PokemonsList from '../components/PokemonsList';
import { API_URL } from '../constants/api';

export default function HomeScreen() {
  const [pokemons, setPokemons] = useState<PokemonWithImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<PokemonListResponse>(API_URL);
        const mapped = response.data.results.map(p => {
          const id = getIdFromUrl(p.url);
          return { ...p, id, image: officialArtwork(id) };
        });
        setPokemons(mapped);
        setIsLoading(false);
      } catch (err) {
        __DEV__ && console.error(`Error with fetching pokemons... ${err}`);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Oops something went wrong...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <PokemonsList pokemons={pokemons} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
