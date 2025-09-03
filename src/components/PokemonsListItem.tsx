import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getCapitalizedString, padNumber } from '../utils';
import { PokemonWithImage } from '../types';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 10;
const CARD_WIDTH = width / 2 - CARD_MARGIN * 3;

type PokemonsListItemProps = {
  pokemon: PokemonWithImage;
};

export default function PokemonsListItem({ pokemon }: PokemonsListItemProps) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('PokemonDetails', { id: pokemon.id })}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: pokemon.image }}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{getCapitalizedString(pokemon.name)}</Text>
        <Text style={styles.text}>{padNumber(pokemon.id)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: CARD_WIDTH,
    borderRadius: 20,
    backgroundColor: '#B2D9C9',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  image: { flex: 1 },
  textContainer: { flex: 0.3 },
  text: {
    fontSize: 18,
  },
});
