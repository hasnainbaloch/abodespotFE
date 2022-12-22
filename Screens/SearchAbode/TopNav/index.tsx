import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from 'react-native-paper';
import {Gallery, Map1, User} from 'iconsax-react-native';
import AutoCompleteInput from './AutoComplete';
import {TNavigation} from './Types';
import {useNavigation} from '@react-navigation/native';
import Filters from './Filters';
import {theme} from '../../../theme';

const TopNav = () => {
  const navigation: any = useNavigation();
  const [isMap, setIsMap] = useState<boolean>(false);
  const theme = useTheme();

  return (
    <>
      <View style={styles.topNavContainer}>
        <TouchableOpacity
          onPress={() => setIsMap(!isMap)}
          touchSoundDisabled={true}
          activeOpacity={0.8}
          style={[styles.buttonBg, isMap && {backgroundColor: theme.colors.primary}]}>
          {isMap ? (
            <Gallery
              size="24"
              color={theme.colors.background}
              variant="Bold"
            />
          ) : (
            <Map1 size="24" color={theme.colors.primary} variant="Bold" />
          )}
        </TouchableOpacity>
        <View style={styles.placesContainer}>
          <AutoCompleteInput />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          touchSoundDisabled={true}
          activeOpacity={0.8}
          style={styles.buttonBg}>
          <User size="24" color={theme.colors.primary} variant="Bold" />
        </TouchableOpacity>
      </View>
      {/* Filters */}
      <Filters />
    </>
  );
};

const styles = StyleSheet.create({
  topNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
    position: 'absolute',
    top: 0,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  buttonBg: {
    backgroundColor: `${theme?.colors?.background}`,
    height: 40,
    width: 40,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
    shadowColor: `${theme?.colors?.secondary}`,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.4,
  },

  placesContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default TopNav;
