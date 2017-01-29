// @flow
import {observable, action, useStrict} from 'mobx'
useStrict(true)

export default class CounterStore {
  @observable counter = 0;

  @action increment() {
    this.counter++;
  }

  @action decrement() {
    this.counter--;
  }

  @action incrementAsync() {
    setTimeout(() => {
      this.increment();
    }, 1000);
  }
}
