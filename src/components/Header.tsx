import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type HeaderProps = {
  title: string;
  subtitle: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backIconPressable}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={26} />
      </Pressable>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    justifyContent: 'center',
  },
  backIconPressable: {
    position: 'absolute',
    left: 0,
  },
});
