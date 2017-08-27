import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    View,
    Alert
} from 'react-native';

export default class BtnGroup extends Component {

  render() {
    const { btns } = this.props;
    return (
       <View>
       {btns.map((tab, i) => {
                 return (
                    <Button
                      title = {tab}
                      onPress = {()=> Alert.alert('press me')}
                    />
                 )
               })
      }
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
