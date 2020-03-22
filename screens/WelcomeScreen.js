import React, {Component} from 'react';
import {View, Text, SafeAreaView, } from 'react-native';
import Slides from '../components/Slides';
const SLIDE_DATA = [
  {
    text: 'Slide 1 Slide 1 Slide 1 Slide 1 Slide 1 Slide 1 Slide 1 Slide 1 Slide 1 ',
    color: "red"
  },
  {
    text: 'Slide 2 Slide 2 Slide 2 Slide 2 ',
    color: "green"
  },
  {
    text: 'Slide 3 Slide 3 Slide 3',
    color: "blue"
  },
];
class WelcomeScreen extends Component {
  render() {
    return (
        <Slides data={SLIDE_DATA} />
    );
  }
}

export default WelcomeScreen;
