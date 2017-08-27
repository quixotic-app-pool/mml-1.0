import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';


const { width, height } = Dimensions.get('window');

export default class CardView extends Component {
  render() {
    const { cardElevation, cornerRadius } = this.props;
    if(cardElevation > 0) {
      return(
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=>Alert.alert('card')}
                        >
        <View style={[{
          width: width - 10,
          height: 50,
          marginBottom: 1,
          shadowOffset: {
            width: 0,
            height: cardElevation
          },
          shadowRadius: cardElevation,
          shadowOpacity: 0.24,
          borderRadius: cornerRadius,
        }, this.props.style]}>
          {this.props.children}
        </View>
        </TouchableOpacity>
      );
    } else {
      return(
        <View style={[{
          borderRadius: cornerRadius,
            width: width - 10,
            height: 30,
        }, this.props.style]}>
          {this.props.children}
        </View>
      );
    }

  }
}
