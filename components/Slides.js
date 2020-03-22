import React, {Component} from 'react';
import {View, Text, ScrollView, Dimensions,StyleSheet} from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
class Slides extends Component {
  renderSlides() {
    return this.props.data.map(item => {
      return (
        <View key={item.text} style={[styles.slide, {backgroundColor: item.color}]}>
          <Text style={styles.slideText}>{item.text}</Text>
        </View>
      );
    });
  }
  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{flex: 1}}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
  },
});

export default Slides;
