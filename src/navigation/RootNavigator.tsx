import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: { options: { headerShown: false }, screen: HomeScreen },
    PokemonDetails: PokemonDetailsScreen,
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
