import React, { Component } from 'react';
import {
  Text
} from 'react-native';

export default class SecondTabScreen extends Component {
  static navigatorStyle: {
    drawUnderTabBar: true,
    navBarBackgroundColor: '#4dbce9',
    navBarTextColor: '#ffff00',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light'
  };
  render() {
    return <Text>Second Tab Screen</Text>
  }
}
