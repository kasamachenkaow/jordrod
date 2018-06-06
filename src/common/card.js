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

export default class Card extends Component {
    render() {
      return (
        <View style={styles.container} onTouchEnd={this.props.onClick}>
            <View style={styles.containerImage}>
                <Image
                    style={styles.image}
                    source={{uri: this.props.imageUrl}}
                />
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
            </View>
        </View>
      );
    }
  };

Card.defaultProps = { title: 'เพิ่มที่จอดรถใหม่', imageUrl: 'https://www.freeiconspng.com/uploads/parking-icon-png-12.png' };

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  containerImage: {
      flex: 1,
      justifyContent: 'center',
      padding: 5,
  },
  image: {
      width: '100%',
      minHeight: 50,
  },
  containerContent: {
      flex: 4,
      paddingHorizontal: 10,
      paddingVertical: 10,
      justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});

