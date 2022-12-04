import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from './TabBar';
import Search from '../Screens/SearchAbode';
import Alerts from '../Screens/Alerts';
import Calander from '../Screens/Calander';
import Favorites from '../Screens/Favorites';
import Inbox from '../Screens/Inbox';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Abode"
      tabBar={() => <TabBar />}
      screenOptions={{
        tabBarBackground: 'crimson',
      }}
    >

      {/* Tab screens */}
      <Tab.Screen
        name="Alerts"
        component={Alerts}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Abode"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
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