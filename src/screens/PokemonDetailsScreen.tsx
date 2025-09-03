import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { StaticScreenProps } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { getCapitalizedString, padNumber } from '../utils';
import Header from '../components/Header';
import { API_URL } from '../constants/api';

type PokemonDetailsScreenProps = StaticScreenProps<{
  id: number;
}>;

export default function PokemonDetailsScreen({
  route,
}: PokemonDetailsScreenProps) {
  const { id } = route.params;

  const [pokemonDetails, setPokemonDetails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}`);
        setPokemonDetails(data);
      } catch (err) {
        __DEV__ && console.error(`Error with fetching pokemons... ${err}`);
        // setError(true);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        title={getCapitalizedString(pokemonDetails.name)}
        subtitle={padNumber(id)}
      />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.imageCardContainer}>
          <Image
            source={{ uri: pokemonDetails.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  contentContainerStyle: { flexGrow: 1 },
  imageCardContainer: {
    height: '60%',
    backgroundColor: '#B2D9C9',
    borderRadius: 20,
    padding: 20,
  },
  image: {
    flex: 1,
  },
});
