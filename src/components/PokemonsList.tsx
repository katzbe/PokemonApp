import { FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonWithImage } from '../types';
import PokemonsListItem from './PokemonsListItem';

type PokemonsListProps = {
  pokemons: PokemonWithImage[];
  onEndReached?: () => void;
};

export default function PokemonsList({
  pokemons,
  onEndReached,
}: PokemonsListProps) {
  const { bottom } = useSafeAreaInsets();

  return (
    <FlatList
      contentContainerStyle={[
        styles.contentContainer,
        { paddingBottom: bottom },
      ]}
      style={styles.container}
      columnWrapperStyle={styles.columnWrapper}
      numColumns={2}
      data={pokemons}
      keyExtractor={item => item.name}
      renderItem={({ item }) => <PokemonsListItem pokemon={item} />}
      showsVerticalScrollIndicator={false}
      onEndReached={onEndReached}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  columnWrapper: { gap: 16 },
  contentContainer: {
    padding: 16,
    gap: 26,
    alignItems: 'center',
  },
});
