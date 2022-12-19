import {StyleSheet, View, Text} from 'react-native';
import React, {memo} from 'react';
import {BarRheostat, RheostatThemeProvider} from 'react-native-rheostat';
import {theme} from '../../../../theme';

const RheoStat = ({
  setMaxBudget,
  maxBudget,
}: {
  setMaxBudget: any;
  maxBudget: number[];
}) => {

  const Rheotheme = {
    themeColor: theme.colors.primary,
    grey: '#C4C4C4',
  };

  const initialValues = [maxBudget[0], maxBudget[1]];
  const barSvgData = [
    50, 10, 40, 85, 85, 91, 35, 35, 53, 24, 50, 10, 40, 85, 85, 91, 35, 53, 24,
    50, 10, 53, 2, 85, 85, 91, 35, 53, 24, 50, 10, 40, 85, 85, 91, 35, 53, 24,
    50, 10, 40, 85, 85, 91, 35, 1, 35, 53, 24, 50, 10, 40, 85, 53, 24,
  ];

  return (
    <View>
      <View>
        <Text style={styles.textTitle}>Budget</Text>
        <Text style={styles.subTitle}>${maxBudget[0]} - ${maxBudget[1]}</Text>
      </View>
      <RheostatThemeProvider theme={Rheotheme}>
        <BarRheostat
          values={initialValues}
          min={0}
          max={3000}
          svgData={barSvgData}
          onValuesUpdated={({values}: number[]) => setMaxBudget(values)}
        />
      </RheostatThemeProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.secondary,
    fontFamily: 'Poppins-Bold',
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    paddingTop: 6,
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
export default memo(RheoStat);
