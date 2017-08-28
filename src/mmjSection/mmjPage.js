import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ForumScreen from '../forumSection/forumPage';
import EncyclopediaScreen from '../encyclopediaSection/encyclopediaPage';
import SearchContainer from '../searchPage/searchContainer';
import PTRView from 'react-native-pull-to-refresh';

export default class MmjingScreen extends React.Component {

    _refresh() {
     return new Promise((resolve) => {
       setTimeout(()=>{resolve()}, 1000)
     });
   }

    render(){
        return (
          <PTRView onRefresh={this._refresh} >
            <View>
                <SearchContainer></SearchContainer>
                <ScrollableTabView
                  style={{marginTop: 20, }}
                  initialPage={0}
                  renderTabBar={() => <ScrollableTabBar />}
                >
                    <ForumScreen tabLabel="Forum" />
                    <EncyclopediaScreen tabLabel="Encyclopedia" />
                </ScrollableTabView>
            </View>
           </PTRView>
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
