import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/RootNavigator';
import { DefaultTheme } from '@react-navigation/native';
import { colors } from './src/constants/colors';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation theme={MyTheme} />
    </SafeAreaProvider>
  );
}
