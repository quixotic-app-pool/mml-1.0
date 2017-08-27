import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import SettingsList from 'react-native-settings-list';

export default class MeScreen extends Component {
    render(){
      return(
        <View>
          <Text>me</Text>
            <SettingView></SettingView>
        </View>
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
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('../dummyData/img/airplane.png')}/>}
            title='Notifications'
            onPress={() => Alert.alert('Route To Notifications Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('../dummyData/img/airplane.png')}/>}
            title='Control Center'
            onPress={() => Alert.alert('Route To Control Center Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('../dummyData/img/airplane.png')}/>}
            title='Do Not Disturb'
            onPress={() => Alert.alert('Route To Do Not Disturb Page')}
          />
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('../dummyData/img/airplane.png')}/>}
            title='General'
            onPress={() => Alert.alert('Route To General Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={require('../dummyData/img/airplane.png')}/>}
            title='Display & Brightness'
            onPress={() => Alert.alert('Route To Display Page')}
          />
        </SettingsList>
  );
}
  onValueChange(value){
    this.setState({switchValue: value});
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
