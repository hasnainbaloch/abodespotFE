import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {RowVertical, Map1, Profile} from 'iconsax-react-native';
import AutoCompleteInput from './AutoComplete';

const TopNav = () => {
  const theme = useTheme();

  return (
    <View style={styles().topNavContainer}>
      <TouchableOpacity
        touchSoundDisabled={true}
        activeOpacity={0.8}
        style={styles(theme).buttonBg}>
        {false ? (
          <RowVertical
            size="20"
            color={theme.colors.primary}
            variant="Bulk"
          />
        ) : (
          <Map1 size="24" color={theme.colors.primary} variant="Bold" />
        )}
      </TouchableOpacity>
      <View style={styles().placesContainer}>
        <AutoCompleteInput />
      </View>
      <TouchableOpacity
        touchSoundDisabled={true}
        activeOpacity={0.8}
        style={styles(theme).buttonBg}>
        <Profile size="24" color={theme.colors.primary} variant="Bold" />
      </TouchableOpacity>
    </View>
  );
};

const styles = (props?: any) =>
  StyleSheet.create({
    topNavContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flex: 1,
      position: 'absolute',
      top: 0,
      padding: 5,
    },

    buttonBg: {
      backgroundColor: `${props?.colors?.background}`,
      height: 40,
      width: 40,
      borderRadius: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 3,
      shadowColor: `${props?.colors?.primary}`,
      shadowOffset: {
        width: 10,
        height: 13,
      },
      shadowOpacity:  0.17,
      shadowRadius: 3.05,
      elevation: 6,
      borderColor: `${props?.colors?.secondary}`,
      borderWidth: 0.3,
    },

    placesContainer: {
      flex: 1,
      marginHorizontal: 5,
    },
  });

export default TopNav;
