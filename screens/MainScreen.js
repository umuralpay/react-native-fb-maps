import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from "./MapScreen";
import DeckScreen from "./DeckScreen";
import ReviewStack from './ReviewStack';

const Tab = createBottomTabNavigator();

class MainScreen extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Deck" component={DeckScreen} />
        <Tab.Screen name="Review" component={ReviewStack} />
      </Tab.Navigator>
    );
  }
}

export default MainScreen;
