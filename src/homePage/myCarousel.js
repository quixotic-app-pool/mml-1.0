import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class CarouselExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    // this.setState({ size: { width: layout.width, height: layout.height } });
    this.setState({ size: { width: 200, height: 200 } });
  }

  render() {
    return (
      <View style={styles.container} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}
        >
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}>
          <Image source={require('../dummyData/img/timg.png')} />
          <Text>1</Text>
          </View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}>
          <Image source={require('../dummyData/img/timg.png')} />
          <Text>2</Text>
          </View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}>
          <Image source={require('../dummyData/img/timg.png')} />
          <Text>3</Text>
          </View>
        </Carousel>
      </View>
    );
  }
}


const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: width,
    height: 300,
    borderColor: 'blue',
    borderWidth: 1,
  }
})
