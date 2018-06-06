/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { MainScreen, DetailScreen} from './src/screen';
import {
  createStackNavigator,
} from 'react-navigation';

const RootStack = createStackNavigator(
  {
    MainScreen,
    DetailScreen,
  },
  {
    initialRouteName: 'MainScreen',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
