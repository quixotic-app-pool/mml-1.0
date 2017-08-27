import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainPage from './mainPage/mainPage'

export default class mml extends Component {

  componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }


  render() {
    return (
      <MainPage></MainPage>
    );
  }
}


AppRegistry.registerComponent('mml', () => mml);
