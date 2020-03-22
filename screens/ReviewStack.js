import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from './SettingsScreen';
import ReviewScreen from './ReviewScreen';

const Stack = createStackNavigator();

class ReviewStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Settings"
          options={({navigation}) => {
            return {
              title: 'Settings',
              headerRight: () => {
                return (
                  <Button
                    title="Deck"
                    color="#000000"
                    onPress={() => {
                      navigation.navigate('Deck');
                    }}
                    fontSize="15"
                    backgroundColor="#ffffff"
                  />
                );
              },
            };
          }}
          component={SettingsScreen}
        />
        <Stack.Screen
          options={({navigation: {navigate}}) => {
            return {
              title: 'Deck',
              headerLeft: () => {
                return (
                  <Button
                    title="Settings"
                    color="#000000"
                    onPress={() => {
                      navigate('Settings');
                    }}
                    fontSize="15"
                    backgroundColor="#ffffff"
                  />
                );
              },
            };
          }}
          name="Deck"
          component={ReviewScreen}
        />
      </Stack.Navigator>
    );
  }
}

export default ReviewStack;
