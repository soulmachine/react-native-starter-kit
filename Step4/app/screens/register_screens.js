import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import CounterScreen from './CounterScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Home', () => FirstTabScreen);
  Navigation.registerComponent('Me', () => SecondTabScreen);
  Navigation.registerComponent('Counter', () => CounterScreen);
}
