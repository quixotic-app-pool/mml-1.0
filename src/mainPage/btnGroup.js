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
       <View style = { styles.container}>
       {btns.map((tab, i) => {
                 return (
                    <Button
                      style= { styles.btn}
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

  container: {
    borderColor: 'blue',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 50,
  }

})
