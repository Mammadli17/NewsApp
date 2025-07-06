import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import MainStackNavigator from './src/navigations/Main.Router';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/context/ThemeContext';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <NavigationContainer>
        <ThemeProvider>
          <MainStackNavigator />
        </ThemeProvider>
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