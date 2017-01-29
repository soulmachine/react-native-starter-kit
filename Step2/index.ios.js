// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Counter from './app/components/Counter';
import rootStore from './app/store/index';
import { Provider } from 'mobx-react/native';

// provider should receive a single child
// <Provider {...stores}> === <Provider store1={stores.store1} store2={stores.store2}>
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
