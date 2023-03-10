import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, useEffect, useRef, useContext} from 'react';
import { ColorSchemeName, Appearance } from 'react-native';

import { navigationRef } from './RootNavigation';

import { RootStackParamList } from '../types';
import StackNavigator from './StackNavigator';
import List from '../screens/List';
import EditList from '../screens/EditList';
import SignUp from '../screens//auth/SignUp';
import SignIn from '../screens//auth/SignIn';
import ForgotPassword from '../screens//auth/ForgotPassword';
import ForgotPasswordCon from '../screens//auth/ForgotPasswordCon';
//import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

export default function Navigation(
  { colorScheme }: { colorScheme: ColorSchemeName }
  ) {

  return (
    <NavigationContainer
      //linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      ref={navigationRef}
      >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, 
    }} initialRouteName="Root">
      <Stack.Screen name="Root" component={StackNavigator} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="EditList" component={EditList} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ForgotPasswordCon" component={ForgotPasswordCon} />
    </Stack.Navigator>
  );
}