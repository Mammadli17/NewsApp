import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/home/HomeScreen';
import SettingsScreen from '../screens/main/settings/SettingsScreen';
import { Routes } from './routes';
import TabIcons from '../components/bottomTabs/TabIcons';
import TabLabels from '../components/bottomTabs/TabLabels';
import SavedScreen from '../screens/main/saved/SavedScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcons routeName={route.name} focused={focused} />
        ),
        tabBarLabel: ({ focused, color }) => (
          <TabLabels routeName={route.name} focused={focused} color={color} />
        ),
        tabBarActiveTintColor: 'rgba(1, 86, 86, 1)',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 80,
          paddingTop: 10,
        },
      })}
    >
      <Tab.Screen name={Routes.home} component={HomeScreen} />
      <Tab.Screen name={Routes.save} component={SavedScreen} />
      <Tab.Screen name={Routes.settings} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
