import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from './TabBar';
import Search from '../Screens/Search';
import Alerts from '../Screens/Alerts';
import Calander from '../Screens/Calander';
import Favorites from '../Screens/Favorites';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Abode"
      tabBar={() => <TabBar />}
      screenOptions={{
        tabBarBackground: '#000',
      }}
    >

      {/* Tab screens */}
      <Tab.Screen
        name="Alerts"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={Alerts}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Abode"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Inbox"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Calander"
        component={Calander}
        options={{ headerShown: false }}
      />

    </Tab.Navigator>
  );
};

export default TabNavigation;