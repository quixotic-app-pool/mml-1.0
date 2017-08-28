import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class ForumScreen extends React.Component {
    render(){
      return(
        <View style={{height: 600, backgroundColor: 'red'}}>
          <Text>forum</Text>
        </View>
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
