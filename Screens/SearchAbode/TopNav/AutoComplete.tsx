import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import {Setting5, SearchNormal1} from 'iconsax-react-native';
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
        textInputProps={{
          clearButtonMode: 'never',
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

      {/* search icon */}
      <View style={styles.searchWrap}>
        <SearchNormal1 color={theme.colors.secondary} size={20} />
      </View>

      {/* filter actionable icon */}
      <TouchableOpacity
        onPress={() => null} // onPress={() => navigation('Root', {screen: 'Filter'})}
        activeOpacity={0.2}
        style={styles.filterWrap}>
        <Setting5 color={theme.colors.secondary} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSearch: {
    position: 'relative',
  },
  searchWrap: {
    position: 'absolute',
    top: 15,
    left: 10,
  },
  filterWrap: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
});

export default AutoCompleteInput;
