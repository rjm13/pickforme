import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useContext} from "react";
import {Platform} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import Home from '../screens/Home';
import UserLists from '../screens/UserLists';
import Settings from '../screens/Settings';
import Search from '../screens/Search';
import Category from '../screens/Category';
import CreateList from '../screens/CreateList';


import { StackParamList, TabOneParamList } from '../types';

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={25} style={{ marginBottom: -8 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<TabOneParamList>();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="UserLists"
        component={UserLists}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="CreateList"
        component={CreateList}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}