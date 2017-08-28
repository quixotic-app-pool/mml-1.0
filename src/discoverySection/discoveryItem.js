import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class DiscoveryItem extends Component {
    render(){

      const { data } = this.props;
      return(
        <View>
          <View>
            <Image source={require('../dummyData/img/user.png')} />
          </View>
          <View>
            <Text>{ data.user.name }</Text>
            <Text>{ data.textBody }</Text>
            <Image source={require('../dummyData/img/timg.png')} />
          </View>
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
