import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Navigation} from 'react-native-navigation';

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  }
});

export default class FirstTabScreen extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: '#4dbce9',
    navBarTextColor: '#ffff00',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    tabBarBackgroundColor: '#4dbce9',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ffff00'
  };
  onPushPress() {
    this.props.navigator.push({
      title: "Counter",
      screen: "Counter"
    });
  }

  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <TouchableOpacity onPress={ this.onPushPress.bind(this) }>
          <Text style={styles.button}>Counter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
