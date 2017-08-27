import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class EncyclopediaScreen extends React.Component {
    render(){
      return(
        <View>
          <Text>Encyclopedia</Text>
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
