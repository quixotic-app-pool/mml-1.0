import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import PTRView from 'react-native-pull-to-refresh';
import CarouselExample from './myCarousel';
import BtnGroup from './btnGroup'

export default class MainPage extends Component {

  constructor(){
    super();
    this._refresh = this._refresh.bind(this);
  }

  _refresh() {
   return new Promise((resolve) => {
     setTimeout(()=>{resolve()}, 1000)
   });
 }

  render() {
    const btnsArray = ['btn1', 'btn1', 'btn3']
    return (
       <PTRView onRefresh={this._refresh} >
         <View>
         <CarouselExample />
         <BtnGroup btns = { btnsArray }/>
           <Text>
             Lets Pull!
           </Text>
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
