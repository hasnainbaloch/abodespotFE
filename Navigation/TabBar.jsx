import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text
} from 'react-native';
import {
  Home,
  Like,
  NotificationBing,
  Calendar,
  MessageText1,
} from 'iconsax-react-native';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
// import lottieCircle from '../lottie/white-circle.json';
// import {useDispatch} from 'react-redux';
// import {resetActiveId, setTabBarHeight} from '../store/features/home/homeSlice';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState('tab-3');
  const navigation = useNavigation();
  // const dispatch = useDispatch();

  const activeTabHandle = (screen) => {
    navigation.navigate(screen);
  };

  useEffect(() => {
    let route = navigation.getState().routes[0].state;
    if (route) {
      let newActiveTab = route.index;
      if (!route.routes[route.index].params) {
        setActiveTab(`tab-${newActiveTab + 1}`);
      }
    }
  });

  return (
    <View
      style={styles.container}
    // onLayout={event =>
    //   dispatch(setTabBarHeight(event.nativeEvent.layout.height))
    // }
    >

      {/* <LottieView
            source={lottieCircle}
            loop
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: 56,
              width: 56,
              zIndex: 1,
            }} 
          />
            */}

      <TouchableNativeFeedback
        useForeground={true}
        background={TouchableNativeFeedback.Ripple('#fff', true, 25)}
        onPress={() => activeTabHandle('Alerts')}>
        <View style={styles.icons}>
          <NotificationBing
            size="28"
            color={activeTab == 'tab-1' ? '#4DBDBF' : '#777777'}
            variant={activeTab == 'tab-1' ? "Bold" : "TwoTone"}
          />
          <Text style={{ ...styles.iconsTitle, color: activeTab == 'tab-1' ? '#4DBDBF' : '#777777' }}>Alerts</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => activeTabHandle('Favorites')}>
        <View style={styles.icons}>
          <Like
            size="28"
            color={activeTab == 'tab-2' ? '#4DBDBF' : '#777777'}
            variant={activeTab == 'tab-2' ? "Bold" : "TwoTone"}
          />
          <Text style={{ ...styles.iconsTitle, color: activeTab == 'tab-2' ? '#4DBDBF' : '#777777' }}>Favorites</Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback
        useForeground={true}
        background={TouchableNativeFeedback.Ripple('#fff', true, 25)}
        onPress={() => activeTabHandle('Abode')}>
        <View style={styles.icons}>
          <Home
            size="28"
            color={activeTab == 'tab-3' ? '#4DBDBF' : '#777777'}
            variant={activeTab == 'tab-3' ? "Bold" : "TwoTone"}
          />
          <Text style={{ ...styles.iconsTitle, color: activeTab == 'tab-3' ? '#4DBDBF' : '#777777' }}>Abode</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
        useForeground={true}
        background={TouchableNativeFeedback.Ripple('#fff', true, 25)}
        onPress={() => activeTabHandle('Inbox')}>
        <View style={styles.icons}>
          <MessageText1
            size="28"
            color={activeTab == 'tab-4' ? '#4DBDBF' : '#777777'}
            variant={activeTab == 'tab-4' ? "Bold" : "TwoTone"}
          />
          <Text style={{ ...styles.iconsTitle, color: activeTab == 'tab-4' ? '#4DBDBF' : '#777777' }}>Inbox</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
        useForeground={true}
        background={TouchableNativeFeedback.Ripple('#fff', true, 25)}
        onPress={() => activeTabHandle('Calander')}>
        <View style={styles.icons}>
          <Calendar
            size="28"
            color={activeTab == 'tab-5' ? '#4DBDBF' : '#777777'}
            style={styles.icons}
            variant={activeTab == 'tab-5' ? "Bold" : "TwoTone"}
          />
          <Text style={{ ...styles.iconsTitle, color: activeTab == 'tab-5' ? '#4DBDBF' : '#777777' }}>Calander</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4DBDBF10',
    paddingBottom: Platform.OS == 'ios' ? 8 : 2,
    paddingHorizontal: 5,
  },
  icons: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsTitle: {
    color: '#fff',
    paddingTop: 4
  },
});
export default TabBar;
