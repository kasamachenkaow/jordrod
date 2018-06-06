/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';

export default class Input extends Component {
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.prefix}>{this.props.prefix}</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.suffix}>{this.props.suffix}</Text>
        </View>
      );
    }
  };

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prefix: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    flex: 1,
    width: '100%',
    textAlign: 'right',
  },
  suffix: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    flex: 1,
    width: '100%',
  },
  input: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    flex: 1,
    width: '100%',
  }
});

