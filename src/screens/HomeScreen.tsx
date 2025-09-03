import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { PokemonListResponse, PokemonWithImage } from '../types';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { getIdFromUrl, officialArtwork } from '../utils';

export default function HomeScreen() {
  // const navigation = useNavigation();

  const { bottom } = useSafeAreaInsets();

  const [pokemons, setPokemons] = useState<PokemonWithImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<PokemonListResponse>(
          'https://pokeapi.co/api/v2/pokemon',
        );
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

  function renderItem({ item }: { item: PokemonWithImage }) {
    return (
      <View style={styles.listItem}>
        <Image
          source={{ uri: item.image }}
          resizeMode="contain"
          style={{ flex: 1 }}
        />
        <Text style={styles.listItemText}>{item.name}</Text>
      </View>
    );
  }

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
      <FlatList
        contentContainerStyle={[
          styles.listContentContainer,
          { paddingBottom: bottom },
        ]}
        columnWrapperStyle={styles.listColumnWrapper}
        numColumns={2}
        data={pokemons}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listColumnWrapper: { gap: 16 },
  listContentContainer: {
    padding: 16,
    gap: 26,
  },
  listItem: {
    flex: 1,
    height: 250,
    borderRadius: 20,
    backgroundColor: '#B7E4C7',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});
