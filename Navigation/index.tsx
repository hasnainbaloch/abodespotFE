import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, Image, View, StyleSheet, Text } from 'react-native';
import Landing from '../Screens/Landing';

const Stack = createNativeStackNavigator();

function AppScreenNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Landing} options={{ title: 'Home' }}/>
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
