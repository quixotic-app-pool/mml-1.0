import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import  DiscoveryItem from './discoveryItem';
import PTRView from 'react-native-pull-to-refresh';


export default class DiscoveryScreen extends Component {

  _refresh() {
   return new Promise((resolve) => {
     setTimeout(()=>{resolve()}, 1000)
   });
 }


    render(){
      const data = [
        {
          _id: Math.round(Math.random() * 1000000),
          textBody: '今天的天气真明媚！',
          imageBody: '../dummyData/img/timg.png',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 1,
            name: '王学姣',
            avatar: '../dummyData/img/user.png',}
        },
        {
          _id: Math.round(Math.random() * 1000000),
          textBody: 'This is a wonderful day!',
          imageBody: '../dummyData/img/timg.png',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: '王学姣',
            avatar: '../dummyData/img/user.png',}
        },
        {
          _id: Math.round(Math.random() * 1000000),
          textBody: 'nothing but boring feeling~ aha',
          imageBody: '../dummyData/img/timg.png',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 3,
            name: '王学姣',
            avatar: '../dummyData/img/user.png',}
        }]

      return(
         <PTRView onRefresh={this._refresh} >
            <View>
            {data.map((item, i) => {
                      return (
                         <DiscoveryItem
                           data = { item }
                         />
                      )
                    })
           }
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
