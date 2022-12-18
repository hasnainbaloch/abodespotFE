import React, {useCallback, useRef, useState} from 'react';
import { StyleSheet, View } from 'react-native';


import { SearchNormal1 } from 'iconsax-react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GooglePlacesAutocompleteRef} from 'react-native-google-places-autocomplete';

import {theme} from '../../../theme';

const AutoCompleteInput = () => {
  const [location, setLocation] = useState<Location>({lat: '', lng: ''});
  const ref = useRef<GooglePlacesAutocompleteRef>(null);

  interface Location {
    lat: string;
    lng: string;
  }

  const handleAutoComplete = useCallback((loc: Location) => {
    setLocation(loc);
  }, []);

  return (
    <View style={styles.containerSearch}>
      <GooglePlacesAutocomplete
        styles={{
          textInput: {
            color: `${theme?.colors?.secondary}`,
            fontSize: 16,
            borderRadius: 4,
            paddingLeft: 40,
            paddingRight: 10,
            borderColor: `${theme?.colors?.secondary}`,
            borderWidth: 0.3,
            marginTop: 2,
            shadowColor: `${theme?.colors?.secondary}`,
            elevation: 8,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowRadius: 4,
            shadowOpacity: 0.4,
          },
        }}
        ref={ref}
        placeholder="Search location"
        GooglePlacesDetailsQuery={{fields: 'geometry'}}
        onPress={(data: any, details: any = null) => {
          handleAutoComplete(details?.geometry?.location);
        }}
        fetchDetails={true}
        query={{
          key: 'AIzaSyD2SZ1i_nM8v6Qqlbb6TKjO6sY_Di4LpqI',
          language: 'en',
        }}
        enablePoweredByContainer={false}
        minLength={2}
      />
      <View style={styles.searchWrap}>
      <SearchNormal1 color={theme.colors.secondary} size={20}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSearch: {
    position: 'relative'
  },
  searchWrap:{
    position: 'absolute',
    top: 15,
    left: 10
  }
})

export default AutoCompleteInput;
