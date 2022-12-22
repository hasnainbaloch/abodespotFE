import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title={`Go to BACK`} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
