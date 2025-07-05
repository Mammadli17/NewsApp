import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import MainStackNavigator from './src/navigations/Main.Router';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default gestureHandlerRootHOC(App);