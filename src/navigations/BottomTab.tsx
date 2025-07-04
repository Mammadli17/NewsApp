import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/home/HomeScreen';
import { Routes } from './routes';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={Routes.home} component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
