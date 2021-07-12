import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from './navigation/drawer-navigator';
import BottomTabNavigator from './navigation/bottom-tab-navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/home-screen/home-screen'
import LoginScreen from "./screens/login-screen/login-screen"

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;