import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {RowVertical, Map1, Profile} from 'iconsax-react-native';

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
      <Text>Search</Text>
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
    topNavContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex:1,
      width: '100%',
      position: 'absolute',
      top: 0,
      padding: 20
    },

    buttonBg: {
      backgroundColor: `${props?.colors?.primary}`,
      height: 33,
      width: 33,
      borderRadius: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default TopNav;
