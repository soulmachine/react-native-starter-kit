This repo shows how to build a react native starter kit step by step.

All starter kits in this tutorial use ES6 by default.

Table of Contents
-----------------
1. [Step1: Create an Empty Project](#1-step1-create-an-empty-project)
1. [Step2: Step1 + MobX](#2-step2-step1--mobx)


# 1 Step1: Create an Empty Project

First install all dependencies according to the official document, [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)

Let's create an empty project,

    react-native init Step1


Then run it in the iOS simulator,

    cd Step1
    react-native run-ios


# 2 Step2: Step1 + MobX

In this section we're going to build the classical `Counter` component using MobX.

Install MobX,

    npm install --save mobx mobx-react

We need to install the `babel-plugin-transform-decorators-legacy` Babel plugin to use ES7 decorator,

    npm install --save-dev babel-plugin-transform-decorators-legacy

Don't forget to enable it in `.babelrc`,

```json
{
  "presets": ["react-native"],
  "plugins": ["transform-decorators-legacy"]
}
```

In the root directory, create a folder named `app`. In `app`, create a folder named `store`. In `store`, create a file named `counter.js`,

```javascript
// @flow
import {observable, action, useStrict} from 'mobx'
useStrict(true)

class CounterStore {
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

export default new CounterStore();
```

Create a component, `app/components/Counter.js`,

```jsx
// @flow
import { observer } from 'mobx-react/native';

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

function Counter(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mobx Counter</Text>
      <TouchableHighlight onPress={() => props.store.increment()}>
        <Text style={styles.text}>|   +   | </Text>
      </TouchableHighlight>

      <Text style={styles.text}>Clicked: {props.store.counter} times</Text>

      <TouchableHighlight onPress={() => props.store.decrement()}>
        <Text style={styles.text}>|   -   | </Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => props.store.incrementAsync()}>
        <Text style={styles.text}>|   + Async   | </Text>
      </TouchableHighlight>
    </View>
  );
}
Counter.propTypes = {
  store: PropTypes.object.isRequired
};

export default observer(Counter);
```

Change the content of `index.ios.js` and `index.android.js` to the following:

```jsx
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
```

References:

* [React Native + Mobx List App - Github](https://github.com/dabit3/react-native-mobx-list-app)
* [React Native with MobX — Getting Started](https://medium.com/react-native-training/react-native-with-mobx-getting-started-ba7e18d8ff44#.hkfdy2fgl)
* [mobx-react-native-counter](https://github.com/bartonhammond/mobx-react-native-counter)
