// navigation/TabLabels.tsx
import React from 'react';
import { Text } from 'react-native';
import { Routes } from '../../navigations/routes';

interface Props {
  routeName: string;
  focused: boolean;
  color: string;
}

const TabLabels = ({ routeName, focused, color }: Props) => {
  let label = '';

  switch (routeName) {
    case Routes.home:
      label = 'Xəbərlər';
      break;
    case Routes.settings:
      label = 'Ayarlar';
      break;
    default:
      label = 'Tab';
  }

  return (
    <Text style={{ color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>
      {label}
    </Text>
  );
};

export default TabLabels;
