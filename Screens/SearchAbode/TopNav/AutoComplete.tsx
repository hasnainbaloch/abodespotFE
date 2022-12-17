import React, {useCallback, useRef, useState} from 'react';
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
    <GooglePlacesAutocomplete
      styles={{
        textInput: {
          color: `${theme?.colors?.secondary}`,
          fontSize: 16,
          borderRadius: 10,
          paddingLeft: 40,
          paddingRight: 10,
          borderColor: `${theme?.colors?.secondary}`,
          borderWidth: 0.3,
          marginTop: 2,
        },
      }}
      ref={ref}
      placeholder="Search"
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
  );
};

export default AutoCompleteInput;
