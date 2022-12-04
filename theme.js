import {configureFonts, DefaultTheme} from 'react-native-paper';

// const fontConfig = {
//   ios: {
//     regular: {
//       fontFamily: 'Poppins-Regular',
//       fontWeight: 'normal',
//     },
//     medium: {
//       fontFamily: 'Poppins-Medium',
//       fontWeight: 'normal',
//     },
//     light: {
//       fontFamily: 'Poppins-Light',
//       fontWeight: 'normal',
//     },
//     thin: {
//       fontFamily: 'Poppins-Thin',
//       fontWeight: 'normal',
//     },
//     bold: {
//       fontFamily: 'Poppins-Bold',
//       fontWeight: 'normal',
//     },
//   },
//   android: {
//     regular: {
//       fontFamily: 'Poppins-Regular',
//       fontWeight: 'normal',
//     },
//     medium: {
//       fontFamily: 'Poppins-Medium',
//       fontWeight: 'normal',
//     },
//     light: {
//       fontFamily: 'Poppins-Light',
//       fontWeight: 'normal',
//     },
//     thin: {
//       fontFamily: 'Poppins-Thin',
//       fontWeight: 'normal',
//     },
//     bold: {
//       fontFamily: 'Poppins-Bold',
//       fontWeight: 'normal',
//     },
//   },
// };

export const theme = {
  ...DefaultTheme,
  // fonts: configureFonts(fontConfig),
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4DBDBF',
    secondary: '#777777',
    error: '#F13A59',
    light_white: '#FFFFFF',
    dark_black: '#000000',
  },
};
