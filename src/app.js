import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default class mml extends Component {

  componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }

    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to 妈妈乐团队!
        </Text>
        <Text style={styles.instructions}>
          我们即将拉开我们的第一个项目《妈妈乐》
          的序幕，一起加油！
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mml', () => mml);
