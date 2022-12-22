import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const AllFilters = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>AllFilters</Text>
      <Button onPress={() => navigation.goBack()} title="Go BACK"/ >
    </View>
  );
};

export default AllFilters;

const styles = StyleSheet.create({});
