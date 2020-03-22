/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MainScreen from './screens/MainScreen';
const Tab = createBottomTabNavigator();
const App: () => React$Node = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={WelcomeScreen} />
          <Tab.Screen name="Auth" component={AuthScreen} />
          <Tab.Screen name="Main" component={MainScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;
