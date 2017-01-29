// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Counter from './app/components/Counter';
import rootStore from './app/store/index';
import { Provider } from 'mobx-react/native';

export default class Step2 extends Component {
  render() {
    return (
      <Provider {...rootStore}>
        <Counter />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Step2', () => Step2);
