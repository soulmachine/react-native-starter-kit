// @flow
import {Navigation} from 'react-native-navigation';

// screen related book keeping
import {registerScreens} from './app/screens/register_screens';
registerScreens();

const tabs = [
  {
    label: 'Home',
    screen: 'Home', // this is a registered name for a screen
    icon: require('./images/home.png'),
    selectedIcon: require('./images/home_selected.png'),
    title: 'Home'
  },
  {
    label: 'Me',
    screen: 'Me', // this is a registered name for a screen
    icon: require('./images/profile.png'),
    selectedIcon: require('./images/profile_selected.png'),
    title: 'Me',
    navigatorStyle: {
      tabBarBackgroundColor: '#4dbce9',
    }
  }
];

// this will start our app
Navigation.startTabBasedApp({
  tabs: tabs,
  appStyle: {
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#63d7cc'
  }
});
