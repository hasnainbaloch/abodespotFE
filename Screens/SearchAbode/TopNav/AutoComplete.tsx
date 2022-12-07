import React, {useEffect, useRef} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GooglePlacesAutocompleteRef} from 'react-native-google-places-autocomplete';

const AutoCompleteInput = () => {
  const ref = useRef<any>();

  // useEffect(() => {
  //   ref.current?.setAddressText('');
  // }, []);

  return (
    <GooglePlacesAutocomplete
      ref={ref}
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyD2SZ1i_nM8v6Qqlbb6TKjO6sY_Di4LpqI',
        language: 'en',
      }}
    />
  );
};

export default AutoCompleteInput;
