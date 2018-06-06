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
} from 'react-native';

 import { Card } from '../common';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class MainScreen extends Component<Props> {
  static navigationOptions = {
    title: 'ที่จอดรถของคุณ (20 ที่)',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Card onClick={() => this.props.navigation.navigate('DetailScreen')}></Card>
          <Card title="1. อีเกีย บางนา" description="เปิด 06:00 น. ถึง 22:00 น."></Card>
          <Card title="2. Central World" description="เปิด 06:00 น. ถึง 22:00 น."></Card>
          <Card title="3. คอนโด IDEO S115" description="เปิดตลอดเวลา"></Card>
          <Card title="4. อีเกีย บางนา" description="เปิด 06:00 น. ถึง 22:00 น."></Card>
          <Card title="5. Central World" description="เปิด 06:00 น. ถึง 22:00 น."></Card>
          <Card title="6. คอนโด IDEO S115" description="เปิดตลอดเวลา"></Card>
          <Card title="7. อีเกีย บางนา" description="เปิด 06:00 น. ถึง 22:00 น."></Card>
          <Card title="2. Central World" description="เปิด 06:00 น. ถึง 22:00 น."></Card>
          <Card title="3. คอนโด IDEO S115" description="เปิดตลอดเวลา"></Card>
          <Card title="1. อีเกีย บางนา" description="เปิด 06:00 น. ถึง 22:00 น."></Card>
          <Card title="2. Central World" description="เปิด 06:00 น. ถึง 22:00 น."></Card>
          <Card title="3. คอนโด IDEO S115" description="เปิดตลอดเวลา"></Card>
          <Card title="1. อีเกีย บางนา" description="เปิด 06:00 น. ถึง 22:00 น."></Card>
          <Card title="2. Central World" description="เปิด 06:00 น. ถึง 22:00 น."></Card>
          <Card title="3. คอนโด IDEO S115" description="เปิดตลอดเวลา"></Card>
          <Card title="1. อีเกีย บางนา" description="เปิด 06:00 น. ถึง 22:00 น."></Card>
          <Card title="2. Central World" description="เปิด 06:00 น. ถึง 22:00 น."></Card>
          <Card title="3. คอนโด IDEO S115" description="เปิดตลอดเวลา"></Card>
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
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 32,
    color: '#333',
    fontWeight: 'bold',
  },
  content: {
  },
});
