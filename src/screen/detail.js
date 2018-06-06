/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Button,
} from 'react-native';

 import { Input, TimePicker } from '../common';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class DetailScreen extends Component<Props> {
    static navigationOptions = {
        title: 'ข้อมูล',
    };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
            <TimePicker prefix="เวลาเข้า" suffix="น." />
            <TimePicker prefix="เวลาออก" suffix="น." />
            <Input prefix="ฟรี" suffix="ชม." />
            <Input prefix="หลังจากนั้น" suffix="บาท/ชม." />
            <Input prefix="ค่าจอด" suffix="บาท" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  content: {
      display: 'flex',
  },
});
