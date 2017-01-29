// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Counter from './app/components/Counter';
import counterStore from './app/store/counter';

export default class Step2 extends Component {
  render() {
    return (
      <Counter store={counterStore}/>
    );
  }
}

AppRegistry.registerComponent('Step2', () => Step2);
