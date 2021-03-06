import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MmjingScreen from './mmjSection/mmjPage'
import HomeScreen from './homePage/homePage';
import ForumScreen from './forumSection/forumPage';
import CircleScreen from './friendsCircleSection/circlePage';
import MeScreen from './me/mePage';
import LoginScreen from './signInUpSection/signPage';
import ModalScreen from './modal/modalPage';
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
  妈妈经: { screen: MmjingScreen },
  朋友圈: { screen: CircleScreen },
  我的: { screen: MeScreen }
});

const mmlApp = StackNavigator({
  // 登录: { screen: LoginScreen },
  // Modal: { screen: ModalScreen },
  Home: { screen: MainScreenNavigator }
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

AppRegistry.registerComponent('mml', () => mmlApp);
