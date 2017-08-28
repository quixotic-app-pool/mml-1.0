import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button
} from 'react-native';


export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = { text: 'Useless Placeholder' };
  }

    render() {
      return (
        <View>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <Button title="Sign In"/>
        </View>
      )
    }
}
