// @flow
import React, { Component } from 'react';
import Counter from '../components/Counter';
import rootStore from '../store/index';
import { Provider } from 'mobx-react/native';

// provider should receive a single child
// <Provider {...stores}> === <Provider store1={stores.store1} store2={stores.store2}>
export default class CounterScreen extends Component {
  render() {
    return (
      <Provider {...rootStore}>
        <Counter />
      </Provider>
    );
  }
}
