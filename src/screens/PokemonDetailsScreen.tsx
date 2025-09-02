import { StyleSheet, Text, View } from 'react-native';

export default function PokemonDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Pokemon Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
