import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform, Image, View, StyleSheet, Text} from 'react-native';
import BottomTabBar from './BottomTabNavigation';
import Profile from '../Screens/Profile';

const Stack = createNativeStackNavigator();

function AppScreenNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen
          name="Root"
          component={BottomTabBar}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
// 	header: {
// 		borderBottomWidth: 1,
// 		borderBottomColor: '#343434',
// 	},
// });

export default AppScreenNavigation;
