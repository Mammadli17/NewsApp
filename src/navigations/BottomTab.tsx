import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/home/HomeScreen';
import SettingsScreen from '../screens/main/settings/SettingsScreen';
import { Routes } from './routes';
import TabIcons from '../components/bottomTabs/TabIcons';
import TabLabels from '../components/bottomTabs/TabLabels';

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
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 60,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name={Routes.home} component={HomeScreen} />
      <Tab.Screen name={Routes.settings} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
