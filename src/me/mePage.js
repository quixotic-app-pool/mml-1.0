import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    ScrollView
} from 'react-native';
import SettingsList from 'react-native-settings-list';
import Interactable from 'react-native-interactable';

export default class MeScreen extends Component {

      constructor() {
      super();
      this._deltaY = new Animated.Value(0);
    }

    render(){
      return(

        <ScrollView>
        <View style={styles.container}>

          <View style={{backgroundColor: 'red', height: 250, alignItems: 'center'}}>
            <Animated.View style={{
              transform: [
                {
                  translateY: this._deltaY.interpolate({
                    inputRange: [-150, -150, 0, 0],
                    outputRange: [-58, -58, 0, 0]
                  })
                },
                {
                  scale: this._deltaY.interpolate({
                    inputRange: [-150, -150, 0, 0],
                    outputRange: [0.35, 0.35, 1, 1]
                  })
                }
              ]
            }}>
              <View style={{width: 150, height: 150, backgroundColor: 'blue', borderRadius: 75, marginTop: 50}} />
            </Animated.View>
          </View>

          <Interactable.View
            verticalOnly={true}
            snapPoints={[{y: 0}, {y: -150}]}
            boundaries={{top: -150}}
            animatedValueY={this._deltaY}>
            <SettingView></SettingView>
          </Interactable.View>

        </View>
        </ScrollView>

      )
    }
}

class SettingView extends React.Component {
  constructor(){
  super();
  this.onValueChange = this.onValueChange.bind(this);
  this.state = {switchValue: false};
}
render() {
  return (
    <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item
            icon={
                <Image style={styles.imageStyle} source={require('../dummyData/img/airplane.png')}/>
            }
            hasSwitch={true}
            switchState={this.state.switchValue}
            switchOnValueChange={this.onValueChange}
            hasNavArrow={false}
            title='Airplane Mode'
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('../dummyData/img/airplane.png')}/>}
            title='Wi-Fi'
            titleInfo='Bill Wi The Science Fi'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route to Wifi Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('../dummyData/img/airplane.png')}/>}
            title='Blutooth'
            titleInfo='Off'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route to Blutooth Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('../dummyData/img/airplane.png')}/>}
            title='Cellular'
            onPress={() => Alert.alert('Route To Cellular Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('../dummyData/img/airplane.png')}/>}
            title='Personal Hotspot'
            titleInfo='Off'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route To Hotspot Page')}
          />
          <SettingsList.Header headerStyle={{marginTop:15}}/>
        </SettingsList>
  );
}
  onValueChange(value){
    this.setState({switchValue: value});
  }
}


const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'white',
}
})
