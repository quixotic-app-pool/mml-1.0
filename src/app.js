import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './homePage/homePage';
import ForumScreen from './forumSection/forumPage';
import CircleScreen from './friendsCircleSection/circlePage';
import MeScreen from './me/mePage';
import { TabNavigator, StackNavigator } from 'react-navigation';

export default class DefaultScreen extends Component {

  componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }


  render() {
    return (
      <HomeScreen></HomeScreen>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  首页: { screen: DefaultScreen },
  妈妈经: { screen: ForumScreen },
  朋友圈: { screen: CircleScreen },
  我的: { screen: MeScreen }
});

const mmlApp = StackNavigator({
  Home: { screen: MainScreenNavigator }
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

AppRegistry.registerComponent('mml', () => mmlApp);
