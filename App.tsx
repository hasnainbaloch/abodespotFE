import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {enableLatestRenderer} from 'react-native-maps';


// custom imports
import AppScreenNavigation from './Navigation';
import {theme} from './theme';

const App = () => {
  enableLatestRenderer();
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider style={backgroundStyle}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <AppScreenNavigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
