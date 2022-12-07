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
            size="16"
            color={theme.colors.background}
            variant="Bulk"
          />
        ) : (
          <Map1 size="20" color={theme.colors.background} variant="Bulk" />
        )}
      </TouchableOpacity>
      <View style={styles().placesContainer}>
        <AutoCompleteInput />
      </View>
      <TouchableOpacity
        touchSoundDisabled={true}
        activeOpacity={0.8}
        style={styles(theme).buttonBg}>
        <Profile size="20" color={theme.colors.background} variant="Bold" />
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
      padding: 10,
    },

    buttonBg: {
      backgroundColor: `${props?.colors?.primary}`,
      height: 40,
      width: 40,
      borderRadius: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 3
    },

    placesContainer: {
      flex:1,
      marginHorizontal: 15,
    },
  });

export default TopNav;
