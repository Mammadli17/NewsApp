import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTab';
import { Routes } from './routes';
import { RootStackParamList } from '../types/navigation.types';
import NewsDetail from '../screens/main/detail/NewsDetail';

const MainStack = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={Routes.bottom} component={BottomTabNavigator} />
      <MainStack.Screen name={Routes.detail} component={NewsDetail} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
