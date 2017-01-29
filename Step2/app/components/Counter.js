// @flow
import { observer, inject } from 'mobx-react/native';
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  }
});

function Counter({ counter }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mobx Counter</Text>
      <TouchableHighlight onPress={() => counter.increment()}>
        <Text style={styles.text}>|   +   | </Text>
      </TouchableHighlight>

      <Text style={styles.text}>Clicked: { counter.counter} times</Text>

      <TouchableHighlight onPress={() => counter.decrement()}>
        <Text style={styles.text}>|   -   | </Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => counter.incrementAsync()}>
        <Text style={styles.text}>|   + Async   | </Text>
      </TouchableHighlight>
    </View>
  );
}
Counter.propTypes = {
  counter: PropTypes.object.isRequired
};

export default inject("counter")(observer(Counter));
