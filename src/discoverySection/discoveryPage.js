import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class DiscoveryScreen extends Component {
    render(){
      return(
        <View>
          <Text>discovery</Text>
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
