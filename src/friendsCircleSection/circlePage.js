import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons';
import DiscoveryScreen from '../discoverySection/discoveryPage';
import ChatScreen from '../chatSection/chatPage';
import ContactScreen from '../contactSection/contactPage';

export default class CircleScreen extends Component {
    render(){
      return (
        <ScrollableTabView
          style={{marginTop: 20, }}
          initialPage={1}
          renderTabBar={() => <ScrollableTabBar />}
        >
            <DiscoveryScreen tabLabel="discovery" />
            <ChatScreen tabLabel="chat" />
            <ContactScreen tabLabel="contact" />
        </ScrollableTabView>
      )
    }
}



const styles = StyleSheet.create({

  container: {
      marginTop: 30,
    },
    icon: {
      width: 300,
      height: 300,
      alignSelf: 'center',
    },

})
