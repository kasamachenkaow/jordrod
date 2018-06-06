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
  Button,
  TimePickerAndroid,
} from 'react-native';

export default class TimePicker extends Component {
    constructor(props) {
        super(props);

        const now = new Date();

        this.state = {
            hour: now.getHours(),
            minute: now.getMinutes(),
        };

        this.openTimePicker = this.openTimePicker.bind(this);
        this.composeTimeString = this.composeTimeString.bind(this);
    }

    async openTimePicker() {
        try {
            const {action, hour, minute} = await TimePickerAndroid.open({
                hour: this.state.hour,
                minute: this.state.minute,
                is24Hour: true,
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                this.setState(() => {
                    return {
                        hour,
                        minute,
                    };
                });
            }
        } catch ({code, message}) {
          console.warn('Cannot open time picker', message);
        }
      }

    composeTimeString(hour, minute) {
        if(!hour || !minute) return '00:00';

        return `${('0'+hour.toString()).slice(-2)}:${('0'+minute.toString()).slice(-2)}`;
        // return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
    }

    render() {
      const time = this.composeTimeString(this.state.hour, this.state.minute);
      return (
        <View style={styles.container}>
            <Text style={styles.prefix}>{this.props.prefix}</Text>
            <TextInput style={styles.input} value={time}></TextInput>
            <Text style={styles.suffix}>{this.props.suffix}</Text>
            <View style={styles.button}>
                <Button onPress={()=>this.openTimePicker()} title={'@'}></Button>
            </View>
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
    flex: 2,
    width: '100%',
    textAlign: 'right',
  },
  suffix: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    flex: 0.5,
    width: '100%',
  },
  input: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    flex: 2,
    width: '100%',
    textAlign: 'center',
  },
  button: {
    flex: 1.5,
    alignSelf: 'stretch'
  },
});

