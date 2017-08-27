import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import PTRView from 'react-native-pull-to-refresh';
import CarouselExample from './myCarousel';
import BtnGroup from './btnGroup';
import CardView from './cardView';
import FitImage from 'react-native-fit-image';

export default class HomeScreen extends Component {

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
    const btnsArray = ['btn1', 'btn1', 'btn3','btn4', 'btn5', 'btn6'];
    const cards = [ {'key':'card1'}, {'key':'card2'},{'key':'card3'},{'key':'card4'},{'key':'card5'} ]
    return (
       <PTRView onRefresh={this._refresh} >
         <View>
         <CarouselExample />
         <BtnGroup btns = { btnsArray }/>
         <View style= { styles.cardContainer}>
           <CardView
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}>
              <FitImage
                resizeMode="contain"
                source = {require('../dummyData/img/timg.png')}
                style = { styles.fitImage }
                />
              <Text>
                  "list item 0"
              </Text>
            </CardView>
            <CardView
               cardElevation={2}
               cardMaxElevation={2}
               cornerRadius={5}>
               <FitImage
                 resizeMode="contain"
                 source = {require('../dummyData/img/timg.png')}
                 style = { styles.fitImage }
                 />
               <Text>
                    "list item 1"
               </Text>
             </CardView>
             <CardView
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}>
                <FitImage
                  resizeMode="contain"
                  source = {require('../dummyData/img/timg.png')}
                  style = { styles.fitImage }
                  />
                <Text>
                      "list item 2"
                </Text>
              </CardView>
         </View>
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
  },
  cardContainer : {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  },
  fitImage: {
     borderRadius: 20,
     position: 'relative',
     left: -100,
  }

})
