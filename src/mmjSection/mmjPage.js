import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ForumScreen from '../forumSection/forumPage';
import EncyclopediaScreen from '../encyclopediaSection/encyclopediaPage';

export default class MmjingScreen extends React.Component {
    render(){
        return (
        <ScrollableTabView
          style={{marginTop: 20, }}
          initialPage={2}
          renderTabBar={() => <ScrollableTabBar />}
        >
            <ForumScreen tabLabel="Forum" />
            <EncyclopediaScreen tabLabel="Encyclopedia" />
            <ForumScreen tabLabel="Forum" />
            <EncyclopediaScreen tabLabel="Encyclopedia" />
        </ScrollableTabView>
      )
    }
}



const styles = StyleSheet.create({

  searchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }

})
