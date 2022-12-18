import {View, Text} from 'react-native';
import React from 'react';
import TopNav from './TopNav';
import GoogleMap from './GoogleMap';

const Search = () => {
  return (
    <View style={{flex: 1}}>
      <GoogleMap />
      <TopNav/>
    </View>
  );
};

export default Search;
